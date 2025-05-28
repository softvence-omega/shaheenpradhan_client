import { Button } from "@/components/ui/button";

const BookingRequest = () => {
  return (
    <div>
      <div className=" h-[117px] mx-auto p-[24px] flex flex-col lg:flex-row justify-between items-center font-DMsans bg-[#FFFBFB] border border-[#4099FF] rounded-[8px]">
        <div className="flex justify-between items-center w-full">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <h2 className="text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[#053774]">
                Booking Request
              </h2>

              <h2 className="font-normal text-[14px] leading-[150%] tracking-[0%] font-pangea text-[#808080]">
                Jane Smith submitted a booking request.
              </h2>
            </div>
            <button className="text-[18px] font-normal underline text-[#4099FF] cursor-pointer">
              View Details
            </button>
          </div>
          <div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="ghost" className="text-red-600 w-full sm:w-auto">
                Decline
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                Accept
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRequest;
