import CurrentBooking from "@/components/admin/MyBooking/CurrentBooking";
import TaskOverview from "@/components/admin/MyBooking/TaskOverview";
import SmallTitle from "@/components/shared/SmallTitle";
import WrapperDashboard from "@/components/shared/WrapperDashboard";

const CorrentBookPage = () => {
  return (
    <WrapperDashboard>
      <div className="space-y-8 mt-[25px]">
        <CurrentBooking />
        <TaskOverview />
      </div>
    </WrapperDashboard>
  );
};

export default CorrentBookPage;
