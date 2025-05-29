import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const CompletedCard = () => {
  return (
    <div className="space-y-6">
      <div className="w-full ">
        <div className=" mx-auto bg-white  rounded-lg shadow-sm p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-20 font-DMsans">
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="text-center lg:text-left space-y-2">
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
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 flex-1">
            {/* Time & Location */}
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <div>
                  <p className="font-medium text-gray-800">Duration</p>
                  <p className="text-[#8559CA]">8 Hours</p>
                </div>
              </div>
              <div className="items-center gap-2 text-gray-600">
                <span className="font-semibold">Review Given</span>
                <div className="flex items-center gap-[6px] w-fit h-[25px] rounded-full px-[8px] py-[2px] bg-white text-[#F9A825]">
                  <FaStar className="w-4 h-4 text-[#F9A825]" />
                  <p className="text-sm leading-none">5</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 text-sm w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
      <div className="w-full ">
        <div className=" mx-auto bg-white rounded-lg shadow-sm p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-20 font-DMsans">
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
            <div className="text-center lg:text-left space-y-2">
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

          {/* Info & Actions Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 flex-1">
            {/* Time & Location */}
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
                <div>
                  <p className="font-medium text-gray-800">Duration</p>
                  <p className="text-[#8559CA]">8 Hours</p>
                </div>
              </div>
              <div className="items-center gap-2 text-gray-600">
                <span className="font-semibold">Review Given</span>
                <div className="text-base-1000">No Review</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-4 text-sm w-full lg:w-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
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
  );
};

export default CompletedCard;
