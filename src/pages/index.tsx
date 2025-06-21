import React from 'react';
import FunnelCountCard from '@/components/Dashboard/FunnelCountCard';
import LeadsTrackingChart from '@/components/Dashboard/LeadsTrackingChart';
import PageHeader from '@/components/Dashboard/PageHeader';
import ReasonStats from '@/components/Dashboard/ReasonStats';
import SourcesPieChart from '@/components/Dashboard/SourcesPieChart';
import MainAppLayout from '@/components/layout/MainAppLayout';

/**
 * Dashboard Overview Page
 * 
 * This page serves as the main entry point for the "Dashboard Clone" application.
 * It assembles all the core data visualization components into a cohesive layout.
 * It utilizes the MainAppLayout for the overall page structure (Sidebar and Header)
 * and arranges the dashboard cards in a responsive grid within the main content area.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* Page-specific header with navigation tabs like 'Sales' and 'Leads' */}
      <PageHeader />

      {/* 
        Main content grid for dashboard cards and charts.
        - It uses a 2-column layout on large screens (lg) and stacks to a single column on smaller screens.
        - Components are laid out according to the design, with some spanning the full width.
      */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FunnelCountCard />
        <SourcesPieChart />
        
        {/* These components have `col-span-2` defined internally to take up the full width of the grid */}
        <LeadsTrackingChart />
        <ReasonStats />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
