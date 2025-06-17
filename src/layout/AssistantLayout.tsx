import { cn } from "@/lib/utils";
import { Outlet } from "react-router-dom";
import AssistantSidebarDashboard from "@/components/shared/Dashboard/AssistantSidebarDashboard";
import AssistantDashboardNavbar from "@/components/UserDashboard/AssistantDashboardNavbar";
import MobileNavBar from "@/pages/user/MobileNavBar";

const AssistantLayout = () => {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-[#FAF8FD]">
      {/* Fixed Top Navbar */}
      <div className="fixed left-0 right-0 top-0 z-50">
        <AssistantDashboardNavbar />
      </div>

      {/* Main Content Area */}
      <div className="flex h-full pt-16">
        {" "}
        {/* pt-16 to account for fixed navbar height */}
        {/* Fixed Sidebar - Desktop Only */}
        <aside className="fixed left-0 top-16 z-40 h-[calc(100vh-4rem)] hidden md:block">
          <AssistantSidebarDashboard />
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
        <MobileNavBar />
      </footer>
    </div>
  );
};

export default AssistantLayout;

// import AssistantSidebarDashboard from "@/components/shared/Dashboard/AssistantSidebarDashboard";
// import AssistantDashboardNavbar from "@/components/UserDashboard/AssistantDashboardNavbar";
// import { cn } from "@/lib/utils";
// import MobileNavBar from "@/pages/user/MobileNavBar";
// import { Outlet } from "react-router-dom";

// const AssistantLayout = () => {
//   return (
//     <>
//       <AssistantDashboardNavbar />
//       <div
//         className={cn(
//           "flex w-full flex-1 flex-col overflow-hidden  md:flex-row"
//         )}
//       >
//         <div className="hidden md:block">
//           <AssistantSidebarDashboard />
//         </div>

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

// export default AssistantLayout;
