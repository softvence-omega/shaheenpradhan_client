import TaskOverview from "@/components/user/MyBooking/TaskOverview";
import UpcomingBooking from "@/components/user/MyBooking/UpcomingBooking";

const UpcomingBookingPage = () => {
  return (
    <div>
      <div className="space-y-8 mt-[25px]">
        <UpcomingBooking />
        <TaskOverview />
      </div>
    </div>
  );
};

export default UpcomingBookingPage;
