import PastBooking from "@/components/user/MyBooking/PastBooking";
import TaskOverview from "@/components/user/MyBooking/TaskOverview";

const PastBookingPage = () => {
  return (
    <div>
      <div className="space-y-8 mt-[25px]">
        <PastBooking />
        <TaskOverview />
      </div>
      <div className="space-y-8 mt-[25px]">
        <PastBooking />
        <TaskOverview />
      </div>
      <div className="space-y-8 mt-[25px]">
        <PastBooking />
        <TaskOverview />
      </div>
    </div>
  );
};

export default PastBookingPage;
