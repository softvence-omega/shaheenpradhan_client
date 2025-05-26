import CurrentBooking from "@/components/user/MyBooking/CurrentBooking";
import TaskOverview from "@/components/user/MyBooking/TaskOverview";
import WrapperDashboard from "@/components/shared/WrapperDashboard";

const CorrentBookingPage = () => {
  return (
    <WrapperDashboard>
      <div className="space-y-8 mt-[25px]">
        <CurrentBooking />
        <TaskOverview />
      </div>
    </WrapperDashboard>
  );
};

export default CorrentBookingPage;
