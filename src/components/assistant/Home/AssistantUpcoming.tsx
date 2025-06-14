import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import DialogDateTimeRangePicker from "@/pages/user/DialogDateTimeRangePicker";
import { Link } from "react-router-dom";
import { Dialog } from "@/components/ui/dialog";

const AssistantUpcoming = () => {
  return (
    <div className="w-full">
      <div className="mx-auto p-4 bg-white shadow-md rounded-3xl font-DMsans border border-BorderHighlight">
        {/* Mobile + Medium (below lg) custom layout */}
        <div className="flex flex-col gap-4 lg:hidden">
          {/* Top row: Name + Role on left, Location on right */}
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-[18px] font-semibold text-[#3A1C71] leading-tight">
                Mohammed Khalid
              </h2>
              <p className="text-[15px] text-[#4D4D4D]">President, Tiger LLC</p>
            </div>
            <div className="flex items-center gap-2 text-[#4D4D4D] text-sm">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>
          </div>

          {/* Middle row: Task description full width */}
          <div>
            <p className="font-semibold text-[#4D4D4D]">Task</p>
            <p className="text-sm text-gray-600">
              Calendar management, travel coordination
            </p>
          </div>

          {/* Bottom row: Start Date and Time Zone side by side */}
          <div className="flex justify-between text-[#4D4D4D] text-sm font-medium">
            <div>
              <p>Start Date</p>
              <p className="text-[#8559CA]">June 15, 2025</p>
            </div>
            <div>
              <p>Time Zone</p>
              <p className="font-medium">
                <span className="text-[#8559CA]">05:30 PM</span> To
                <span className="text-[#8559CA] ml-1">05:30 PM</span>
              </p>
            </div>
          </div>

          {/* Action Buttons stacked */}
          <div className="flex flex-col space-y-3 ">
            <Link to="/assistant/upcoming-task-2">
              <Button
                variant="outline"
                className="w-full cursor-pointer hidden md:block"
              >
                View Full Details
              </Button>
            </Link>

            <div>
              <>
                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    className="text-red-500 w-[158px] text-sm px-4 py-2 cursor-pointer"
                  >
                    Cancel
                  </Button>
                  <Dialog>
                    <div className="grid gap-4 py-4">
                      <DialogDateTimeRangePicker />
                    </div>
                  </Dialog>
                </div>
              </>
            </div>
          </div>
        </div>

        {/* Large device (lg and up) original layout */}
        <div className="hidden lg:flex justify-between gap-6 items-center font-DMsans">
          {/* Profile Section */}
          <div className="flex flex-col justify-between md:flex-row md:items-center md:space-x-6">
            <div className="space-y-7">
              <div className="flex items-center space-x-3">
                <div className="flex flex-col justify-center">
                  <h2 className="text-[18px] font-semibold text-[#3A1C71] leading-tight">
                    Mohammed Khalid
                  </h2>
                  <p className="text-[15px] text-[#4D4D4D]">
                    President, Tiger LLC
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="font-semibold">Task</p>
                  <p>Calendar management, travel coordination</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 ">
            <div className="text-[#4D4D4D] text-lg space-y-16">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Dubai, UAE</span>
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-2">
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
          </div>

          {/* Action Buttons Section */}
          <div className="flex flex-col items-start md:items-end gap-6 space-y-16">
            <div>
              <Link to="/assistant/upcoming-task-2">
                <Button className="cursor-pointer" variant="outline">
                  View Full Details
                </Button>
              </Link>
            </div>

            <div className="flex space-x-3">
              <Button variant="ghost" className="text-red-500 cursor-pointer">
                Cancel
              </Button>
              <DialogDateTimeRangePicker />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantUpcoming;
