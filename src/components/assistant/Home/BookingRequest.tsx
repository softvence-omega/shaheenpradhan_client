import { Button } from "@/components/ui/button";

const BookingRequest = () => {
  return (
    <div className="w-full ">
      <div className="w-full bg-[#FFFBFB] border border-[#4099FF] rounded-[8px] px-5 py-6 flex flex-col gap-4 md:flex-row md:justify-between md:items-center font-DMsans">
        {/* Left Content */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <h2 className="text-base font-medium text-[#053774]">
              Booking Request
            </h2>
            <p className="text-sm text-[#808080] font-pangea">
              Jane Smith submitted a booking request.
            </p>
          </div>
          <button className="text-base underline text-[#4099FF] w-fit">
            View Details
          </button>
        </div>

        {/* Right Actions */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <Button variant="ghost" className="text-red-600 w-full sm:w-auto">
            Decline
          </Button>
          <Button variant="outline" className="w-full sm:w-auto">
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingRequest;
