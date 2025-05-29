import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const UpcomingCard = () => {
  return (
    <div className="w-full  p-4">
      <div className=" mx-auto  p-4 flex flex-col sm:flex-row gap-6 font-DMsans space-x-20 bg-white shadow-md rounded-lg">
        {/* Profile Section */}
        <div className="flex justify-between items-center ">
          <div className="space-y-7">
            <div className="flex items-center space-x-3 ">
              {/* Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-[18px] font-semibold text-[#3A1C71] leading-tight">
                  Mohammed Khalid
                </h2>
                <p className="text-[15px] text-[#4D4D4D]">
                  President, Tiger LLC
                </p>
              </div>
            </div>

            <div className=" space-y-3">
              <div>
                <p className="font-semibold">Task</p>
                <p>Calendar management, travel coordination</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}

        <div className="flex  justify-between items-center space-x-20 ">
          <div className="gap-2 text-[#4D4D4D] text-lg space-y-6">
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
          {/* part-3 */}
          <div className=" text-[16px]">
            <div className="space-y-6">
              <div>
                <Link to="/assistant/upcoming-task-2">
                  <Button variant="outline">View Full Details</Button>
                </Link>
              </div>

              <div className="space-x-3">
                <Button variant="ghost" className="text-red-500">
                  Cancel
                </Button>
                <Button>Reschedule</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingCard;
