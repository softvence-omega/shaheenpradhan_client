import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import TittleDashboard from "@/components/shared/TittleDashboard";
import { FaArrowLeft } from "react-icons/fa";

const Notifications = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4 mb-6">
          <button
            type="button"
            aria-label="Go back"
            className="text-xl text-gray-700 hover:text-black"
            onClick={() => window.history.back()} // or use router.back() if using Next.js
          >
            <FaArrowLeft />
          </button>
          <TittleDashboard title="Notifications" subTitle="" />
        </div>
        <div className="space-x-4">
          <button className="underline text-[#8559CA] cursor-pointer">
            Mark all as read
          </button>
        </div>
      </div>

      {/* Notifications List */}
      <div className="space-y-6 mt-6">
        {/* Notification 1 */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center font-DMsans bg-[#FBFDFF] border border-[#4099FF] rounded-[8px]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-2">
            <div>
              <h2 className="text-[16px] leading-[140%] tracking-[0.32px] text-[#4099FF]">
                Booking Confirmed: #BK123
              </h2>
              <h2 className="text-[14px] leading-[150%] font-pangea text-[#808080]">
                Assistant Jane Smith Confirmed for May 10th
              </h2>
            </div>
            <p className="text-[#808080] whitespace-nowrap">1 hour ago</p>
          </div>
        </div>

        {/* Notification 2 */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center font-DMsans bg-[#FFFBFB] border border-[#FF4040] rounded-[8px]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-2">
            <div>
              <h2 className="text-[16px] leading-[140%] tracking-[0.32px] text-[#FF4040]">
                Booking Confirmed: #BK123
              </h2>
              <h2 className="text-[14px] leading-[150%] font-pangea text-[#808080]">
                Assistant Jane Smith Confirmed for May 10th
              </h2>
              <button className="text-[16px] underline text-[#8559CA] mt-2">
                View Details & Respond
              </button>
            </div>
            <p className="text-[#808080] whitespace-nowrap">Yesterday</p>
          </div>
        </div>

        {/* Notification 3 */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center font-DMsans bg-[#FFFDFA] border border-[#FBAC1A] rounded-[8px]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-2">
            <div>
              <h2 className="text-[16px] leading-[140%] tracking-[0.32px] text-[#FBAC1A]">
                New Message from Support
              </h2>
              <h2 className="text-[14px] leading-[150%] font-pangea text-[#808080]">
                We've responded to your recent inquiry about billing. Check your
                support tickets.
              </h2>
            </div>
            <p className="text-[#808080] whitespace-nowrap">1 hour ago</p>
          </div>
        </div>

        {/* Notification 4 */}
        <div className="p-6 flex flex-col md:flex-row justify-between items-start md:items-center font-DMsans bg-[#FAFEFC] border border-[#0ACF73] rounded-[8px]">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full gap-2">
            <div>
              <h2 className="text-[16px] leading-[140%] tracking-[0.32px] text-[#0ACF73]">
                Payment Successful: Invoice #INV-0078
              </h2>
              <h2 className="text-[14px] leading-[150%] font-pangea text-[#808080]">
                Your payment of $150.00 has been processed successfully.
              </h2>
            </div>
            <p className="text-[#808080] whitespace-nowrap">
              May 6, 2025, 02:30 PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
