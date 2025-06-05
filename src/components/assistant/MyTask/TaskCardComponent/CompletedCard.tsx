import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompletedCard = () => {
  return (
    <div className="space-y-6">
      <div className="w-full">
        <div className="mx-auto bg-white rounded-3xl shadow-sm p-4 lg:p-6 flex justify-between gap-6 lg:gap-20 font-DMsans">
          {/* Compact layout for md and below (mobile + medium devices) */}
          <div className="flex w-full lg:hidden">
            {/* Left Column */}
            <div className="w-1/2 flex flex-col justify-start space-y-1">
              <h2 className="text-[18px] font-semibold text-[#3A1C71] leading-tight">
                Sarah Malik
              </h2>
              <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>

              <p className="text-[#4D4D4D] font-semibold mt-4">Duration</p>
              <p className="text-[#8559CA]">8 Hours</p>
            </div>

            {/* Right Column */}
            <div className="w-1/2 flex flex-col justify-start space-y-1">
              <p className="text-sm font-medium text-gray-700">Task</p>
              <p className="text-sm text-gray-600">
                Calendar management, travel coordination
              </p>

              <div className="text-gray-600">
                <span className="font-semibold">Review Given</span>
                <div className="flex items-center mt-3 space-x-1">
                  <FaStar className="w-4 h-4 text-[#F9A825]" />
                  <p className="text-sm leading-none">5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Big device design for lg and above */}
          <div className="hidden lg:flex flex-col lg:flex-row justify-between gap-6 lg:gap-20 w-full">
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="text-start lg:text-left space-y-2">
                <h2 className="text-[18px] font-semibold text-[#3A1C71]">
                  Sarah Malik
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

            {/* Info & Actions Section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 ">
              {/* Time & Location */}
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <div>
                    <p className="font-medium text-gray-800">Duration</p>
                    <p className="text-[#8559CA]">8 Hours</p>
                  </div>
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">Review Given</span>
                  <div
                    className="flex items-center gap-[6px] w-fit h-[25px] rounded-full px-[8px] py-[2px] bg-white text-[#F9A825] 
                  flex-col sm:flex-row mt-1 sm:mt-0"
                  >
                    <FaStar className="w-4 h-4 text-[#F9A825]" />
                    <p className="text-sm leading-none">5</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 ">
              {/* Buttons */}
              <div className="flex flex-col gap-4 text-sm w-full lg:w-auto">
                <div className="mb-20 gap-4">
                  <Link to="/assistant/completed-task-4">
                    <Button variant="outline" className="w-full sm:w-auto">
                      View Full Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card -2 */}
      <div className="w-full">
        <div className="mx-auto bg-white rounded-3xl shadow-sm p-4 lg:p-6 flex justify-between gap-6 lg:gap-20 font-DMsans">
          {/* Compact layout for md and below (mobile + medium devices) */}
          <div className="flex w-full lg:hidden">
            {/* Left Column */}
            <div className="w-1/2 flex flex-col justify-start space-y-1">
              <h2 className="text-[18px] font-semibold text-[#3A1C71] leading-tight">
                Sarah Malik
              </h2>
              <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>

              <p className="text-[#4D4D4D] font-semibold mt-4">Duration</p>
              <p className="text-[#8559CA]">8 Hours</p>
            </div>

            {/* Right Column */}
            <div className="w-1/2 flex flex-col justify-start space-y-1">
              <p className="text-sm font-medium text-gray-700">Task</p>
              <p className="text-sm text-gray-600">
                Calendar management, travel coordination
              </p>

              <div className="text-gray-600">
                <span className="font-semibold">Review Given</span>
                <div className="flex items-center mt-3 space-x-1">
                  <p className="text-[#808080]">No Review</p>
                </div>
              </div>
            </div>
          </div>

          {/* Big device design for lg and above */}
          <div className="hidden lg:flex flex-col lg:flex-row justify-between gap-6 lg:gap-20 w-full">
            {/* Profile Section */}
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="text-start lg:text-left space-y-2">
                <h2 className="text-[18px] font-semibold text-[#3A1C71]">
                  Sarah Malik
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

            {/* Info & Actions Section */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 ">
              {/* Time & Location */}
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                  <div>
                    <p className="font-medium text-gray-800">Duration</p>
                    <p className="text-[#8559CA]">8 Hours</p>
                  </div>
                </div>
                <div className="text-gray-600">
                  <span className="font-semibold">Review Given</span>
                  <div
                    className="flex items-center gap-[6px] w-fit h-[25px] rounded-full px-[8px] py-[2px] bg-white text-[#F9A825] 
                  flex-col sm:flex-row mt-1 sm:mt-0"
                  >
                    <p className="text-[#808080]">No Review</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 ">
              {/* Buttons */}
              <div className="flex flex-col gap-4 text-sm w-full lg:w-auto">
                <div className="mb-20 gap-4">
                  <Link to="/assistant/completed-task-4">
                    <Button variant="outline" className="w-full sm:w-auto">
                      View Full Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedCard;
