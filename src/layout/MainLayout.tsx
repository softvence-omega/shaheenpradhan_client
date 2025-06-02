import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
