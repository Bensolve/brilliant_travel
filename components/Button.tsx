import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  type?: 'button' | 'submit';
  title?: string;
  icon?: React.ReactNode;
  variant?: string;
  full?: boolean;
  width?: string; // Add width prop
  onClick?: () => void;
  link?: string; // Add link prop
};

const Button: React.FC<ButtonProps> = ({ type = 'button', title, icon, variant, full, width, onClick, link }) => {
  // Use Link if the link prop is provided
  if (link) {
    return (
      <Link href={link}>
        <button
          className={`flexCenter rounded-full border ${variant || ''} ${full ? 'w-full' : ''} p-3`}
          type={type}
          style={{ width }}
          onClick={onClick}
        >
          {icon}
          <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
        </button>
      </Link>
    );
  }

  // Use a button tag if no link is provided
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
