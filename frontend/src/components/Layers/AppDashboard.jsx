import React from "react";
import { AppSidebar } from "../app-sidebar";
import { SidebarInset, SidebarProvider } from "../ui/sidebar";
import { SiteHeader } from "../site-header";
import { SectionCards } from "../section-cards";
import { ChartAreaInteractive } from "../chart-area-interactive";
import { DataTable } from "../data-table";
import data from "../../app/dashboard/data.json";

export default function AppDashboard() {
  return (
    <div>
      <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
        <SectionCards />
        <div className="px-4 lg:px-6">
          <ChartAreaInteractive />
        </div>
      </div>
    </div>
  );
}
