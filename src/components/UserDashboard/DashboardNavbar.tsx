import { Link } from "react-router-dom";
import logo from "@/assets/logo/main_logo.png";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
const DashboardNavbar = () => {
  return (
    <div className="z-50 flex flex-col sm:flex-row sm:items-center justify-between p-2 fixed top-0 left-0  w-full h-16">
      <Link to="/" className="sm:flex items-center p-2 hidden">
        <img src={logo} alt="logo" className="max-w-32 h-fit" />
      </Link>
      {/* FOR SMALL DEVICE ONLY */}
      <div className="sm:hidden flex items-center justify-between space-y-4">
        <Link to="/" className="flex items-center p-2">
          <img src={logo} alt="logo" className="max-w-32 h-fit" />
        </Link>
        <div className="flex items-center gap-3">
          <div>
            <Bell className="w-5 h-4.5 relative" />
            <p className="bg-red-600 text-center text-white rounded-full text-xs absolute w-5 h-4.5 top-2  right-14">
              5
            </p>
          </div>
          <Avatar className="w-10 h-10">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="image"
              className="object-cover"
            />
            <AvatarFallback>KAZI</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {/* SEARCH FIELD */}
      <form className="flex  p-1 border border-gray-900/20  rounded-md text-sm sm:max-w-[450px] w-full">
        <div aria-disabled="true" className="w-10 grid place-content-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="text-ButtonBGSecondary"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
        <input
          type="text"
          spellCheck="false"
          name="text"
          className="bg-transparent py-1.5 outline-none placeholder:text-zinc-400 focus:w-[90%] transition-all w-full"
          placeholder="Search..."
        />
      </form>
      {/* NOTIFICATION SECTION */}
      <div className="hidden sm:flex items-center gap-3">
        <div>
          <Bell className="w-5 h-4.5 relative" />
          <p className="bg-red-600 text-center text-white rounded-full text-xs absolute w-5 h-4.5 top-1  right-14">
            5
          </p>
        </div>
        <Avatar className="w-10 h-10">
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="image"
            className="object-cover"
          />
          <AvatarFallback>KAZI</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default DashboardNavbar;
