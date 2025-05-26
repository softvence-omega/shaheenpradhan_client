import { SidebarDemo } from "@/components/aceternity/DashSideBars";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import DashboardNavbar from "@/components/UserDashboard/DashboardNavbar";
// import DashSidebar from "@/components/UserDashboard/DashSidebar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <DashboardNavbar />
      <SidebarDemo />
      {/* <div>
        <SidebarProvider>
          <DashSidebar />
          <main>
            <SidebarTrigger />
            <Outlet />
          </main>
        </SidebarProvider>
      </div> */}
    </>
  );
};

export default UserLayout;
