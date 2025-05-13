import { ReactNode } from "react";
import {motion} from "framer-motion"
import { colors } from "~/constants";

interface StatCardProps {
    icon: ReactNode;
    title: string;
    value: string;
    description: string;
}

// StatCard Component
export const StatCard: React.FC<StatCardProps> = ({ icon, title, value, description }) => {
    const randomRotation = Math.random() * 6 - 3;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: 0 }}
            className="relative p-6 overflow-hidden group"
            style={{ transform: `rotate(${randomRotation}deg)` }}
        >
            {/* Background layers */}
            <div className="absolute inset-0 bg-black/30 rounded-xl backdrop-blur-sm z-0" />
            <div className="absolute -inset-1 bg-gradient-to-br from-transparent via-transparent to-transparent group-hover:from-primary/20 group-hover:via-highlight/20 group-hover:to-secondary/20 rounded-xl z-0 transition-all duration-700" />
            <div className="absolute inset-px bg-gray-900/80 rounded-lg z-0" />

            {/* Animated border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-highlight/50 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 z-0" />

            {/* Animated corner accents - visible by default */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg border-highlight/50 transition-all duration-300 delay-100 z-10" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg border-primary/50 transition-all duration-300 delay-100 z-10" />
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg border-highlight/50 transition-all duration-300 delay-100 z-10" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 rounded-br-lg border-primary/50 transition-all duration-300 delay-100 z-10" />

            {/* Content */}
            <div className="relative z-20 flex flex-col items-start">
                <div className="p-2 mb-3" style={{
                    background: `linear-gradient(135deg, ${colors.primary}30 0%, ${colors.highlight}30 100%)`,
                    borderRadius: "12px"
                }}>
                    {icon}
                </div>
                <h4 className="text-sm text-white/70 mb-1">{title}</h4>
                <div className="flex items-end gap-2 mb-1">
                    <span className="text-3xl font-bold">{value}</span>
                    <motion.div
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.2 }}
                        className="text-xs px-2 py-0.5 rounded-full bg-highlight/20 text-highlight border border-highlight/30 mb-1"
                    >
                        {Math.random() > 0.5 ? "+18%" : "+24%"}
                    </motion.div>
                </div>
                <p className="text-sm text-white/60">{description}</p>
            </div>
        </motion.div>
    );
};
