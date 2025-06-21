import React from 'react';
import { cn } from '@/lib/utils';
import { 
  LayoutGrid, 
  Users, 
  User, 
  FileText, 
  FileStack, 
  ShoppingBasket, 
  Mail, 
  Archive, 
  Calendar, 
  HelpCircle, 
  Settings,
  LucideIcon
} from 'lucide-react';

interface NavItem {
  name: string;
  icon: LucideIcon;
  href: string;
  active?: boolean;
  isSeparator?: boolean;
}

const navItems: NavItem[] = [
  { name: 'Dashboard', icon: LayoutGrid, href: '#', active: true },
  { name: 'Leads', icon: Users, href: '#' },
  { name: 'Customers', icon: User, href: '#' },
  { name: 'Proposals', icon: FileText, href: '#', isSeparator: true },
  { name: 'Invoices', icon: FileStack, href: '#' },
  { name: 'Items', icon: ShoppingBasket, href: '#' },
  { name: 'Mail', icon: Mail, href: '#', isSeparator: true },
  { name: 'Shoebox', icon: Archive, href: '#' },
  { name: 'Calendar', icon: Calendar, href: '#' },
];

const helpNavItems: NavItem[] = [
    { name: 'Help', icon: HelpCircle, href: '#' },
    { name: 'Settings', icon: Settings, href: '#' },
]

const SidebarNav: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 px-4 py-4 border-b">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="font-bold text-primary-foreground text-lg">b</span>
            </div>
            <div className="w-8 h-8 rounded-md bg-foreground flex items-center justify-center">
                 <span className="font-bold text-background text-lg">o</span>
            </div>
        </div>
        <nav className="flex-1 px-2 py-4 space-y-2">
          {navItems.map((item) => (
            <React.Fragment key={item.name}>
                <a
                href={item.href}
                className={cn(
                    'flex items-center px-3 py-2 text-sm font-medium rounded-md',
                    'transition-colors duration-150',
                    item.active
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                )}
                >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.name}</span>
                </a>
                {item.isSeparator && <div className="py-2"/>}
            </React.Fragment>
          ))}
        </nav>
        <div className="px-2 py-4 border-t">
            <div className="space-y-2">
                {helpNavItems.map((item) => (
                     <a
                     key={item.name}
                     href={item.href}
                     className={cn(
                         'flex items-center px-3 py-2 text-sm font-medium rounded-md text-muted-foreground',
                         'transition-colors duration-150 hover:bg-muted/50 hover:text-foreground'
                     )}
                     >
                     <item.icon className="w-5 h-5 mr-3" />
                     <span>{item.name}</span>
                     </a>
                ))}
            </div>
        </div>
    </div>
  );
};

export default SidebarNav;
