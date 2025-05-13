interface FaqItemProps {
    question: string;
    answer: string;
}

import { ChevronRight } from 'lucide-react';
import React, { useState } from 'react'
import {motion} from "framer-motion"

// FaqItem Component
export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className="border-b border-white/10 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left"
            >
                <h3 className="text-lg font-medium">{question}</h3>
                <ChevronRight
                    className={`h-5 w-5 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                />
            </button>

            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
            >
                <p className="pt-2 pb-1 text-white/70">{answer}</p>
            </motion.div>
        </div>
    );
};
