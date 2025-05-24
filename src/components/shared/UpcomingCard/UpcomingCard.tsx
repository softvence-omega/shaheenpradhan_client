/* import { AiFillMessage } from "react-icons/ai"; */
import { MapPin } from "lucide-react";
/* import assistphoto from "@/assets/images/taskphoto.png"; */
import chat from "@/assets/icons/chat.png";
import { Button } from "@/components/ui/button";

const UpcomingCard = () => {
  return (
    <div className="w-full  p-4">
      <div className="max-w-[1100px] mx-auto  p-4 flex flex-col sm:flex-row gap-6 font-DMsans space-x-20 bg-white shadow-md rounded-lg">
        {/* Profile Section */}
        <div className="flex justify-center items-center ">
          <div className="space-y-7">
            <div className="flex items-center space-x-3 ">
              {/* Image */}
              {/*   <div>
                <img
                  src={assistphoto}
                  alt="Jessamine Mumtaz"
                  className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
                />
              </div> */}

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
                <Button variant="outline">View Full Details</Button>
              </div>

              <div className="space-x-3">
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

export default UpcomingCard;
