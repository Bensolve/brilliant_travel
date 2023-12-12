import React from 'react';

type ButtonProps = {
  type?: 'button' | 'submit';
  title?: string;
  icon?: React.ReactNode;
  variant?: string;
  full?: boolean;
  width?: string; // Add width prop
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ type = 'button', title, icon, variant, full, width, onClick }) => {
  return (
    <button
      className={`flexCenter rounded-full border ${variant || ''} ${full ? 'w-full' : ''} p-3`}
      type={type}
      style={{ width }}
      onClick={onClick}
    >
      {icon}
      <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
    </button>
  );
};

export default Button;
