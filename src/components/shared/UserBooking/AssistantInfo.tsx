import { FaStar } from "react-icons/fa";
import { MapPin } from "lucide-react";
import assistphoto from "@/assets/images/assistphoto.png";
import { RxCross2 } from "react-icons/rx";
import { FiCheck } from "react-icons/fi";

const AssistantInfo = () => {
  return (
    <div className="w-full md:p-4">
      <div className="mx-auto md:p-4 flex flex-col sm:flex-row gap-6 font-DMsans md:space-x-16">
        {/* Profile Section */}
        <div className="flex justify-center items-center w-full sm:w-auto">
          <div className="flex flex-col items-center">
            <img
              src={assistphoto}
              alt="Jessamine Mumtaz"
              className="w-28 h-28 rounded-full object-cover border-4 border-[#B655DA]"
            />
            {/* Rating */}
            <div className="-mt-4 flex items-center gap-1 bg-[#FFECDD] rounded-full px-2 py-0.5 shadow-sm">
              <FaStar className="text-[#F9A824] text-sm" />
              <span className="text-sm font-medium">4.9</span>
              <span className="text-xs text-gray-500">(5)</span>
            </div>
            {/* Name & Title */}
            <h2 className="mt-3 text-lg font-semibold text-[#3A1C71] text-center">
              Jessamine Mumtaz
            </h2>
            <p className="text-base text-black text-center">Event Specialist</p>
            <div className="border-b border-[#E5E5E5] w-full my-2" />
            {/* Rate */}
            <p className="text-xl font-semibold text-gray-800 text-center">
              $20<span className="text-sm font-normal">/hours</span>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden sm:block border-r border-[#E5E5E5]" />

        {/* Info Section */}
        <div className="flex flex-row justify-between gap-6 w-full">
          {/* Left Info */}
          <div className="space-y-4 text-gray-700 w-full md:w-1/2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-base font-medium md:text-lg">Dubai, UAE</span>
            </div>
            <div>
              <p className="text-base font-medium md:text-lg">Experience</p>
              <p className="text-[#8559CA] text-sm md:text-base">6+ years</p>
            </div>
            <div>
              <p className="text-base font-medium md:text-lg">Availability</p>
              <div className="flex flex-col gap-1">
                <span className="text-[#8559CA] text-sm md:text-base flex items-center gap-1"><FiCheck /> Remote</span>
                <span className="text-gray-500 flex items-center gap-1 text-sm md:text-base">
                  <RxCross2 /> In Person
                </span>
              </div>
            </div>
          </div>

          {/* Right Info */}
          <div className="space-y-4 text-gray-700 w-full md:w-1/2">
            <div>
              <span className="text-green-500 text-base font-medium md:text-lg">
                Available Now
              </span>
            </div>
            <div>
              <p className="text-base font-medium md:text-lg">Language</p>
              <p className="text-[#8559CA] text-sm md:text-base">
                English, Arabic, French
              </p>
            </div>
            <div>
              <p className="text-base font-medium md:text-lg">Can Travel</p>
              <p className="text-[#8559CA] text-sm md:text-base">Yes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantInfo;
