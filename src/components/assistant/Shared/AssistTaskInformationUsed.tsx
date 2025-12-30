import assistphoto from "@/assets/images/taskphoto.png";
import AssistTaskInformation from "./AssistTaskInformation";

const AssistTaskInformationUsed = () => {
  return (
    <AssistTaskInformation
      assistantPhoto={assistphoto}
      assistantName="Sarah Malik"
      assistantRole="CEO, Adminity"
      status="Currently working" // Change this to "Completed" to test review display
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

export default AssistTaskInformationUsed;
