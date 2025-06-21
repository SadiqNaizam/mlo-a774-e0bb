import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FunnelStage {
  name: 'Discovery' | 'Qualified' | 'In conversation' | 'Negotiations' | 'Closed won';
  count: number;
  value: number;
  duration: string;
  color: string;
}

const funnelData: FunnelStage[] = [
  { name: 'Discovery', count: 200, value: 200, duration: '2 days', color: 'bg-red-400' },
  { name: 'Qualified', count: 100, value: 100, duration: '2 days', color: 'bg-yellow-400' },
  { name: 'In conversation', count: 50, value: 100, duration: 'average time on this stage', color: 'bg-slate-700' },
  { name: 'Negotiations', count: 20, value: 50, duration: '8 days', color: 'bg-green-400' },
  { name: 'Closed won', count: 20, value: 50, duration: '10 days', color: 'bg-purple-500' },
];

const totalCount = funnelData.reduce((sum, item) => sum + item.count, 0);

const FunnelCountCard: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Funnel count</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end gap-2 mb-4">
          <p className="text-5xl font-bold">600</p>
          <p className="text-muted-foreground pb-1">active leads</p>
        </div>

        <div className="w-full flex h-2 rounded-full overflow-hidden mb-6">
          {funnelData.map((stage) => (
            <div
              key={stage.name}
              className={stage.color}
              style={{ width: `${(stage.count / totalCount) * 100}%` }}
            />
          ))}
        </div>
        
        <div className="space-y-4 text-sm">
            {funnelData.map((stage) => (
                <div key={stage.name} className="grid grid-cols-[auto_1fr_auto_auto] sm:grid-cols-[auto_1fr_auto_auto_auto] gap-x-4 items-center text-muted-foreground">
                    <div className="flex items-center gap-3">
                        <span className={`w-2.5 h-2.5 rounded-full ${stage.color}`}></span>
                        <span className="text-foreground font-medium">{stage.name}</span>
                    </div>
                    <div className="hidden sm:block"></div> {/* Spacer */}
                    <span className="justify-self-end">{stage.count}</span>
                    <span className="justify-self-end">$ {stage.value}</span>
                    {
                       stage.name === 'In conversation' ? (
                         <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <span className="justify-self-end cursor-pointer">2 days</span>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{stage.duration}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                       ) : (
                         <span className="justify-self-end">{stage.duration}</span>
                       )
                    }
                </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FunnelCountCard;
