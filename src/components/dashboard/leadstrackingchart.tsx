import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { CalendarDays, ChevronDown } from 'lucide-react';

const chartData = [
  { name: 'March', closedWon: 65, closedLost: 88 },
  { name: 'April', closedWon: 25, closedLost: 42 },
  { name: 'May', closedWon: 64, closedLost: 95 },
  { name: 'June', closedWon: 81, closedLost: 5 },
  { name: 'July', closedWon: 90, closedLost: 45 },
  { name: 'August', closedWon: 30, closedLost: 98 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card p-2 border rounded-md shadow-lg">
        <p className="label font-bold">{`${label}`}</p>
        <p className="text-teal-600">{`Closed won : ${payload[0].value}`}</p>
        <p className="text-red-500">{`Closed lost : ${payload[1].value}`}</p>
      </div>
    );
  }
  return null;
};

const LeadsTrackingChart: React.FC = () => {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
                <CardTitle>Leads tracking</CardTitle>
                <div className="flex items-end gap-6 mt-2">
                    <div>
                        <span className="text-4xl font-bold">680</span>
                        <span className="ml-2 text-muted-foreground">total closed</span>
                    </div>
                    <div>
                        <span className="text-4xl font-bold">70</span>
                        <span className="ml-2 text-muted-foreground">total lost</span>
                    </div>
                </div>
            </div>
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
        </div>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
              <defs>
                  <linearGradient id="colorWon" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0D9488" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#0D9488" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorLost" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#EF4444" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                  </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} />
              <Area type="monotone" dataKey="closedWon" stroke="#0D9488" strokeWidth={2} fillOpacity={1} fill="url(#colorWon)" />
              <Area type="monotone" dataKey="closedLost" stroke="#EF4444" strokeWidth={2} fillOpacity={1} fill="url(#colorLost)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
         <div className="flex justify-center items-center gap-6 mt-4 text-sm">
            <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-[#0D9488]"></span>
                <span className="text-muted-foreground">Closed won</span>
            </div>
             <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-sm bg-[#EF4444]"></span>
                <span className="text-muted-foreground">Closed lost</span>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadsTrackingChart;
