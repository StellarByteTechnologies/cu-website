import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-brand-light rounded-card p-6 shadow-card ${className}`}>
      {children}
    </div>
  );
};

export default Card;
