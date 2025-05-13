import { ReactNode } from "react";

interface ButtonProps {
    variant?: string;
    className?: string;
    children: ReactNode;
    [key: string]: unknown;
}

// Button Component
export const CustomButton: React.FC<ButtonProps> = ({ className = "", children, ...props }) => {
    return (
        <button
            className={`px-4 py-2 rounded-lg font-medium transition-all ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};