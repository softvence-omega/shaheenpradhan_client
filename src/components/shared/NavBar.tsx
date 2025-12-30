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
        <div className="fixed font-DMsans top-0 left-0 w-full h-screen bg-ButtonBorder/90 z-50 flex flex-col justify-center items-center gap-6 lg:hidden">
          <div className="flex flex-col space-y-6 items-center">
            {[
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Contact Us" },
              { to: "/ai-matcher", label: "Pricing" },
              { to: "/assistant-books", label: "Adminity Career" },
            ].map((link) => (
              <Link
                key={link.to}
                className={cn(
                  "text-lg font-medium transition-all duration-300 w-full text-center py-2 rounded-md",
                  location.pathname === link.to
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                )}
                to={link.to}
                onClick={() => setShowMenuBar(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex gap-2">
            <Link to="/signup" className="flex items-center" onClick={() => setShowMenuBar(false)}>
              <Button variant="outline" className="rounded-md">
                Get Started
              </Button>
            </Link>
            <Link to="/signup" onClick={() => setShowMenuBar(false)}>
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
          "fixed top-0 left-0 w-full bg-white border-b border-gray-900/10 font-DMsans z-50 py-2 transition-all duration-300",
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
            <nav className="hidden lg:flex items-center space-x-6">
              {[
                { to: "/about", label: "About Us" },
                { to: "/contact", label: "Contact Us" },
                { to: "/ai-matcher", label: "Pricing" },
                { to: "/assistant-books", label: "Adminity Career" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "text-sm font-medium transition-all duration-300 relative px-4 py-2 rounded-md group",
                    location.pathname === link.to
                      ? "text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  )}
                >
                  {link.label}
                  {/* Bottom Border Transition */}
                  <span
                    className={cn(
                      "absolute bottom-1 left-4 right-4 h-0.5 bg-ButtonBGSecondary transition-all duration-300",
                      location.pathname === link.to
                        ? "w-[calc(100%-32px)]"
                        : "w-0 group-hover:w-[calc(100%-32px)]"
                    )}
                  />
                </Link>
              ))}
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
              className="p-2 lg:hidden relative z-[60]"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={cn(
                  "w-8 h-8 transition-colors duration-300",
                  showMenuBar ? "text-white" : "text-black"
                )}
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
