import CurrentBooking from "@/components/user/MyBooking/CurrentBooking";
import TaskOverview from "@/components/user/Shared/TaskOverview";

const CorrentBookingPage = () => {
  return (
    <div>
      <div className="space-y-8 mt-[25px]">
        <CurrentBooking />
        <TaskOverview />
      </div>
    </div>
  );
};

export default CorrentBookingPage;
