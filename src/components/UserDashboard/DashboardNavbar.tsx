import { Link } from "react-router-dom";
import logo from "@/assets/logo/main_logo.png";
import { Bell } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, Settings, User } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import NotificationModal from "./NotificationModal";
const DashboardNavbar = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-2">
      <Link to="/" className="sm:flex items-center p-2 hidden">
        <img src={logo} alt="logo" className="max-w-32 h-fit" />
      </Link>
      {/* FOR SMALL DEVICE ONLY */}
      <div className="sm:hidden flex items-center justify-between space-y-4">
        <Link to="/" className="flex items-center p-2">
          <img src={logo} alt="logo" className="max-w-32 h-fit" />
        </Link>
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-gray-100"
          >
            <Bell className="h-6 w-6 text-gray-700" />

            <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 text-white text-xs font-medium flex items-center justify-center">
              99
            </span>
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="w-10 h-10">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="image"
                  className="object-cover"
                />
                <AvatarFallback>KAZI</AvatarFallback>
              </Avatar>
            </PopoverTrigger>
            <PopoverContent className="w-56 p-0" align="start">
              <div className="p-4">
                <div className="font-semibold text-lg mb-4">John Doe</div>
                <div className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-auto p-3 font-normal"
                  >
                    <User className="w-5 h-5 mr-3" />
                    My profile
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-auto p-3 font-normal"
                  >
                    <Settings className="w-5 h-5 mr-3 " />
                    Settings
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start h-auto p-3 font-normal"
                  >
                    <LogOut className="w-5 h-5 mr-3" />
                    Log Out
                  </Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {/* SEARCH FIELD */}
      <form className="flex  p-1 border border-gray-900/20  rounded-md text-sm sm:max-w-[450px] w-full">
        <div
          aria-disabled="true"
          className="w-10 grid place-content-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
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
        <NotificationModal />

        <Popover>
          <PopoverTrigger asChild>
            <Avatar className="w-10 h-10">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="image"
                className="object-cover"
              />
              <AvatarFallback>KAZI</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-0" align="start">
            <div className="p-4">
              <div className="font-semibold text-lg mb-4">John Doe</div>
              <div className="space-y-1">
                <Link
                  to="/user/user-profile"
                  className="w-full flex text-sm font-light justify-start h-auto p-3"
                >
                  <User className="w-5 h-5 mr-3" />
                  <span> My profile</span>
                </Link>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-auto p-3 font-normal"
                >
                  <Settings className="w-5 h-5 mr-3" />
                  Settings
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start h-auto p-3 font-normal"
                >
                  <LogOut className="w-5 h-5 mr-3" />
                  Log Out
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default DashboardNavbar;
