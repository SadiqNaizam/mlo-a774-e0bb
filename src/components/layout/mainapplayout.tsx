import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Sidebar from './Sidebar';
import Header from './Header';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={cn("grid grid-cols-[auto_1fr] bg-background text-foreground", className)}>
      <Sidebar isCollapsed={isCollapsed} />
      {/* Main content area with a sticky header and scrollable content */}
      <div className="flex flex-col h-screen">
        <Header onToggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;