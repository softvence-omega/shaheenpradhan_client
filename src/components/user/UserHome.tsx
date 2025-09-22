import SmallTitle from "../shared/Title/SmallTitle";
import TitleAndSubTitle from "../shared/TitleAndSubTitle";
import { Button } from "../ui/button";
import AdminApproval from "./UserDashboard/AdminApproval";
import AssistantApproval from "./UserDashboard/AssistantApproval";
import CurrentlyWorking from "./UserDashboard/CurrentlyWorking";
import RecentActivities from "./UserDashboard/RecentActivities";
import ReviewEdit from "./UserDashboard/ReviewEdit";
import ReviewLeave from "./UserDashboard/ReviewLeave";
import UpcomingBookings from "./UserDashboard/UpcomingBookings";

const UserHome = () => {
  return (
    <div className="space-y-8 mb-10">
      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <TitleAndSubTitle title="Home" subTitle="" />

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <Button className="w-full sm:w-auto">Find & Book Assistant</Button>
          {/* <Button variant="outline" className="w-full sm:w-auto">
            View Upcoming Bookings
          </Button> */}
        </div>
      </div>

      {/* Assistant Currently Working */}
      <div>
        <div className="space-y-6">
          <SmallTitle smalltitle="Assistant Currently Working" />
          <hr className="border-b border-[#E5E5E5]" />
          <CurrentlyWorking />
          <p>No other current booking.</p>
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
        <div className="space-y-3">
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
        <div className="space-y-3">
          <SmallTitle smalltitle="Past Bookings " />
          <hr className="border-b border-[#E5E5E5]" />
        </div>
        <div className="space-y-4">
          <ReviewEdit />
          <ReviewLeave />
          <p>No other current bookings.</p>
        </div>
      </div>

      <div>
        <div className="space-y-3">
          <SmallTitle smalltitle="Recent Activities" />
          <hr className="border-b border-[#E5E5E5]" />
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default UserHome;
