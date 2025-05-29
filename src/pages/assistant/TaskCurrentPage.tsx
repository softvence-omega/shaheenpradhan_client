import BookingRequestTask from "@/components/assistant/MyTask/BookingRequestTask";
import CurrentTask from "@/components/assistant/MyTask/CurrentTask";
import TaskOverview from "@/components/user/Shared/TaskOverview";

const TaskCurrentPage = () => {
  return (
    <div>
      <div className="space-y-8 mt-[25px]">
        <CurrentTask />
        <TaskOverview />
      </div>
    </div>
  );
};

export default TaskCurrentPage;
