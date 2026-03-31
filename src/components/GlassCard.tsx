import type { VocabularyTerm } from "../types/VocabularyTerm";
import { motion } from 'motion/react';

interface GlassCardProps {
    term: VocabularyTerm;
    isFlipped: boolean;
    onFlip: () => void;
}

export const GlassCard = ({ term, isFlipped, onFlip }: GlassCardProps) => {
  return (
    <div 
      className="perspective-1000 w-full max-w-md h-112.5 cursor-pointer mx-auto relative"
      onClick={onFlip}
    >
      {/* LADO FRONTAL */}
      <motion.div
        className="absolute inset-0 backface-hidden glass-panel rounded-[2.5rem] p-10 flex flex-col justify-between border-white/10 bg-slate-900/40 backdrop-blur-2xl z-10"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        style={{ backfaceVisibility: 'hidden' }} // Reforço via Style Inline
      >
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400/60">
            {term.category} // SYSTEM_v2
          </span>
          <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
        </div>
        
        <h2 className="text-5xl font-black tracking-tighter text-white leading-none">
          {term.term}
        </h2>
        
        <div className="space-y-4">
          <div className="h-px w-full bg-linear-to-r from-indigo-500/50 to-transparent" />
          <p className="text-[10px] text-slate-500 font-mono uppercase tracking-widest">
            Tap to reveal decrypt...
          </p>
        </div>
      </motion.div>

      {/* LADO TRASEIRO */}
      <motion.div
        className="absolute inset-0 glass-panel rounded-[2.5rem] p-10 flex flex-col justify-center items-center bg-indigo-600/10 border-indigo-500/30 backdrop-blur-3xl"
        initial={false}
        animate={{ rotateY: isFlipped ? 0 : -180 }} // Lógica invertida para o verso
        transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
        style={{ backfaceVisibility: 'hidden' }}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300 mb-6">Translation</span>
        <p className="text-3xl font-bold text-white text-center leading-tight tracking-tight">
          {term.translation}
        </p>
        <div className="mt-8 p-5 bg-black/20 rounded-2xl border border-white/5 w-full">
          <p className="text-sm text-slate-300 text-center italic leading-relaxed">
            "{term.example}"
          </p>
        </div>
      </motion.div>
    </div>
  );
};