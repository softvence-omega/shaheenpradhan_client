import Footer from "@/components/Home/Shared/SubFooter";
import NavBar from "@/components/Home/Shared/NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
