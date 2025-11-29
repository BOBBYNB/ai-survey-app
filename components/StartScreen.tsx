import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Binary, Cpu } from 'lucide-react';
import { getSurveyContent } from '../data';
import { Language } from '../types';

interface StartScreenProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  onStart: () => void;
  onAdmin: () => void;
}

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number; size: number }> = [];

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const initParticles = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      
      const particleCount = Math.floor((width * height) / 10000); 
      
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          size: Math.random() * 2 + 0.5,
        });
      }
    };

    const draw = () => {
      const width = canvas.width;
      const height = canvas.height;
      ctx.clearRect(0, 0, width, height);

      const mouseX = mouseRef.current.x;
      const mouseY = mouseRef.current.y;

      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.6)';
        ctx.fill();

        // Connect to mouse
        const dxMouse = p1.x - mouseX;
        const dyMouse = p1.y - mouseY;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < 150) {
           ctx.beginPath();
           ctx.strokeStyle = `rgba(34, 211, 238, ${0.4 - distMouse / 150})`;
           ctx.lineWidth = 1;
           ctx.moveTo(p1.x, p1.y);
           ctx.lineTo(mouseX, mouseY);
           ctx.stroke();
        }

        // Connect to nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(34, 211, 238, ${0.2 - dist / 80})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    initParticles();
    draw();

    const handleResize = () => {
      initParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />;
};

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: '日本語' },
  { code: 'zh', label: '中文' },
];

const StartScreen: React.FC<StartScreenProps> = ({ language, setLanguage, onStart, onAdmin }) => {
  const [clickCount, setClickCount] = useState(0);
  const content = getSurveyContent(language);

  const handleSecretClick = () => {
    setClickCount(prev => {
      const newCount = prev + 1;
      if (newCount === 5) {
        onAdmin();
        return 0;
      }
      return newCount;
    });
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 via-transparent to-black/80 pointer-events-none" />
      
      {/* Language Selector */}
      <div className="absolute top-8 z-30 flex gap-2 p-1 bg-black/40 backdrop-blur-md rounded-full border border-white/10">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all duration-300 ${
              language === lang.code 
                ? 'bg-cyan-500 text-black font-bold shadow-[0_0_10px_rgba(34,211,238,0.5)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            {lang.label}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        key={language} // Re-animate on language change
        className="max-w-6xl z-10 text-center flex flex-col items-center relative mt-12"
      >
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-cyan-500/50" />
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-12 opacity-20"
        >
          <Binary size={40} className="text-cyan-400" />
        </motion.div>

        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-cyan-200"
          style={{ textWrap: 'balance' }} 
        >
          {content.ui.title}
        </h1>
        
        <h2 className="text-cyan-400/80 font-mono text-xs md:text-sm tracking-[0.2em] mb-8 uppercase">
          {content.ui.subtitle}
        </h2>

        <motion.div 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-24 h-1 bg-cyan-500 mb-8 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        />

        <div className="bg-black/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl max-w-2xl shadow-2xl relative group hover:border-cyan-500/30 transition-colors duration-500">
           <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50 rounded-tl" />
           <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500/50 rounded-tr" />
           <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50 rounded-bl" />
           <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50 rounded-br" />

           <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
             {content.ui.description}
           </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="mt-12 group relative px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-bold text-xl tracking-wider text-black overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          <span className="relative flex items-center gap-3">
            {content.ui.startBtn} <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </span>
        </motion.button>

        <div className="mt-16 flex gap-8 text-cyan-800/60 font-mono text-xs uppercase tracking-[0.2em]">
          <span 
            onClick={handleSecretClick} 
            className="flex items-center gap-2 cursor-pointer select-none active:text-white transition-colors"
          >
            <Cpu size={14} /> {content.ui.neuralAnalysis}
          </span>
          <span className="flex items-center gap-2"><Binary size={14} /> {content.ui.patternRecognition}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default StartScreen;