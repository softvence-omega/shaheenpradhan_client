import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BookingRequestCard = () => {
  return (
    <div className="w-full">
      <div className=" mx-auto  p-4 flex justify-between  gap-6 font-DMsans space-x-20 bg-white shadow-md rounded-lg">
        {/* Profile Section */}
        <div className="flex justify-center items-center ">
          <div className="space-y-7">
            <div className="flex items-center space-x-3">
              {/* Text */}
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

        <div className="flex  justify-between items-center">
          <div className="gap-2 text-[#4D4D4D] text-lg space-y-16">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="">
                <p className="text-[#4D4D4D] font-semibold">Start Date</p>
                <p className="text-[#8559CA]">June 15, 2025</p>
              </div>
              <div>
                <p className="text-[#4D4D4D] font-semibold">Time Zone</p>
                <p className=" font-medium">
                  <span className="text-[#8559CA]">05:30 PM</span> To
                  <span className="text-[#8559CA] ml-1">05:30 PM </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  justify-between items-center">
          {/* part-3 */}
          <div className=" text-[16px]">
            <div className="space-y-16">
              <div>
                <Link to="/assistant/booking-task-3">
                  <Button variant="outline">View Full Details</Button>
                </Link>
              </div>

              <div className="flex space-x-3 mt-8">
                <Button variant="ghost" className="text-red-500">
                  Cancel
                </Button>
                <Button>Accept</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequestCard;
