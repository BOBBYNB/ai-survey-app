import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { initialQuestion, middleSchoolQuestions, universityQuestions } from '../data';
import { Question, SurveyResponse } from '../types';
import QuestionRenderer from './QuestionRenderer';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface SurveyContainerProps {
  onComplete: () => void;
  onBackToHome: () => void;
}

const SurveyContainer: React.FC<SurveyContainerProps> = ({ onComplete, onBackToHome }) => {
  const [currentQIndex, setCurrentQIndex] = useState(-1); // -1 is initial question
  const [path, setPath] = useState<'middle' | 'uni' | null>(null);
  const [answers, setAnswers] = useState<SurveyResponse>({});
  
  // Resolve current question object
  const getCurrentQuestion = (): Question => {
    if (currentQIndex === -1) return initialQuestion;
    if (path === 'uni') return universityQuestions[currentQIndex];
    return middleSchoolQuestions[currentQIndex];
  };

  const currentQuestion = getCurrentQuestion();
  const currentAnswer = answers[currentQuestion.id];

  // Calculate Progress
  const totalQuestions = path === 'uni' ? universityQuestions.length : middleSchoolQuestions.length;
  // +1 because initial question is index -1, but visually we just track the main flow
  const progress = path ? ((currentQIndex + 1) / totalQuestions) * 100 : 0;

  const handleNext = () => {
    // Branching Logic for Initial Question
    if (currentQIndex === -1) {
      if (!currentAnswer) return; // Enforce selection
      const val = currentAnswer as string;
      if (val === 'uni') {
        setPath('uni');
      } else {
        setPath('middle');
      }
      setCurrentQIndex(0);
      return;
    }

    // Normal Flow
    const isLast = (path === 'uni' && currentQIndex === universityQuestions.length - 1) || 
                   (path === 'middle' && currentQIndex === middleSchoolQuestions.length - 1);

    if (isLast) {
      saveData();
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

  const saveData = () => {
    const record = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      path: path === 'middle' ? 'middle_school' : 'university',
      answers: answers
    };
    
    // Mock Save
    const existing = localStorage.getItem('survey_responses');
    const arr = existing ? JSON.parse(existing) : [];
    arr.push(record);
    localStorage.setItem('survey_responses', JSON.stringify(arr));
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
          />
        </AnimatePresence>
      </main>

      <footer className="w-full p-6 flex justify-between max-w-4xl z-20 gap-4">
        <button
          onClick={handleBack}
          className="flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 text-gray-500 hover:text-white hover:bg-white/5"
        >
          <ChevronLeft size={20} />
          <span>Back</span>
        </button>

        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all duration-300
            ${canProceed() 
              ? 'bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]' 
              : 'bg-gray-800 text-gray-500 cursor-not-allowed'}`}
        >
          <span>Next</span>
          <ChevronRight size={20} />
        </button>
      </footer>

    </div>
  );
};

export default SurveyContainer;