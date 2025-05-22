import Footer from "@/components/home/Shared/Footer";
import NavBar from "@/components/home/Shared/NavBar";
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
