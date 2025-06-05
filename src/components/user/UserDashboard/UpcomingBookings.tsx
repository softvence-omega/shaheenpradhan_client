"use client";

import { MapPin } from "lucide-react";
import assistphoto from "@/assets/images/taskphoto.png";
import chat from "@/assets/icons/chat.png";
import { Button } from "@/components/ui/button";
import DialogDateTimeRangePicker from "@/pages/user/DialogDateTimeRangePicker";
import { Link } from "react-router-dom";

const UpcomingBookings = () => {
  return (
    <div className="w-full">
      <div className="mx-auto bg-white border border-BorderHighlight rounded-[24px] shadow-sm p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-20 font-DMsans">
        {/* MOBILE LAYOUT */}
        <div className="flex flex-col w-full lg:hidden">
          {/* Photo and Name + Specialist side by side */}
          <div className="flex items-center gap-4">
            <img
              src={assistphoto}
              alt="Mary Cruz"
              className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
            />
            <div>
              <h2 className="text-[18px] font-semibold text-[#3A1C71]">
                Mary Cruz
              </h2>
              <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
            </div>
            {/* Push chat icon to the right */}
            <div className="ml-auto flex items-center gap-2 text-gray-700 cursor-pointer">
              <img src={chat} alt="chat" className="w-5 h-5" />
              <p className="font-medium">Chat</p>
            </div>
          </div>

          {/* Date and Time below chat icon */}
          <div className="flex space-x-10 mt-4 text-sm text-gray-700 space-y-2">
            <div>
              <p className="font-medium text-gray-800">Start Date</p>
              <p className="text-[#8559CA]">June 15, 2025</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Time Zone</p>
              <p>
                <span className="text-[#8559CA]">05:30 PM</span> to
                <span className="text-[#8559CA] ml-1">05:30 PM</span>
              </p>
            </div>
          </div>

          {/* Task info */}
          <div className="mt-4 text-sm text-gray-700 space-y-1">
            <p className="font-medium">Task</p>
            <p>Calendar management, travel coordination</p>
          </div>

          {/* Buttons Cancel and Reschedule side by side */}
          <div className="mt-6 flex gap-4">
            <Button
              variant="ghost"
              className="text-red-600 flex-1 cursor-pointer"
            >
              Cancel
            </Button>
            <DialogDateTimeRangePicker />
          </div>
        </div>

        {/* DESKTOP LAYOUT (unchanged) */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-6 lg:gap-20 flex-1">
          <div className="flex flex-col lg:flex-row items-start lg:items-start gap-4">
            <img
              src={assistphoto}
              alt="Mary Cruz"
              className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
            />

            <div className="text-start lg:text-left space-y-2">
              <h2 className="text-[18px] font-semibold text-[#3A1C71]">
                Mary Cruz
              </h2>
              <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
              <div className="mt-2 space-y-1">
                <p className="text-sm font-medium text-gray-700">Task</p>
                <p className="text-sm text-gray-600">
                  Calendar management, travel coordination
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:flex-row lg:justify-between lg:items-center gap-6 flex-1">
            <div className="ml-45 space-y-4 text-sm text-gray-700">
              <div className="flex  mr-20 sm:flex-row sm:items-center sm:gap-4">
                <div>
                  <p className="font-medium text-gray-800">Start Date</p>
                  <p className="text-[#8559CA]">June 15, 2025</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Time Zone</p>
                  <p>
                    <span className="text-[#8559CA]">05:30 PM</span> to
                    <span className="text-[#8559CA] ml-1">05:30 PM</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-4 h-4" />
                <span>Dubai, UAE</span>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-sm w-full lg:w-auto space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link to="/user/upcoming-booking">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    View Full Details
                  </Button>
                </Link>

                <div className="flex items-center gap-2 text-gray-700 cursor-pointer">
                  <img src={chat} alt="chat" className="w-5 h-5" />
                  <p className="font-medium">Chat</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="ghost"
                  className="text-red-600 w-full sm:w-auto cursor-pointer"
                >
                  Cancel
                </Button>
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <DialogDateTimeRangePicker />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBookings;

/* 

"use client";

import { MapPin } from "lucide-react";
import assistphoto from "@/assets/images/taskphoto.png";
import chat from "@/assets/icons/chat.png";
import { Button } from "@/components/ui/button";
import DialogDateTimeRangePicker from "@/pages/user/DialogDateTimeRangePicker";

const UpcomingBookings = () => {
  return (
    <div className="w-full">
      <div className="relative mx-auto bg-white border border-BorderHighlight rounded-lg shadow-sm p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-20 font-DMsans">
        <div className="absolute top-4 right-4 flex items-center gap-2 text-gray-700 cursor-pointer">
          <img src={chat} alt="chat" className="w-5 h-5" />
          <p className="font-medium text-sm">Chat</p>
        </div>

 
        <div className="flex flex-col gap-4 lg:flex-row items-start">

          <div className="flex items-center gap-4">
            <img
              src={assistphoto}
              alt="Mary Cruz"
              className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
            />

            <div className="text-start space-y-1">
              <h2 className="text-[18px] font-semibold text-[#3A1C71]">
                Mary Cruz
              </h2>
              <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
            </div>
          </div>

          <div className="text-sm text-gray-700 mt-2 space-y-3">

            <div className="flex flex-row sm:flex sm:items-center sm:gap-6">
              <div>
                <p className="font-medium text-gray-800">Start Date</p>
                <p className="text-[#8559CA]">June 15, 2025</p>
              </div>
              <div>
                <p className="font-medium text-gray-800">Time Zone</p>
                <p>
                  <span className="text-[#8559CA]">05:30 PM</span> to
                  <span className="text-[#8559CA] ml-1">05:30 PM</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>


            <div className="space-y-1">
              <p className="text-sm font-medium text-gray-700">Task</p>
              <p className="text-sm text-gray-600">
                Calendar management, travel coordination
              </p>
            </div>
          </div>
        </div>


        <div className="flex flex-col justify-end lg:justify-center lg:items-end w-full gap-4">
          <div className="flex flex-col sm:flex-row justify-between gap-3 w-full">
  
            <Button
              variant="ghost"
              className="text-red-600 w-full sm:w-auto cursor-pointer"
            >
              Cancel
            </Button>

     
            <DialogDateTimeRangePicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingBookings;
 */
