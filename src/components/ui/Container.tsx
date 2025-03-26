// components/ui/Container.tsx
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className="w-full flex justify-center">
      <div className={`w-[92%] max-w-[1327px] ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
