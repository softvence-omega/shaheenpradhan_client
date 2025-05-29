import BookingRequestTask from "@/components/assistant/MyTask/BookingRequestTask";
import CompletedTask from "@/components/assistant/MyTask/CompletedTask";
import TaskOverview from "@/components/user/Shared/TaskOverview";

const TaskCompletedPages = () => {
  return (
    <div>
      <div className="space-y-8 mt-[25px]">
        <CompletedTask />
        <TaskOverview />
      </div>
    </div>
  );
};

export default TaskCompletedPages;
