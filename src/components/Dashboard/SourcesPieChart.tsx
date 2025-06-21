import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown } from 'lucide-react';
import { Tooltip as ShadTooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface SourceData {
  name: string;
  value: number;
  percentage: number;
  color: string;
}

const data: SourceData[] = [
  { name: 'Clutch', value: 3000, percentage: 50, color: '#F87171' }, // red-400
  { name: 'Behance', value: 1000, percentage: 40, color: '#FBBF24' }, // amber-400
  { name: 'Instagram', value: 1000, percentage: 10, color: '#0F766E' }, // teal-700
  { name: 'Dribbble', value: 1000, percentage: 10, color: '#6EE7B7' }, // emerald-300
];

const chartData = data.map(item => ({name: item.name, value: item.percentage}));

const SourcesPieChart: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState<'came' | 'converted' | 'size'>('converted');
  
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>Sources</CardTitle>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                    <CalendarDays className="w-4 h-4 mr-2"/>
                    Last 6 months
                    <ChevronDown className="w-4 h-4 ml-2"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem>Last 30 days</DropdownMenuItem>
                <DropdownMenuItem>Last 3 months</DropdownMenuItem>
                <DropdownMenuItem>Last 12 months</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="w-full h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value: number) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-3">
            {data.map((source) => (
                <div key={source.name} className="grid grid-cols-[auto_1fr_auto_auto] gap-x-3 items-center text-sm">
                    <div style={{ backgroundColor: source.color }} className="w-2.5 h-2.5 rounded-full"></div>
                    <div className="text-muted-foreground">{source.name}</div>
                    <div className="font-medium text-foreground">$ {source.value.toLocaleString()}</div>
                     <div className="text-muted-foreground justify-self-end">{source.percentage}%</div>
                </div>
            ))}
             <TooltipProvider>
                <ShadTooltip>
                    <TooltipTrigger asChild>
                         <div className="text-xs bg-foreground text-background rounded-md px-2 py-1 w-fit ml-auto mt-2 cursor-pointer">
                            from leads total
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Total value from all converted leads.</p>
                    </TooltipContent>
                </ShadTooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className="flex justify-center space-x-2 mt-6">
            <Button variant={activeTab === 'came' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('came')}>Leads came</Button>
            <Button variant={activeTab === 'converted' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('converted')}>Leads Converted</Button>
            <Button variant={activeTab === 'size' ? 'secondary' : 'ghost'} size="sm" onClick={() => setActiveTab('size')}>Total deals size</Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SourcesPieChart;