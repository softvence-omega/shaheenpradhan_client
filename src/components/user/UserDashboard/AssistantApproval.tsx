import assistphoto from "@/assets/images/taskphoto.png";
import { Button } from "@/components/ui/button";
import { LuClock4 } from "react-icons/lu";
import { Link } from "react-router-dom";

const AssistantApproval = () => {
  return (
    <div className="w-full">
      <div className="mx-auto bg-white rounded-[24px] shadow-sm p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-20 font-DMsans">
        {/* MOBILE LAYOUT */}
        <div className="flex flex-col w-full lg:hidden">
          {/* Top row: Photo + Name + Specialist + Status + Buttons below */}
          <div className="flex items-center gap-4">
            <img
              src={assistphoto}
              alt="Mary Cruz"
              className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
            />
            <div className="flex flex-col flex-1">
              <h2 className="text-[18px] font-semibold text-[#3A1C71]">
                Mary Cruz
              </h2>
              <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
              <div className="flex items-center gap-2 mt-1 text-[#FBAC1A] text-sm">
                <LuClock4 />
                <p>Pending Assistant Approval</p>
              </div>
            </div>
          </div>

          {/* Date and Time below */}
          <div className="flex space-x-10 mt-4 text-sm text-gray-700 space-y-2">
            <div>
              <p className="font-medium text-gray-800">Date</p>
              <p className="text-[#8559CA]">June 15, 2025</p>
            </div>
            <div>
              <p className="font-medium text-gray-800">Time</p>
              <p className="text-[#8559CA]">05:30 PM</p>
            </div>
          </div>

          {/* Buttons stacked */}
          <div className="mt-6 flex flex-col gap-4">
            <Link to="/user/pending">
              <Button variant="outline" className="w-full cursor-pointer">
                View Full Details
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="text-red-600 w-full cursor-pointer"
            >
              Cancel
            </Button>
          </div>
        </div>

        {/* DESKTOP LAYOUT (unchanged) */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center lg:items-start gap-4 flex-1">
          {/* Profile Section */}
          <img
            src={assistphoto}
            alt="Mary Cruz"
            className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
          />
          <div className="text-center lg:text-left space-y-2 flex-1">
            <h2 className="text-[18px] font-semibold text-[#3A1C71]">
              Mary Cruz
            </h2>
            <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
            <div className="flex justify-start items-center gap-2 mt-2 text-[#FBAC1A]">
              <LuClock4 />
              <p>Pending Assistant Approval</p>
            </div>
          </div>

          {/* Info & Actions Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 flex-1">
            {/* Time */}
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <div>
                  <p className="font-medium text-gray-800">Date</p>
                  <p className="text-[#8559CA]">June 15, 2025</p>
                </div>
                <div>
                  <p className="font-medium text-gray-800">Time</p>
                  <p>
                    <span className="text-[#8559CA]">05:30 PM</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 text-sm w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link to="/user/pending">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto cursor-pointer"
                  >
                    View Full Details
                  </Button>
                </Link>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="ghost"
                  className="text-red-600 w-full sm:w-auto cursor-pointer"
                >
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantApproval;
