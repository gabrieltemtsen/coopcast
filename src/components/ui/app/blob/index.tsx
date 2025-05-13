import { colors } from "~/constants";
import {motion} from 'framer-motion'

interface BlobProps {
    className?: string;
    size?: keyof typeof sizesMap;
    color?: string;
}

export const sizesMap = {
    sm: "w-32 h-32",
    md: "w-64 h-64",
    lg: "w-96 h-96",
};

// Blob Component
export const Blob: React.FC<BlobProps> = ({ className = "", size = "md", color = colors.primary }) => {

    interface SizesMap {
        sm: string;
        md: string;
        lg: string;
    }
    
    const sizesMap: SizesMap = {
        sm: "w-32 h-32",
        md: "w-64 h-64",
        lg: "w-96 h-96",
    };
    
    
    return (
        <div className={`absolute opacity-10 blur-3xl mix-blend-screen ${sizesMap[size]} ${className}`}>
            <motion.div
                initial={{ scale: 0.8, rotate: 0 }}
                animate={{
                    scale: [0.8, 1.2, 0.9, 1.1, 0.8],
                    rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                className="w-full h-full"
                style={{
                    background: `radial-gradient(circle at 50% 50%, ${color} 0%, transparent 70%)`,
                    borderRadius: "50%"
                }}
            />
        </div>
    );
};
