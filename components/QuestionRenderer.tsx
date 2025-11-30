import React from 'react';
import { motion } from 'framer-motion';
import { Question, QuestionType, Option, SubQuestion } from '../types';
import { Check } from 'lucide-react';

interface QuestionRendererProps {
  question: Question;
  value: any;
  onChange: (val: any) => void;
  uiLabels: {
    lowest: string;
    highest: string;
    placeholder: string;
  };
}

const QuestionRenderer: React.FC<QuestionRendererProps> = ({ question, value, onChange, uiLabels }) => {
  
  const handleSingleChoice = (val: string) => {
    onChange(val);
  };

  const handleMultiChoice = (val: string) => {
    const current = (value as string[]) || [];
    if (current.includes(val)) {
      onChange(current.filter(v => v !== val));
    } else {
      if (question.maxSelect && current.length >= question.maxSelect) return;
      onChange([...current, val]);
    }
  };

  const handleMatrixRating = (subId: string, rating: number) => {
    const current = (value as {[key: string]: number}) || {};
    onChange({ ...current, [subId]: rating });
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="w-full max-w-3xl mx-auto"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 leading-tight">
        {question.title}
      </h2>
      
      {question.description && (
        <p className="text-cyan-300/80 mb-8 font-mono text-sm">
          {question.description}
        </p>
      )}
      
      {!question.description && <div className="mb-8" />}

      <div className="space-y-4">
        {/* Single Choice */}
        {(question.type === QuestionType.SINGLE_CHOICE || question.type === QuestionType.LIKERT) && (
          <div className="grid gap-3">
            {question.options?.map((opt: Option) => (
              <button
                key={opt.id}
                onClick={() => handleSingleChoice(opt.value)}
                className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center group
                  ${value === opt.value 
                    ? 'bg-cyan-900/30 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}
              >
                <div className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center shrink-0
                  ${value === opt.value ? 'border-cyan-400' : 'border-gray-500 group-hover:border-gray-400'}`}>
                  {value === opt.value && <div className="w-2.5 h-2.5 rounded-full bg-cyan-400" />}
                </div>
                <span className={`text-lg ${value === opt.value ? 'text-cyan-100' : 'text-gray-300'}`}>
                  {opt.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Multi Choice */}
        {question.type === QuestionType.MULTI_CHOICE && (
          <div className="grid gap-3">
            {question.options?.map((opt: Option) => {
              const isSelected = (value as string[])?.includes(opt.value);
              return (
                <button
                  key={opt.id}
                  onClick={() => handleMultiChoice(opt.value)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex items-center group
                    ${isSelected
                      ? 'bg-purple-900/30 border-purple-400 shadow-[0_0_15px_rgba(192,132,252,0.2)]' 
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                    }`}
                >
                  <div className={`w-5 h-5 rounded border-2 mr-4 flex items-center justify-center shrink-0
                    ${isSelected ? 'border-purple-400 bg-purple-500' : 'border-gray-500 group-hover:border-gray-400'}`}>
                    {isSelected && <Check size={14} className="text-white" />}
                  </div>
                  <span className={`text-lg ${isSelected ? 'text-purple-100' : 'text-gray-300'}`}>
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Matrix Rating (Buttons) */}
        {question.type === QuestionType.RATING_MATRIX && (
          <div className="space-y-6 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
            {question.subQuestions?.map((sub: SubQuestion) => {
               const currentVal = (value as {[key: string]: number})?.[sub.id]; 
               return (
                 <div key={sub.id} className="bg-white/5 p-5 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                   <h3 className="text-gray-200 mb-4 text-sm font-medium">{sub.text}</h3>
                   
                   <div className="flex items-center justify-between mb-2 px-1">
                     <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{uiLabels.lowest}</span>
                     <span className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">{uiLabels.highest}</span>
                   </div>

                   <div className="flex justify-between gap-2">
                     {[1, 2, 3, 4, 5].map((num) => (
                       <button 
                         key={num}
                         onClick={() => handleMatrixRating(sub.id, num)}
                         className={`flex-1 h-10 rounded-md border transition-all duration-300 font-mono font-bold text-sm flex items-center justify-center relative overflow-hidden
                           ${currentVal === num 
                             ? 'bg-cyan-500 text-black border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                             : 'bg-gray-800/50 text-gray-400 border-gray-700 hover:border-gray-500 hover:bg-gray-700'
                           }`}
                       >
                         {currentVal === num && (
                           <div className="absolute inset-0 bg-white/20 animate-pulse" />
                         )}
                         {num}
                       </button>
                     ))}
                   </div>
                 </div>
               );
            })}
          </div>
        )}

        {/* Text Area */}
        {question.type === QuestionType.TEXT && (
          <textarea
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            className="w-full h-40 bg-black/30 border border-white/20 rounded-xl p-4 text-gray-200 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none transition-colors resize-none font-mono text-sm leading-relaxed"
            placeholder={uiLabels.placeholder}
          />
        )}
      </div>
    </motion.div>
  );
};

export default QuestionRenderer;