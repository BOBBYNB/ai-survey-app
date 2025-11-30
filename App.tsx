import React, { useState } from 'react';
import StartScreen from './components/StartScreen';
import SurveyContainer from './components/SurveyContainer';
import AdminView from './components/AdminView';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Language } from './types';
import { getSurveyContent } from './data';

const App: React.FC = () => {
  const [view, setView] = useState<'start' | 'survey' | 'admin' | 'complete'>('start');
  const [language, setLanguage] = useState<Language>('en');

  const content = getSurveyContent(language);

  if (view === 'start') {
    return (
      <StartScreen 
        language={language}
        setLanguage={setLanguage}
        onStart={() => setView('survey')} 
        onAdmin={() => setView('admin')}
      />
    );
  }

  if (view === 'admin') {
    return <AdminView onBack={() => setView('start')} />;
  }

  if (view === 'complete') {
    return (
      <div className="min-h-screen bg-[#030712] flex flex-col items-center justify-center text-center p-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
        </div>
        
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="z-10"
        >
          <CheckCircle className="w-24 h-24 text-green-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-cyan-300">
            {content.ui.completeTitle}
          </h1>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            {content.ui.completeText}
          </p>
          <button 
            onClick={() => setView('start')}
            className="px-6 py-2 border border-white/20 rounded-full hover:bg-white/10 transition-colors text-sm font-mono"
          >
            {content.ui.returnHome}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <SurveyContainer 
      language={language}
      onComplete={() => setView('complete')} 
      onBackToHome={() => setView('start')} 
    />
  );
};

export default App;