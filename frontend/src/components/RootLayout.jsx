import React from "react";
import { AppSidebar } from "../components/app-sidebar";
import { SidebarInset, SidebarProvider } from "../components/ui/sidebar";
import { SiteHeader } from "../components/site-header";
import { Outlet } from "react-router-dom";
import AppDashboard from "./Layers/AppDashboard";
import AppAnalytics from "./Layers/AppAnalytics";
import { GoalsProvider } from "../lib/context/GoalsContext";
import { WagmiProvider } from "wagmi";
import { config } from "../../wagmi";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
export default function RootLayout() {
  const queryClient = new QueryClient();
  return (
    <div>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <GoalsProvider>
            <SidebarProvider
              style={{
                "--sidebar-width": "calc(var(--spacing) * 72)",
                "--header-height": "calc(var(--spacing) * 12)",
              }}
            >
              <AppSidebar variant="inset" />
              <SidebarInset>
                <SiteHeader />
                <div className="flex flex-1 flex-col">
                  <div className="flex flex-1 flex-col gap-2">
                    {/* СЮДА РЕАКТ-РОУТЕР ПОДСТАВИТ КОНКРЕТНУЮ СТРАНИЦУ */}
                    <Outlet />
                  </div>
                </div>
              </SidebarInset>
            </SidebarProvider>
          </GoalsProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </div>
  );
}
