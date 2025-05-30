import assistphoto from "@/assets/images/taskphoto.png";
import chat from "@/assets/icons/chat.png";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CurrentCard = () => {
  return (
    <div>
      <div className="w-full">
        <div className="mx-auto p-4 flex flex-col lg:flex-row justify-between gap-6 font-DMsans bg-white border border-BorderHighlight rounded-lg">
          {/* Profile Section */}
          <div className="flex justify-center lg:justify-start items-center w-full lg:w-1/2">
            <div className="space-y-7 w-full">
              <div className="flex items-center space-x-3">
                {/* Text */}
                <div className="flex flex-col justify-center">
                  <h2 className="text-[18px] font-semibold text-[#3A1C71] leading-tight">
                    Mary Cruz
                  </h2>
                  <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
                </div>
              </div>
              <div className="mt-2 space-y-1">
                <p className="text-sm font-medium text-gray-700">Task</p>
                <p className="text-sm text-gray-600">
                  Calendar management, travel coordination
                </p>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 sm:gap-6">
                <Link to="/assistant/current-task-1">
                  <Button variant="outline" className="w-full sm:w-auto">
                    View Full Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            <div className="text-[16px] w-full sm:w-auto">
              <div className="space-y-20">
                <div>
                  <p className="text-[#4D4D4D] font-semibold">Time Left</p>
                  <p className="text-[#8559CA]">3 hours 45 minutes</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-3">
                  <div className="flex items-center gap-2">
                    <img src={chat} alt="Chat" height={32} width={32} />
                    <p className="font-medium">Chat</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCard;
