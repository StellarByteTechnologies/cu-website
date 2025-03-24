import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  type = 'button',
  disabled = false,
  ariaLabel,
}) => {
  const baseClasses = 'px-6 py-3 font-bold rounded-button transition-colors';

  const variantClasses = {
    primary: 'bg-gradient-to-r from-brand-dark to-gray-700 text-white',
    secondary: 'bg-brand-secondary text-white',
    outline: 'border border-brand-dark text-brand-dark hover:bg-brand-light',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
