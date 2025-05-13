import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="px-6 py-2 text-lg font-medium leading-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition-opacity"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default GradientButton;
