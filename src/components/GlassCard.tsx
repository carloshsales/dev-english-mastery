import type { VocabularyTerm } from "../types/VocabularyTerm";
import { motion } from 'motion/react';

interface GlassCardProps {
    term: VocabularyTerm;
    isFlipped: boolean;
    onFlip: () => void;
}

export const GlassCard = ({term, isFlipped, onFlip}: GlassCardProps) => {
    return (
        <div className="perspective-1000 w-full max-w-md h-111.5 cursor-pointer mx-auto" onClick={onFlip}>
            <motion.div 
                className="relative w-full h-full preserve-3d" 
                animate={{rotateY: isFlipped ? 180 : 0}} 
                transition={{duration: 0.7, type: 'spring'}}>
                
                {/*FRONT*/}
                <div className="absolute inset-0 backface-hidden glass-panel rounded-3xl p-10 flex flex-col justify-between border-white/10 bg-slate-900/40 backdrop-blur-2xl">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-black uppercase tracking-[0.3em] text-indigo-400/60">
                            {term.category}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99, 102, 241, 0.8)]" />
                    </div>

                    <h2 className="text-5xl font-black tracking-tight text-white leading-none">
                        {term.term}
                    </h2>

                    <div className="space-y-4">
                        <div className="h-px w-full bg-linear-to-r from-indigo-500/50 to-transparent" />
                        <p className="text-sm text-slate-500 font-mono uppercase tracking-widest">
                            Tap to reveal decrypt...
                        </p>
                    </div>
                </div>
                <div className="absolute inset-0 backface-hidden glass-panel rounded-[2.5rem] p-10 flex flex-col justify-center items-center rotate-y-180 bg-indigo-600/10 border-indigo-500/30 backdrop-blur-3xl">
                    <span>Translation</span>
                    <p>
                        {term.translation}
                    </p>
                    <div>
                        <p>
                            "{term.example}"
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}