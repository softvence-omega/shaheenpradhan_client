import BookingRequestCard from "@/components/assistant/MyTask/TaskCardComponent/BookingRequestCard";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";

const CardBookingRequestPage = () => {
  return (
    <div className="space-y-8 min-h-screen">
      <div>
        <TitleAndSubTitle title="Booking Requests" subTitle="" />
      </div>
      <div>
        <BookingRequestCard />
      </div>
    </div>
  );
};

export default CardBookingRequestPage;
