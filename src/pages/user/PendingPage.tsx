import Pending from "@/components/user/MyBooking/Pending";
import TaskOverview from "@/components/user/Shared/TaskOverview";

const PendingPage = () => {
  return (
    <div>
      <div className="space-y-8 mt-[25px]">
        <Pending />
        <TaskOverview />
      </div>
    </div>
  );
};

export default PendingPage;
