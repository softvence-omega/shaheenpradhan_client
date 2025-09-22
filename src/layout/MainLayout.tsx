import Footer from "@/components/shared/Footer";
import NavBar from "@/components/shared/NavBar";
import { Outlet, useLocation } from "react-router-dom";

const MainLayout = () => {

  const location = useLocation();
  const hideNavFooter = ["/signup", "/login", "/bookAssistantInfo", "/join-assistant-info"].includes(location.pathname);

  return (
    <div className="">
      {!hideNavFooter && <NavBar />}
      <Outlet />
      {!hideNavFooter && <Footer />}
    </div>
  );
};

export default MainLayout;
