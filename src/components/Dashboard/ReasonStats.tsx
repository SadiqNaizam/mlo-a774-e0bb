import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface Reason {
  percentage: number;
  text: string;
}

interface OtherStat {
    value: string;
    label: string;
    tooltip?: string;
}

const reasonsData: Reason[] = [
  { percentage: 40, text: 'The proposal is unclear' },
  { percentage: 20, text: 'However venture pursuit' },
  { percentage: 10, text: 'Other' },
  { percentage: 30, text: 'The proposal is unclear' },
];

const otherData: OtherStat[] = [
    { value: '900', label: 'total leads count' },
    { value: '12', label: 'days in average to convert lead' },
    { value: '30', label: 'inactive leads', tooltip: 'Leads with no activity in the last 30 days.' },
]

const ReasonStats: React.FC = () => {
  return (
    <Card className="col-span-2">
      <CardContent className="grid md:grid-cols-2 gap-8 p-6">
        <div>
          <h3 className="text-lg font-semibold mb-6">Reasons of leads lost</h3>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {reasonsData.map((reason, index) => (
              <div key={index}>
                <p className="text-4xl font-bold">{reason.percentage}%</p>
                <p className="text-muted-foreground text-sm">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
            <Separator orientation='vertical' className="h-2/3 hidden md:block"/>
            <div className="md:pl-8 flex-1">
                <h3 className="text-lg font-semibold mb-6">Other data</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-6">
                    {otherData.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-bold">{stat.value}</p>
                            <div className='flex items-center gap-1.5'>
                                <p className="text-muted-foreground text-sm">{stat.label}</p>
                                {stat.tooltip && (
                                    <TooltipProvider>
                                        <Tooltip>
                                            <TooltipTrigger>
                                                <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{stat.tooltip}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReasonStats;
