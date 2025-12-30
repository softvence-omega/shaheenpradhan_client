import SmallTitle from "@/components/shared/Title/SmallTitle";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import AssistantUpcoming from "./AssistantUpcoming";
import RecentActivities from "@/components/user/UserDashboard/RecentActivities";
import BookingRequest from "./BookingRequest";
import { AssistantCardComponent } from "./AssistantCardComponent";

const AssistantHome = () => {
  return (
    <div className="space-y-8 mb-10">
      <div className="flex  items-center justify-between">
        <TitleAndSubTitle title="Home" subTitle=""></TitleAndSubTitle>
      </div>
      {/* Assistant Currently Working */}
      {/* Booking Card */}
      <BookingRequest />
      {/* Card */}
      <AssistantCardComponent />

      {/* Upcoming Bookings */}
      <div>
        <div className="space-y-6">
          <SmallTitle smalltitle="Upcoming Bookings" />
          <hr className="border-b border-[#E5E5E5]" />
          <AssistantUpcoming />
          <p>No other current bookings.</p>
        </div>
      </div>
      {/* Recent Activity */}
      <div>
        <div className="space-y-2">
          <SmallTitle smalltitle="Recent Activities" />
          <hr className="border-b border-[#E5E5E5]" />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default AssistantHome;
