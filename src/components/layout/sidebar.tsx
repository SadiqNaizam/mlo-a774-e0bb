import React from 'react';
import { cn } from '@/lib/utils';
import SidebarNav from '../Dashboard/SidebarNav';

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  return (
    <aside 
      className={cn(
        "w-64 h-screen sticky top-0 flex-shrink-0 border-r bg-background", 
        className
      )}
    >
      <SidebarNav />
    </aside>
  );
};

export default Sidebar;
