import TaskOverview from "@/components/admin/MyBooking/TaskOverview";
import UpcomingBooking from "@/components/admin/MyBooking/UpcomingBooking";
import WrapperDashboard from "@/components/shared/WrapperDashboard";

const UpcomingBookingPage = () => {
  return (
    <WrapperDashboard>
      <div className="space-y-8 mt-[25px]">
        <UpcomingBooking />
        <TaskOverview />
      </div>
    </WrapperDashboard>
  );
};

export default UpcomingBookingPage;
