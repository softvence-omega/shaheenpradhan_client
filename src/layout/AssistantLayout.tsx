import AssistantSidebarDashboard from "@/components/shared/Dashboard/AssistantSidebarDashboard";
import AssistantDashboardNavbar from "@/components/UserDashboard/AssistantDashboardNavbar";
import DashboardNavbar from "@/components/UserDashboard/DashboardNavbar";
import { cn } from "@/lib/utils";
import MobileNavBar from "@/pages/user/MobileNavBar";
import { Outlet } from "react-router-dom";

const AssistantLayout = () => {
  return (
    <>
      <AssistantDashboardNavbar />
      <div
        className={cn(
          "flex w-full flex-1 flex-col overflow-hidden  md:flex-row"
        )}
      >
        <div className="hidden md:block">
          <AssistantSidebarDashboard />
        </div>

        <div className="flex w-full flex-1 flex-col overflow-y-auto gap-2 border border-neutral-200 bg-[#FAF8FD] pl-4 pr-4 md:pl-8 md:pr-8 lg:pr-16 pt-8 pb-20 md:pb-8">
          <Outlet />
        </div>
      </div>

      {/* Bottom Mobile NavBar only on small screens */}
      <div className="block md:hidden">
        <MobileNavBar />
      </div>
    </>
  );
};

export default AssistantLayout;
