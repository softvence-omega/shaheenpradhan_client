import assistphoto from "@/assets/images/taskphoto.png";
import chat from "@/assets/icons/chat.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CurrentlyWorking = () => {
  return (
    <div className="w-full">
      <div className="max-w-full mx-auto bg-white border border-BorderHighlight rounded-[24px] shadow-sm p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 font-DMsans">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* Top Row (Image & Name) */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src={assistphoto}
                alt="Mary Cruz"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#3A1C71]">
                  Mary Cruz
                </h2>
                <p className="text-sm md:text-base text-[#4D4D4D]">
                  Event Specialist
                </p>
              </div>
            </div>

            {/* Chat button (only visible on mobile) */}
            <button className="md:hidden flex items-center gap-2 px-3 py-2  hover:bg-gray-100 transition cursor-pointer">
              <img src={chat} alt="Chat Icon" className="w-5 h-5" />
              <span className="font-medium text-sm">Chat</span>
            </button>
          </div>

          {/* Only show on md and up */}
          <div className="hidden md:flex items-center gap-4 mt-2">
            <Link to="/user/current-booking">
              <Button className="cursor-pointer" variant="outline">
                View Full Details
              </Button>
            </Link>
            <button className="flex items-center gap-2 px-4 py-2  hover:bg-gray-50 transition cursor-pointer">
              <img src={chat} alt="Chat Icon" className="w-5 h-5" />
              <span className="font-medium text-sm md:text-base">Chat</span>
            </button>
          </div>

          {/* Mobile View: Time Left */}
          <div className="md:hidden">
            <p className="text-[#4D4D4D] font-semibold">Time Left</p>
            <p className="text-[#8559CA] font-medium">3 hours 45 minutes</p>
          </div>

          {/* Mobile View: Buttons */}
          <div className="md:hidden flex items-center justify-between gap-3 pt-2">
            <Button
              variant="ghost"
              className="text-red-500  hover:bg-red-50 w-[100px] cursor-pointer"
            >
              Cancel
            </Button>
            <Button className="w-[151px] cursor-pointer">Mark Completed</Button>
          </div>
        </div>

        {/* Right Section (Only for desktop) */}
        <div className="hidden md:flex w-full md:w-1/2 items-center justify-end">
          <div className="space-y-6 text-sm md:text-base w-full sm:w-auto space-y-8">
            <div>
              <p className="text-[#4D4D4D] font-semibold">Time Left</p>
              <p className="text-[#8559CA] font-medium text-base md:text-lg">
                3 hours 45 minutes
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="ghost"
                className="text-red-500  hover:bg-red-50 w-full sm:w-auto cursor-pointer"
              >
                Cancel
              </Button>
              <Button className="w-full sm:w-auto cursor-pointer">
                Mark Completed
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyWorking;

/* 

import assistphoto from "@/assets/images/taskphoto.png";
import chat from "@/assets/icons/chat.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CurrentlyWorking = () => {
  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-full mx-auto bg-white border border-BorderHighlight rounded-xl shadow-sm p-4 sm:p-6 md:p-8 flex flex-col md:flex-row gap-6 font-DMsans">
   
        <div className="w-full md:w-1/2 flex items-start">
          <div className="w-full space-y-6">
         
            <div className="flex items-center gap-4">
              <img
                src={assistphoto}
                alt="Mary Cruz"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border border-gray-300"
              />
              <div>
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#3A1C71]">
                  Mary Cruz
                </h2>
                <p className="text-sm md:text-base text-[#4D4D4D]">
                  Event Specialist
                </p>
              </div>
            </div>

     
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 md:gap-6">
              <Link to="/user/current-booking" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto">
                  View Full Details
                </Button>
              </Link>
              <button className="flex items-center gap-2 w-full sm:w-auto justify-center border border-gray-300 rounded-md px-4 py-2 hover:bg-gray-50 transition">
                <img src={chat} alt="Chat Icon" className="w-5 h-5" />
                <span className="font-medium text-sm md:text-base">Chat</span>
              </button>
            </div>
          </div>
        </div>


        <div className="w-full md:w-1/2 flex items-center justify-start md:justify-end">
          <div className="w-full sm:w-auto space-y-6 text-sm md:text-base">
            <div>
              <p className="text-[#4D4D4D] font-semibold">Time Left</p>
              <p className="text-[#8559CA] font-medium text-base md:text-lg">
                3 hours 45 minutes
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                variant="ghost"
                className="text-red-500 border border-red-200 hover:bg-red-50 w-full sm:w-auto"
              >
                Cancel
              </Button>
              <Button className="w-full sm:w-auto">Mark Completed</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyWorking;

 */
