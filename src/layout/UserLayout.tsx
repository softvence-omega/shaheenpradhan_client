import { cn } from "@/lib/utils";
import { Outlet, useLocation } from "react-router-dom";
import SidebarDashboard from "@/components/shared/Dashboard/SidebarDashboard";
import DashboardNavbar from "@/components/UserDashboard/DashboardNavbar";
import MobileNavBar from "@/pages/user/MobileNavBar";

const UserLayout = () => {

  const location = useLocation();
  const hideNavFooter = ["/user/user-profile", "/user/notification", "/user/assistant-booking"].includes(location.pathname);

  return (
    <div className="flex flex-col overflow-hidden bg-[#FAF8FD]">
      {/* Fixed Top Navbar */}
      <header className="fixed left-0 right-0 top-0 z-50">
        <DashboardNavbar />
      </header>

      {/* Main Content Area */}
      <div className="flex h-full pt-16">
        {" "}
        {/* pt-16 to account for fixed navbar height */}
        {/* Fixed Sidebar - Desktop Only */}
        <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] w-64 hidden md:block">
          <SidebarDashboard />
        </aside>
        {/* Scrollable Content */}
        <main
          className={cn(
            "flex-1 overflow-y-auto md:ml-64", // ml-64 to account for sidebar width
            "pl-4 pr-4 md:pl-8 md:pr-8 lg:pr-16 pt-8 pb-20 md:pb-8"
          )}
        >
          <Outlet />
        </main>
      </div>

      {/* Fixed Bottom Navigation - Mobile Only */}
      <footer className="fixed bottom-0 left-0 right-0 z-50 block md:hidden">
       {!hideNavFooter && <MobileNavBar />}
      </footer>
    </div>
  );
};

export default UserLayout;

// import SidebarDashboard from "@/components/shared/Dashboard/SidebarDashboard";
// import DashboardNavbar from "@/components/UserDashboard/DashboardNavbar";
// import { cn } from "@/lib/utils";
// import MobileNavBar from "@/pages/user/MobileNavBar";
// import { Outlet } from "react-router-dom";

// const UserLayout = () => {
//   return (
//     <>
//       {/* Top navbar (always visible) */}
//       <div className="">
//         {" "}
//         <DashboardNavbar />
//       </div>

//       <div className={cn("flex w-full flex-1 flex-col  md:flex-row")}>
//         {/* Sidebar only on md+ screens */}
//         <div className="hidden md:block h-full">
//           <SidebarDashboard />
//         </div>

//         {/* Main content */}
//         <div className="flex w-full flex-1 flex-col overflow-y-auto gap-2  bg-[#FAF8FD] pl-4 pr-4 md:pl-8 md:pr-8 lg:pr-16 pt-8 pb-20 md:pb-8">
//           <Outlet />
//         </div>
//       </div>

//       {/* Bottom Mobile NavBar only on small screens */}
//       <div className="block md:hidden">
//         <MobileNavBar />
//       </div>
//     </>
//   );
// };

// export default UserLayout;
