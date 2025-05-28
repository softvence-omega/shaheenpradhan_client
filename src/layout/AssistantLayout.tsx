import AssistantSidebarDashboard from "@/components/shared/Dashboard/AssistantSidebarDashboard";
import SidebarDashboard from "@/components/shared/Dashboard/SidebarDashboard";
import DashboardNavbar from "@/components/UserDashboard/DashboardNavbar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

const AssistantLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <div
        className={cn(
          "flex w-full flex-1 flex-col overflow-hidden  md:flex-row"
        )}
      >
        <AssistantSidebarDashboard />
        <div className="flex w-full flex-1 flex-col overflow-y-auto gap-2 h-screen border border-neutral-200 bg-[#FAF8FD] pl-8 pr-16 pt-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AssistantLayout;
