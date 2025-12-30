import assistphoto from "@/assets/images/taskphoto.png";
import TaskInformation from "../../shared/UserBooking/TaskInformation";
import SmallTitle from "@/components/shared/Title/SmallTitle";
import BreadCrum from "@/components/shared/BreadCrum";
import ReuseBreadCrum from "@/components/shared/Title/ReuseBreadCrum";

const Pending = () => {
  return (
    <div className="space-y-4">
      <div>
        <ReuseBreadCrum
          items={[
            { label: "Home", path: "/user" },
            { label: "Pending", path: "/user/pending" },
            { label: "12345678" },
          ]}
        />
      </div>
      <SmallTitle smalltitle="Task Information" />
      <div>
        <hr className="border-b border-[#E5E5E5]" />
      </div>
      <TaskInformation
        assistantPhoto={assistphoto}
        assistantName="Rose Hines"
        assistantRole="Event Specialist"
        status="Pending Assistant Approval" // Change this to "Completed" to test review display
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
    </div>
  );
};

export default Pending;
