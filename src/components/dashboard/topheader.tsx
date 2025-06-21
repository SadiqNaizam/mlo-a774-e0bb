import React from 'react';
import { Button } from '@/components/ui/button';
import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { ChevronDown, PanelLeftOpen, PanelLeftClose } from 'lucide-react';

interface TopHeaderProps {
    onToggleSidebar: () => void;
    isCollapsed: boolean;
}

const TopHeader: React.FC<TopHeaderProps> = ({ onToggleSidebar, isCollapsed }) => {
  return (
    <header className="flex items-center justify-between w-full h-full px-6 py-4 bg-background border-b">
        <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onToggleSidebar}>
                {isCollapsed ? <PanelLeftOpen className="w-5 h-5" /> : <PanelLeftClose className="w-5 h-5" />}
            </Button>
            <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button>
            Create
            <ChevronDown className="w-4 h-4 ml-2" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>New Lead</DropdownMenuItem>
          <DropdownMenuItem>New Customer</DropdownMenuItem>
          <DropdownMenuItem>New Invoice</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default TopHeader;