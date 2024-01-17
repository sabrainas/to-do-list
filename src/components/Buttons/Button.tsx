// Buttons/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  customClass?: string;
  onClick?: () => void; 
}

export const Button: React.FC<ButtonProps> = ({ text, customClass = '', onClick }) => {
  const buttonClasses = `bg-cyan-900 text-white px-3 py-2 rounded-md cursor-pointer opacity-80 transition-transform hover:opacity-100 m-2 ${customClass}`;

  return (
    <button className={buttonClasses} onClick={onClick}>
      {text}
    </button>
  );
};
