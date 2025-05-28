import { FaHandshake, FaStar } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

const RecentActivities = () => {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between items-center space-x-3">
          <span className="text-[#08D274] text-lg font-semibold">
            <FaCircleCheck />
          </span>
          <p>You booked Jane Smith for May 20, 2025.</p>
        </div>
        <div>
          <span className="text-[#808080]">2 days ago</span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between items-center space-x-3">
          <span className="text-[#4099FF] text-lg font-semibold">
            <FaHandshake />
          </span>
          <p>
            Assistant Robert Johnson accepted your request for June 5, 2025..
          </p>
        </div>
        <div>
          <span className="text-[#808080]">3 weeks ago</span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between items-center space-x-3">
          <span className="text-[#FBAC1A] text-lg font-semibold">
            <FaStar />
          </span>
          <p> Your review for Sarah Williams was approved.</p>
        </div>
        <div>
          <span className="text-[#808080]">3 weeks ago</span>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex justify-between items-center space-x-3">
          <span className="text-[#08D274] text-lg font-semibold">
            <GoClockFill />
          </span>
          <p>You have a pending booking request with Assistant Emily Davis..</p>
        </div>
        <div>
          <span className="text-[#808080]">4 days ago</span>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;
