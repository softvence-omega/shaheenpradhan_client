import SidebarDashboard from "@/components/shared/Dashboard/SidebarDashboard";
import DashboardNavbar from "@/components/UserDashboard/DashboardNavbar";
import { cn } from "@/lib/utils";
import MobileNavBar from "@/pages/user/MobileNavBar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      {/* Top navbar (always visible) */}
      <div className="">
        {" "}
        <DashboardNavbar />
      </div>

      <div className={cn("flex w-full flex-1 flex-col  md:flex-row")}>
        {/* Sidebar only on md+ screens */}
        <div className="hidden md:block h-full">
          <SidebarDashboard />
        </div>

        {/* Main content */}
        <div className="flex w-full flex-1 flex-col overflow-y-auto gap-2  bg-[#FAF8FD] pl-4 pr-4 md:pl-8 md:pr-8 lg:pr-16 pt-8 pb-20 md:pb-8">
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

export default UserLayout;
