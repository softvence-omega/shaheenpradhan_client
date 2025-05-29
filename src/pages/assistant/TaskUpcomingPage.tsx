import BookingRequestTask from "@/components/assistant/MyTask/BookingRequestTask";
import UpcomingTask from "@/components/assistant/MyTask/UpcomingTask";
import TaskOverview from "@/components/user/Shared/TaskOverview";

const TaskUpcomingPage = () => {
  return (
    <div>
      <div className="space-y-8 mt-[25px]">
        <UpcomingTask />
        <TaskOverview />
      </div>
    </div>
  );
};

export default TaskUpcomingPage;
