import { ReactNode } from "react";
import { motion } from "framer-motion";
import { colors } from "~/constants";

interface ProcessStepProps {
    number: number;
    title: string;
    description: string;
    icon: ReactNode;
    style?: React.CSSProperties;
}

// ProcessStep Component
export const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, icon, style = {} }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex items-start gap-6 p-6"
        >
            {/* Number indicator with glowing effect */}
            <div className="relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold" style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.highlight} 100%)`,
                    boxShadow: `0 0 15px ${colors.primary}60`
                }}>
                    {number}
                </div>
                {number < 4 && (
                    <div className="absolute top-14 left-6 h-20 w-1" style={{
                        background: `linear-gradient(to bottom, ${colors.highlight}80 0%, transparent 100%)`
                    }} />
                )}
            </div>

            <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg" style={{
                        background: `${colors.primary}20`
                    }}>
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold" style={style}>{title}</h3>
                </div>
                <p className="text-white/70">{description}</p>
            </div>
        </motion.div>
    );
};
