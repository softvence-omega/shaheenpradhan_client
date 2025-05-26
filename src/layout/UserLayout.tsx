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
        <div className="flex w-full flex-1 flex-col overflow-y-auto gap-2 h-screen border border-neutral-200 bg-pink-300/10 p-2">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
/* 
import SidebarDashboard from "@/components/shared/Dashboard/SidebarDashboard";
import DashboardNavbar from "@/components/UserDashboard/DashboardNavbar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
    
      <DashboardNavbar />

  
      <div className="flex flex-1 overflow-hidden">
 
        <aside className="hidden md:block w-64 bg-base-100 border-r border-base-300">
          <SidebarDashboard />
        </aside>

      
        <main className="flex-1 overflow-y-auto bg-base-200 p-4 rounded-box mb-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
 */
