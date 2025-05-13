import { ReactNode } from "react";
import { colors } from "~/constants";

type Size = 'sm' | 'md' | 'lg' | 'xl';

interface NeonTextProps {
    children: ReactNode;
    size?: Size;
    className?: string;
    [key: string]: unknown;
}

// NeonText Component
export const NeonText: React.FC<NeonTextProps> = ({ children, size = "md", className = "", ...props }) => {
    const sizeClasses = {
        sm: "text-sm",
        md: "text-lg",
        lg: "text-2xl",
        xl: "text-4xl",
    };


   

    return (
        <span
            className={`${sizeClasses[size]} font-bold ${className}`}
            style={{
                color: colors.highlight,
                textShadow: `0 0 5px ${colors.highlight}80, 0 0 10px ${colors.highlight}40, 0 0 15px ${colors.highlight}20`
            }}
            {...props}
        >
            {children}
        </span>
    );
};