import { FaStar } from "react-icons/fa";
import { MapPin } from "lucide-react";
import assistphoto from "@/assets/images/assistphoto.png";

const AssistantInfo = () => {
  return (
    <div className="w-full  p-4">
      <div className="  mx-auto  p-4 flex flex-col sm:flex-row gap-6 font-DMsans space-x-20">
        {/* Profile Section */}
        <div className="flex justify-center items-center ">
          <div>
            <div className="flex flex-col items-center">
              <img
                src={assistphoto}
                alt="Jessamine Mumtaz"
                className="w-26 h-26 rounded-full object-cover border-4 border-[#B655DA]"
              />
              <div className="-mt-6 flex w-[72px] h-[25px] items-center gap-1 bg-[#FFECDD] rounded-full px-2 py-0.5 shadow-sm">
                <FaStar className="text-[#F9A824] text-sm" />
                <span className="text-sm font-medium">4.9</span>
                <span className="text-xs text-gray-500">(5)</span>
              </div>
              <h2 className="mt-3 text-[18px] font-DMsans font-semibold text-[#3A1C71]">
                Jessamine Mumtaz
              </h2>
              <p className="text-[18px] text-black">Event Specialist</p>
              <div className="border-b border-gray-300 pb-2 h-4" />
              <p className="mt-3 text-[20px] font-semibold text-gray-800">
                $20<span className="text-sm font-normal">/hours</span>
              </p>
            </div>
          </div>
        </div>

        <div className="border-r border-[#E5E5E5] "></div>
        {/* Info Section */}

        <div className="flex  justify-between items-center space-x-20 ">
          <div className="gap-2 text-gray-700 text-lg space-y-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE</span>
            </div>
            <div>
              <p className="text-gray-500">Experience</p>
              <p className="text-[#8559CA] font-medium">6+ years</p>
            </div>
            <div>
              <p className="text-gray-500">Availability</p>
              <p>
                <span className="text-[#8559CA] font-medium">✓ Remote</span>{" "}
                <span className="text-gray-400 ml-2">× In Person</span>
              </p>
            </div>
          </div>

          <div className=" text-lg">
            <div className="space-y-6">
              <div>
                <span className="text-green-500 ml-auto">Available Now</span>
              </div>
              <div>
                <p className="text-gray-500">Language</p>
                <p className="text-[#8559CA] font-medium">
                  English, Arabic, French
                </p>
              </div>
              <div>
                <p className="text-gray-500">Can Travel</p>
                <p className="text-[#8559CA] font-medium">Yes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantInfo;
