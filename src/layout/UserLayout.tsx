import SidebarDashboard from "@/components/shared/Dashboard/SidebarDashboard";
import Dashboard from "@/components/UserDashboard/Dashboard";
import DashboardNavbar from "@/components/UserDashboard/DashboardNavbar";
import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <div
        className={cn(
          "mx-auto flex w-full  flex-1 flex-col overflow-hidden  md:flex-row mt-16"
        )}
      >
        <SidebarDashboard />
        <div className="flex w-full flex-1 flex-col gap-2 h-screen border border-neutral-200 bg-pink-300/10 p-2 md:p-6 dark:border-neutral-700">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
