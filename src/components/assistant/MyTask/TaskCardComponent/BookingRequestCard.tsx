import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BookingRequestCard = () => {
  return (
    <div className="w-full">
      <div className="mx-auto p-4 bg-white shadow-md rounded-3xl font-DMsans">
        {/* Mobile + Medium (below lg) layout */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* Top row: Name + Role on left, Location on right */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-[#3A1C71] leading-tight">
                Mohammed Khalid
              </h2>
              <p className="text-sm sm:text-base text-[#4D4D4D]">
                President, Tiger LLC
              </p>
            </div>
            <div className="flex items-center gap-2 text-[#4D4D4D] text-sm">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>
          </div>

          {/* Task Description full width */}
          <div>
            <p className="font-semibold text-[#4D4D4D] text-sm sm:text-base">
              Task
            </p>
            <p className="text-sm sm:text-base">
              Calendar management, travel coordination
            </p>
          </div>

          {/* Start Date and Time Zone side by side */}
          <div className="flex justify-between text-[#4D4D4D] text-sm font-medium">
            <div>
              <p>Start Date</p>
              <p className="text-[#8559CA]">June 15, 2025</p>
            </div>
            <div>
              <p>Time Zone</p>
              <p>
                <span className="text-[#8559CA]">05:30 PM</span> To
                <span className="text-[#8559CA] ml-1">05:30 PM</span>
              </p>
            </div>
          </div>

          {/* Action buttons stacked */}
          <div className="flex flex-col space-y-3">
            <Link to="/assistant/booking-task-3">
              <Button variant="outline" className="w-full hidden md:block">
                View Full Details
              </Button>
            </Link>

            <div className="flex justify-between gap-3">
              <Button variant="ghost" className="text-red-500 w-1/2">
                Cancel
              </Button>
              <Button className="w-[158px]">Accept</Button>
            </div>
          </div>
        </div>

        {/* Large devices (lg and up): Original detailed layout */}
        <div className="hidden lg:flex justify-between gap-6 items-center font-DMsans">
          {/* Profile Section */}
          <div className="flex justify-center items-center">
            <div className="space-y-7">
              <div className="flex items-center space-x-3">
                <div className="flex flex-col justify-center">
                  <h2 className="text-base sm:text-lg md:text-xl font-semibold text-[#3A1C71] leading-tight">
                    Mohammed Khalid
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-[#4D4D4D]">
                    President, Tiger LLC
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-sm sm:text-base md:text-lg">
                    Task
                  </p>
                  <p className="text-sm sm:text-base md:text-lg">
                    Calendar management, travel coordination
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className=" justify-between items-center text-[#4D4D4D] text-lg space-y-16">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>

            <div className="flex items-center gap-6 ">
              <div>
                <p className="text-[#4D4D4D] font-semibold">Start Date</p>
                <p className="text-[#8559CA]">June 15, 2025</p>
              </div>
              <div>
                <p className="text-[#4D4D4D] font-semibold">Time Zone</p>
                <p className="font-medium">
                  <span className="text-[#8559CA]">05:30 PM</span> To
                  <span className="text-[#8559CA] ml-1">05:30 PM</span>
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons Section */}
          <div className="flex flex-col items-start gap-6 space-y-8">
            <div>
              <Link to="/assistant/booking-task-3">
                <Button variant="outline" className="cursor-pointer">
                  View Full Details
                </Button>
              </Link>
            </div>

            <div className="flex space-x-3">
              <Button variant="ghost" className="text-red-500 cursor-pointer">
                Cancel
              </Button>
              <Button>Accept</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestCard;
