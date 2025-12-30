import { FaHandshake, FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

const RecentActivities = () => {
  return (
    <div className="space-y-4">
      {/* Activity Item */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
        <div className="flex items-start sm:items-center gap-2">
          <span className="text-[#08D274] text-xl">
            <FaCircleCheck />
          </span>
          <p className="text-sm sm:text-base">
            You booked Jane Smith for May 20, 2025.
          </p>
        </div>
        <span className="text-[#808080] text-sm sm:text-base">2 days ago</span>
      </div>

      {/* Activity Item */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
        <div className="flex items-start sm:items-center gap-2">
          <span className="text-[#4099FF] text-xl">
            <FaHandshake />
          </span>
          <p className="text-sm sm:text-base">
            Assistant Robert Johnson accepted your request for June 5, 2025.
          </p>
        </div>
        <span className="text-[#808080] text-sm sm:text-base">3 weeks ago</span>
      </div>

      {/* Activity Item */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
        <div className="flex items-start sm:items-center gap-2">
          <span className="text-[#FBAC1A] text-xl">
            <FaStar />
          </span>
          <p className="text-sm sm:text-base">
            Your review for Sarah Williams was approved.
          </p>
        </div>
        <span className="text-[#808080] text-sm sm:text-base">3 weeks ago</span>
      </div>

      {/* Activity Item */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
        <div className="flex items-start sm:items-center gap-2">
          <span className="text-[#08D274] text-xl">
            <GoClockFill />
          </span>
          <p className="text-sm sm:text-base">
            You have a pending booking request with Assistant Emily Davis.
          </p>
        </div>
        <span className="text-[#808080] text-sm sm:text-base">4 days ago</span>
      </div>
    </div>
  );
};

export default RecentActivities;
