import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import logo from "@/assets/logo/main_logo.png";
import { Button } from "@/components/ui/button";
import TopArrow from "@/assets/icon/topArrow";
import { useState } from "react";
import { cn } from "@/lib/utils";
const NavBar = () => {
  const [showMenuBar, setShowMenuBar] = useState<boolean>(false);
  return (
    <>
      {/* MODAL */}
      {showMenuBar && (
        <div className="fixed font-DMsans top-0 left-0 w-full h-screen bg-ButtonBorder/90 z-50 flex flex-col justify-center items-center gap-6 p-6 lg:hidden">
          <div className="lg:hidden lg:space-x-3 flex flex-col space-y-3 lg:space-y-0">
            <Link
              className="text-sm sm:text-[15px] font-normal leading-[150%] text-white"
              to="/about"
            >
              About Us
            </Link>
            <Link
              className="text-sm sm:text-[15px] font-normal leading-[150%] text-white"
              to="/contact"
            >
              Contact Us
            </Link>
            <Link
              className="text-sm sm:text-[15px] font-normal leading-[150%] text-white"
              to="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-sm sm:text-[15px] font-normal leading-[150%] text-white"
              to="services"
            >
              Services
            </Link>
          </div>
          <div className="items-center flex-shrink-0 lg:hidden flex">
            <Link to="#" className="flex items-center cursor-pointer">
              <Button variant="outline" className="cursor-pointer rounded-md">
                Get Started
              </Button>
              <Button className="bg-ButtonBGSecondary cursor-pointer rounded-sm">
                <TopArrow />
              </Button>
            </Link>
          </div>
        </div>
      )}
      <Wrapper>
        <header className="p-4 font-DMsans dark:bg-gray-100 dark:text-gray-800">
          <div className="flex items-center justify-between h-8 mx-auto">
            <Link to="/" className="flex items-center p-2">
              <img src={logo} alt="logo" className="max-w-32 h-fit" />
            </Link>
            <div className="items-stretch hidden space-x-3 lg:flex">
              <Link
                className="text-sm sm:text-[15px] font-normal leading-[150%]"
                to="/about"
              >
                About Us
              </Link>
              <Link
                className="text-sm sm:text-[15px] font-normal leading-[150%]"
                to="/contact"
              >
                Contact Us
              </Link>
              <Link
                className="text-sm sm:text-[15px] font-normal leading-[150%]"
                to="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="text-sm sm:text-[15px] font-normal leading-[150%]"
                to="services"
              >
                Services
              </Link>
            </div>
            <div className="items-center flex-shrink-0 hidden lg:flex">
              <Link to="#" className="flex items-center cursor-pointer">
                <Button variant="outline" className="cursor-pointer rounded-md">
                  Get Started
                </Button>
                <Button className="bg-ButtonBGSecondary cursor-pointer rounded-sm">
                  <TopArrow />
                </Button>{" "}
              </Link>
            </div>

            <button
              onClick={() => setShowMenuBar(!showMenuBar)}
              className="p-4 lg:hidden z-50 "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={cn(
                  "w-9 h-9 text-black",
                  showMenuBar && "text-white"
                )}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      </Wrapper>
    </>
  );
};

export default NavBar;
