import type { VocabularyTerm } from "../types/VocabularyTerm";
import { motion } from 'motion/react';

interface GlassCardProps {
    term: VocabularyTerm;
    isFlipped: boolean;
    onFlip: () => void;
}

export const GlassCard = ({term, isFlipped, onFlip}: GlassCardProps) => {
    return (
        <div>
            <motion.div>
                <div>
                    <div>
                        <span>
                            {term.category}
                        </span>
                    </div>

                    <h2>
                        {term.term}
                    </h2>

                    <div>
                        <div>
                            <p>
                                Tap to reveal decrypt...
                            </p>
                        </div>
                    </div>
                </div>
                <div>
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