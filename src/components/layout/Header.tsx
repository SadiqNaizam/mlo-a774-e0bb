import React from 'react';
import { cn } from '@/lib/utils';
import TopHeader from '../Dashboard/TopHeader';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    // Wrapper for TopHeader to control layout within the main grid column.
    // TopHeader itself contains the <header> tag and its own styling (bg, border).
    <div 
      className={cn(
        "h-16 sticky top-0 z-10 flex-shrink-0", 
        className
      )}
    >
      <TopHeader />
    </div>
  );
};

export default Header;
