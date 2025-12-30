import { AiFillMessage } from "react-icons/ai";
import { MapPin } from "lucide-react";
import assistphoto from "@/assets/images/taskphoto.png";
import chat from "@/assets/icons/chat.png";
import { Button } from "@/components/ui/button";
import DialogDateTimeRangePicker from "@/pages/user/DialogDateTimeRangePicker";

const TaskInfo = () => {
  return (
    <div className="w-full  p-4">
      <div className="max-w-[959px]  mx-auto  p-4 flex flex-col sm:flex-row gap-6 font-DMsans space-x-20">
        {/* Profile Section */}
        <div className="flex justify-center items-center ">
          <div className="space-y-7">
            <div className="flex items-center space-x-3 ">
              {/* Image */}
              <div>
                <img
                  src={assistphoto}
                  alt="Jessamine Mumtaz"
                  className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col justify-center">
                <h2 className="text-[18px] font-semibold text-[#3A1C71] leading-tight">
                  Jessamine Mumtaz
                </h2>
                <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
              </div>
            </div>

            <div className=" space-y-3">
              <div>
                <p className="text-[18px] text-[#4D4D4D]">
                  <span className="font-semibold ">Status:</span>
                  <span className="text-[#08D274] ml-1">
                    Currently working
                  </span>{" "}
                </p>
                <p className=" text-[18px] text-[#4D4D4D]">
                  <span className="font-semibold"> Booking ID:</span> 12345678
                </p>
              </div>
              <div className="font-semibold text-[18px]">
                <p className="text-[#4D4D4D]">Total Price</p>
                <p className="text-[#8559CA]">$2360 USD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}

        <div className="flex  justify-between items-center space-x-20 ">
          <div className="gap-2 text-[#4D4D4D] text-lg space-y-6">
            <div className="">
              <p>Time Left</p>
              <p className="text-[#8559CA]">3 hours 45 minutes</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>

            <div className="flex items-center gap-2">
              <img src={chat} alt="" height={32} width={32} className="" />
              <p className=" font-medium">Chat</p>
            </div>
          </div>
          {/* part-3 */}
          <div className=" text-[16px]">
            <div className="space-y-6">
              <div>
                <p className="text-[#4D4D4D] font-semibold">Date</p>
                <p className="font-medium">
                  <span className="text-[#8559CA]">May 27, 2025</span> To
                  <span className="text-[#8559CA] ml-1">
                    June 15, 2025
                  </span>{" "}
                </p>
              </div>
              <div>
                <p className="text-[#4D4D4D] font-semibold">Time Zone</p>
                <p className=" font-medium">
                  <span className="text-[#8559CA]">05:30 PM</span> To
                  <span className="text-[#8559CA] ml-1">05:30 PM </span>
                </p>
              </div>

              <div className="space-x-3">
                <Button variant="ghost" className="text-red-500">
                  Cancel
                </Button>
                {/* <Button className="cursor-pointer">Reschedule</Button> */}
                <DialogDateTimeRangePicker />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
