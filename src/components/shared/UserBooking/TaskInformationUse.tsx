import assistphoto from "@/assets/images/taskphoto.png";
import TaskInformation from "./TaskInformation";

const TaskInformationUse = () => {
  return (
    <TaskInformation
      assistantPhoto={assistphoto}
      assistantName="Jessamine Mumtaz"
      assistantRole="Event Specialist"
      status="Upcoming" // Change this to "Completed" to test review display
      bookingId="12345678"
      totalPrice={2360}
      location="Dubai, UAE"
      timeLeft="3 hours 45 minutes"
      startDate="May 27, 2025"
      endDate="June 15, 2025"
      startTime="05:30 PM"
      endTime="05:30 PM"
      reviews={[
        {
          id: "1",
          rating: 5,
        },
      ]}
    />
  );
};

export default TaskInformationUse;
