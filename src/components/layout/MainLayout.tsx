import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Topbar } from './Topbar';

interface MainLayoutProps {
  children: React.ReactNode;
  activeItem: string;
  setActiveItem: (item: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activeItem,
  setActiveItem,
  searchQuery,
  setSearchQuery,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F0F9FF] flex flex-col font-sans">
      {/* Sidebar */}
      <Sidebar
        isCollapsed={isCollapsed}
        setIsCollapsed={setIsCollapsed}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content Area */}
      <div
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          isCollapsed ? 'lg:pl-[74px]' : 'lg:pl-[264px]'
        }`}
      >
        <Topbar
          onMenuToggle={() => setMobileOpen(!mobileOpen)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-[1600px] w-full mx-auto">
          {children}
        </main>

        {/* Professional Footer */}
        <footer className="py-4 px-6 border-t border-[#E2E8F0] bg-white text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#0E7D7A]">ADCP 360°</span>
            <span>•</span>
            <span>Animal Disease Control Project, Malappuram</span>
            <span className="hidden md:inline">• Department of Animal Husbandry, Kerala</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Hosting: adcpmalappuram.in</span>
            <span>•</span>
            <span>v1.0 (Standard Build)</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

