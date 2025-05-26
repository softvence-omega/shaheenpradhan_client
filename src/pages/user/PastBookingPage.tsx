import PastBooking from "@/components/user/MyBooking/PastBooking";
import TaskOverview from "@/components/user/MyBooking/TaskOverview";
import UpcomingBooking from "@/components/user/MyBooking/UpcomingBooking";
import WrapperDashboard from "@/components/shared/WrapperDashboard";

const PastBookingPage = () => {
  return (
    <WrapperDashboard>
      <div className="space-y-8 mt-[25px]">
        <PastBooking />
        <TaskOverview />
      </div>
    </WrapperDashboard>
  );
};

export default PastBookingPage;
