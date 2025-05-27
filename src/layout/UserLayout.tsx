import SidebarDashboard from "@/components/shared/Dashboard/SidebarDashboard";
import DashboardNavbar from "@/components/UserDashboard/DashboardNavbar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <div
        className={cn(
          "flex w-full flex-1 flex-col overflow-hidden  md:flex-row"
        )}
      >
        <SidebarDashboard />
        <div className="flex w-full flex-1 flex-col overflow-y-auto gap-2 h-screen border border-neutral-200 bg-pink-300/10 pl-8 pr-16 pt-8">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
