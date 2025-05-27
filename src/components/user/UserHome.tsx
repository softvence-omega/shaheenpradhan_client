import SmallTitle from "../shared/Title/SmallTitle";
import TitleAndSubTitle from "../shared/TitleAndSubTitle";
import { Button } from "../ui/button";
import AdminApproval from "./UserDashboard/AdminApproval";
import AssistantApproval from "./UserDashboard/AssistantApproval";
import CurrentlyWorking from "./UserDashboard/CurrentlyWorking";
import ReviewEdit from "./UserDashboard/ReviewEdit";
import ReviewLeave from "./UserDashboard/ReviewLeave";
import UpcomingBookings from "./UserDashboard/UpcomingBookings";

const UserHomeComponent = () => {
  return (
    <div className="space-y-8 mb-10">
      <div className="flex  items-center justify-between">
        <TitleAndSubTitle title="Home" subTitle=""></TitleAndSubTitle>
        <div className="space-x-4">
          <Button className="w-full sm:w-auto">Find & Book Assistant</Button>

          <Button variant="outline" className="w-full sm:w-auto">
            View Upcoming Bookings
          </Button>
        </div>
      </div>
      {/* Assistant Currently Working */}
      <div>
        <div className="space-y-6">
          <SmallTitle smalltitle="Assistant Currently Working" />
          <hr className="border-b border-[#E5E5E5]" />
          <CurrentlyWorking />
          <p>No other current bookings.</p>
        </div>
      </div>
      {/* Upcoming Bookings */}
      <div>
        <div className="space-y-6">
          <SmallTitle smalltitle="Upcoming Bookings" />
          <hr className="border-b border-[#E5E5E5]" />
          <UpcomingBookings />
          <p>No other current bookings.</p>
        </div>
      </div>
      {/* Pending Bookings */}
      <div className="space-y-6">
        <div>
          <SmallTitle smalltitle="Pending Bookings" />
          <hr className="border-b border-[#E5E5E5]" />
        </div>
        <div className="space-y-4">
          <AssistantApproval />
          <AdminApproval />
          <p>No other current bookings.</p>
        </div>
      </div>
      {/* Past Bookings */}
      <div className="space-y-6">
        <div>
          <SmallTitle smalltitle="Past Bookings " />
          <hr className="border-b border-[#E5E5E5]" />
        </div>
        <div className="space-y-4">
          <ReviewEdit />
          <ReviewLeave />
          <p>No other current bookings.</p>
        </div>
      </div>
    </div>
  );
};

export default UserHomeComponent;
