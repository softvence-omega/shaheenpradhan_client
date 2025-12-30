import BookingRequestTask from "@/components/assistant/MyTask/BookingRequestTask";
import TaskOverview from "@/components/user/Shared/TaskOverview";

const TaskBookingRequest = () => {
  return (
    <div>
      <div className="space-y-8 min-h-screen">
        <BookingRequestTask />
        <TaskOverview />
      </div>
    </div>
  );
};

export default TaskBookingRequest;
