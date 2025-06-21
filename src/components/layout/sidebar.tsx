import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ className, isCollapsed }) => {
  return (
    <aside 
      className={cn(
        "h-screen sticky top-0 flex-shrink-0 border-r bg-background transition-all duration-300 ease-in-out",
        isCollapsed ? "w-20" : "w-64", 
        className
      )}
    >
      <SidebarNav isCollapsed={isCollapsed} />
    </aside>
  );
};

export default Sidebar;