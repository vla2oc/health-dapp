import { Button } from "@/components/ui/button";
import { AlertCircleIcon, BadgeCheckIcon, CheckIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { useLocation } from "react-router-dom";
import { useConnection, useConnect, useDisconnect } from "wagmi";

export function SiteHeader() {
  const { address, isConnected } = useConnection();
  const { disconnect } = useDisconnect();
  const { connect, connectors } = useConnect();

  const location = useLocation();
  const pathSegments = location.pathname.split("/");
  const lastSegment = pathSegments.filter(Boolean).pop() || "Home";
  let pageTitle = "Home";
  if (lastSegment) {
    pageTitle = lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  }
  const handleConnect = () => {
    const defaultConnector = connectors[0];
    if (defaultConnector) {
      connect({ connector: defaultConnector });
    } else {
      console.error("No connectors available");
    }
  };
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">{pageTitle}</h1>
        <div className="ml-auto flex items-center gap-2">
          {isConnected ? (
            <>
              <div className="flex w-full flex-wrap gap-2">
                <Badge
                  variant="secondary"
                  className="bg-green-500 text-white dark:bg-green-600"
                >
                  <BadgeCheckIcon />
                  Connected
                </Badge>
              </div>
              <button
                className="border-1 p-1 text-sm rounded-sm hover:bg-red-200"
                onClick={() => disconnect()}
              >
                Disconnect
              </button>
            </>
          ) : (
            <button
              className="border-2 p-1.5 rounded-lg hover:bg-gray-200"
              onClick={handleConnect}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
