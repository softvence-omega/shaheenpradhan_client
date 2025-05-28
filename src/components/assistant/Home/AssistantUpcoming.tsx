import { MapPin } from "lucide-react";
import assistphoto from "@/assets/images/taskphoto.png";
import chat from "@/assets/icons/chat.png";
import { Button } from "@/components/ui/button";

const AssistantUpcoming = () => {
  return (
    <div className="w-full ">
      <div className=" mx-auto bg-white border border-BorderHighlight rounded-lg shadow-sm p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-20 font-DMsans">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-[18px] font-semibold text-[#3A1C71]">
              Sarah Malik
            </h2>
            <p className="text-[15px] text-[#4D4D4D]">CEO, Tiger LLC</p>
            <div className="mt-2 space-y-1">
              <p className="text-sm font-medium text-gray-700">Task</p>
              <p className="text-sm text-gray-600">
                Calendar management, travel coordination
              </p>
            </div>
          </div>
        </div>

        {/* Info & Actions Section */}
        <div className="flex justify-center   gap-6 flex-1">
          {/* Time & Location */}
          <div className="space-y-10 text-sm text-gray-700">
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
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
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4 text-sm w-full lg:w-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Button variant="outline" className="w-full sm:w-auto">
              View Full Details
            </Button>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button variant="ghost" className="text-red-600 w-full sm:w-auto">
              Cancel
            </Button>
            <Button className="w-full sm:w-auto">Reschedule</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantUpcoming;
