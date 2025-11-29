import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { getSurveyContent } from '../data';
import { Question, SurveyResponse, Language } from '../types';
import QuestionRenderer from './QuestionRenderer';
import { ChevronRight, ChevronLeft, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient';

interface SurveyContainerProps {
  language: Language;
  onComplete: () => void;
  onBackToHome: () => void;
}

const SurveyContainer: React.FC<SurveyContainerProps> = ({ language, onComplete, onBackToHome }) => {
  const [currentQIndex, setCurrentQIndex] = useState(-1); // -1 is initial question
  const [path, setPath] = useState<'middle' | 'high' | 'uni' | null>(null);
  const [answers, setAnswers] = useState<SurveyResponse>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const content = getSurveyContent(language);

  // Resolve current question object
  const getCurrentQuestion = (): Question => {
    if (currentQIndex === -1) return content.initialQuestion;
    if (path === 'uni') return content.universityQuestions[currentQIndex];
    // Both middle and high school use the same question set
    return content.middleSchoolQuestions[currentQIndex];
  };

  const currentQuestion = getCurrentQuestion();
  const currentAnswer = answers[currentQuestion.id];

  // Calculate Progress
  const totalQuestions = path === 'uni' ? content.universityQuestions.length : content.middleSchoolQuestions.length;
  // +1 because initial question is index -1, but visually we just track the main flow
  const progress = path ? ((currentQIndex + 1) / totalQuestions) * 100 : 0;

  const handleNext = async () => {
    // Branching Logic for Initial Question
    if (currentQIndex === -1) {
      if (!currentAnswer) return; // Enforce selection
      const val = currentAnswer as string;
      if (val === 'uni') {
        setPath('uni');
      } else if (val === 'high') {
        setPath('high');
      } else {
        setPath('middle');
      }
      setCurrentQIndex(0);
      return;
    }

    // Normal Flow
    const isLast = (path === 'uni' && currentQIndex === content.universityQuestions.length - 1) || 
                   ((path === 'middle' || path === 'high') && currentQIndex === content.middleSchoolQuestions.length - 1);

    if (isLast) {
      setIsSubmitting(true);
      await saveData();
      setIsSubmitting(false);
      onComplete();
    } else {
      setCurrentQIndex(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentQIndex === -1) {
      onBackToHome();
    } else {
      setCurrentQIndex(prev => prev - 1);
    }
  };

  const saveData = async () => {
    try {
      let dbPath = 'middle_school';
      if (path === 'uni') dbPath = 'university';
      if (path === 'high') dbPath = 'high_school';

      const { error } = await supabase
        .from('survey_responses')
        .insert([
          { 
            path: dbPath,
            answers: answers 
          },
        ]);
      
      if (error) {
        console.error('Error saving data to Supabase:', error);
        alert('Error saving data. Please try again.');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
    }
  };

  // Check if current question is answered (validation)
  const canProceed = () => {
    if (currentAnswer === undefined || currentAnswer === null) return false;
    if (typeof currentAnswer === 'string' && currentAnswer.trim() === '') return false;
    if (Array.isArray(currentAnswer) && currentAnswer.length === 0) return false;
    // For Matrix, check if all sub-questions are answered
    if (currentQuestion.type === 'RATING_MATRIX' && currentQuestion.subQuestions) {
        const val = currentAnswer as {[key:string]: number};
        if (Object.keys(val).length < currentQuestion.subQuestions.length) return false;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col items-center relative overflow-hidden text-cyan-50">
      
      {/* Background Grid */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
            backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
        }}
      ></div>

      {/* Progress Bar */}
      {path && (
        <div className="absolute top-0 left-0 w-full h-1 bg-gray-800 z-20">
          <motion.div 
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      )}

      {/* Question Counter (Top Right) */}
      <div className="absolute top-6 right-6 font-mono text-cyan-500/50 text-sm z-20">
        {path ? `Q${currentQIndex + 1}/${totalQuestions}` : 'INIT'}
      </div>

      <main className="flex-grow w-full max-w-4xl p-6 flex flex-col justify-center z-10 relative">
        <AnimatePresence mode="wait">
          <QuestionRenderer 
            key={currentQuestion.id}
            question={currentQuestion}
            value={currentAnswer}
            onChange={(val) => setAnswers(prev => ({ ...prev, [currentQuestion.id]: val }))}
            uiLabels={{
              lowest: content.ui.lowest,
              highest: content.ui.highest,
              placeholder: content.ui.placeholder
            }}
          />
        </AnimatePresence>
      </main>

      <footer className="w-full p-6 flex justify-between max-w-4xl z-20 gap-4">
        <button
          onClick={handleBack}
          disabled={isSubmitting}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 text-gray-500 hover:text-white hover:bg-white/5 disabled:opacity-50 uppercase"
        >
          <ChevronLeft size={20} />
          <span>{content.ui.backBtn}</span>
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed() || isSubmitting}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300 uppercase
            ${canProceed() 
              ? 'bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]' 
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
        >
          {isSubmitting ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              <span>{content.ui.submittingBtn}</span>
            </>
          ) : (
            <>
              <span>{content.ui.nextBtn}</span>
              <ChevronRight size={20} />
            </>
          )}
        </button>
      </footer>

    </div>
  );
};

export default SurveyContainer;