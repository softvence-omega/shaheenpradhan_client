import { Link, useLocation } from "react-router-dom";
import Wrapper from "./Wrapper";
import logo from "@/assets/logo/main_logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import TopArrow from "@/assets/icon/topArrow1";

const NavBar = () => {
  const location = useLocation();
  const locked =
    location.pathname === "/signups" ||
    location.pathname === "/logins" ||
    location.pathname === "/company-yourself" ||
    location.pathname === "/personal-info" ||
    location.pathname === "/work-preferance" ||
    location.pathname === "/experience-skill" ||
    location.pathname === "/education";

  const [showMenuBar, setShowMenuBar] = useState(false);

  // 🔒 Lock scroll when menu is open
  useEffect(() => {
    if (showMenuBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showMenuBar]);

  return (
    <div>
      {/* Mobile Menu */}
      {showMenuBar && (
        <div className="fixed font-DMsans top-0 left-0 w-full h-screen bg-ButtonBorder/90 z-50 flex flex-col justify-center items-center gap-6  lg:hidden">
          <div className="flex flex-col space-y-6">
            <Link className="text-lg font-medium text-white" to="/about">
              About Us
            </Link>
            <Link className="text-lg font-medium text-white" to="/contact">
              Contact Us
            </Link>
            <Link className="text-lg font-medium text-white" to="/ai-matcher">
              Pricing
            </Link>
            <Link className="text-lg font-medium text-white" to="/assistant-books">
              Services
            </Link>
          </div>
          <div className="mt-8 flex gap-2">
            <Link to="/signups" className="flex items-center">
              <Button variant="outline" className="rounded-md">
                Get Started
              </Button>
            </Link>
            <Link to="/signups">
              <Button className="bg-ButtonBGSecondary rounded-sm">
                <TopArrow />
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 left-0 w-full bg-white border-b border-gray-900/10 font-DMsans z-50 py-2",
          locked && "hidden"
        )}
      >
        <Wrapper>
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="h-10 w-auto" />
            </Link>

            {/* Links (Desktop) */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                About Us
              </Link>
              <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Contact Us
              </Link>
              <Link to="/ai-matcher" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Pricing
              </Link>
              <Link to="/assistant-books" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Services
              </Link>
            </nav>

            {/* Right Side (Desktop Buttons) */}
            <div className="hidden md:flex items-center gap-2">
              <Link to="/signup">
                <Button variant="outline" className="rounded-md cursor-pointer">
                  Get Started
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-ButtonBGSecondary rounded-sm cursor-pointer">
                  <TopArrow />
                </Button>
              </Link>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <button
              onClick={() => setShowMenuBar(!showMenuBar)}
              className="p-2 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={cn("w-8 h-8", showMenuBar ? "text-white" : "text-black")}
              >
                {showMenuBar ? (
                  // X icon
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  // Hamburger
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </Wrapper>
      </header>

      {/* Spacer so content isn’t hidden under navbar */}
      <div className={cn("h-16", locked && "hidden")} />
    </div>
  );
};

export default NavBar;
