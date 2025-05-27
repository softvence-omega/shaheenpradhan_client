import assistphoto from "@/assets/images/taskphoto.png";
import { Button } from "@/components/ui/button";
import { LuClock4 } from "react-icons/lu";

const AssistantApproval = () => {
  return (
    <div className="w-full ">
      <div className=" mx-auto bg-white  rounded-lg shadow-sm p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-20 font-DMsans">
        {/* Profile Section */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
          <img
            src={assistphoto}
            alt="Mary Cruz"
            className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
          />
          <div className="text-center lg:text-left space-y-2">
            <h2 className="text-[18px] font-semibold text-[#3A1C71]">
              Mary Cruz
            </h2>
            <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
            <div className="flex justify-start items-center gap-2 mt-2 space-x-1 text-[#FBAC1A]">
              <LuClock4 />
              <p>Pending Assistant Approval</p>
            </div>
          </div>
        </div>

        {/* Info & Actions Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 flex-1">
          {/* Time & Location */}
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
            <div className="flex items-center gap-2 text-gray-600">.</div>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantApproval;
