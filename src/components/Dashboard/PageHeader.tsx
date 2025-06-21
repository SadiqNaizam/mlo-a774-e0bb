import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const PageHeader: React.FC = () => {
  return (
    <div className="mb-6">
      <Tabs defaultValue="leads" className="w-full">
        <TabsList className="bg-transparent p-0 border-b-0 rounded-none">
          <TabsTrigger 
            value="sales" 
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-4 pb-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-none">
            Sales
          </TabsTrigger>
          <TabsTrigger 
            value="leads" 
            className="text-muted-foreground data-[state=active]:text-primary data-[state=active]:shadow-none data-[state=active]:bg-transparent px-4 pb-3 rounded-none border-b-2 border-transparent data-[state=active]:border-primary transition-none">
            Leads
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default PageHeader;
