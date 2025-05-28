import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";

const Notifications = () => {
  return (
    <div>
      <div className="flex  items-center justify-between">
        <TitleAndSubTitle title="Notifications" subTitle=""></TitleAndSubTitle>
        <div className="space-x-4">
          <button className="underline text-[#8559CA] cursor-pointer">
            Mark all as read
          </button>
        </div>
      </div>
      {/* PArt-1 */}
      <div className="space-y-8 mt-6">
        {/* 1 */}
        <div>
          <div className=" h-[91px] mx-auto">
            <div className="p-[24px] flex flex-col lg:flex-row justify-between items-center font-DMsans bg-[#FBFDFF] border border-[#4099FF] rounded-[8px]">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h2 className="w-[437px] text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#4099FF]">
                    Booking Confirmed: #BK123
                  </h2>
                  <h2 className="w-[437px] h-[21px] font-normal text-[14px] leading-[150%] tracking-[0%] font-pangea text-[#808080]">
                    Assistant Jane Smith Confirmed for May 10th
                  </h2>
                </div>
                <div className="text-[#808080]">
                  <p>1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className=" h-[117px] mx-auto p-[24px] flex flex-col lg:flex-row justify-between items-center font-DMsans bg-[#FFFBFB] border border-[#FF4040] rounded-[8px]">
          <div className="flex justify-between items-center w-full">
            <div>
              <h2 className="text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#FF4040]">
                Booking Confirmed: #BK123
              </h2>
              <h2 className="font-normal text-[14px] leading-[150%] tracking-[0%] font-pangea text-[#808080]">
                Assistant Jane Smith Confirmed for May 10th
              </h2>
              <button className="text-[18px] font-normal underline text-[#8559CA] cursor-pointer">
                View Details & Respond
              </button>
            </div>
            <div className="text-[#808080]">
              <p>Yesterday</p>
            </div>
          </div>
        </div>

        {/* 3 */}
        <div>
          <div className=" h-[91px] mx-auto">
            <div className="p-[24px] flex flex-col lg:flex-row justify-between items-center font-DMsans bg-[#FFFDFA] border border-[#FBAC1A] rounded-[8px]">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h2 className="w-[437px] text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#FBAC1A]">
                    New Message from Support
                  </h2>
                  <h2 className=" h-[21px] font-normal text-[14px] leading-[150%] tracking-[0%] font-pangea text-[#808080]">
                    We've responded to your recent inquiry about billing. Check
                    your support tickets.
                  </h2>
                </div>
                <div className="text-[#808080]">
                  <p>1 hour ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 4 */}
        <div>
          <div className=" h-[91px] mx-auto">
            <div className="p-[24px] flex flex-col lg:flex-row justify-between items-center font-DMsans bg-[#FAFEFC] border border-[#0ACF73] rounded-[8px]">
              <div className="flex justify-between items-center w-full">
                <div>
                  <h2 className="w-[437px] text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#0ACF73]">
                    Payment Successful: Invoice #INV-0078
                  </h2>
                  <h2 className="w-[437px] h-[21px] font-normal text-[14px] leading-[150%] tracking-[0%] font-pangea text-[#808080]">
                    Your payment of $150.00 has been processed successfully.
                  </h2>
                </div>
                <div className="text-[#808080]">
                  <p>May 6, 2025, 02:30 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
