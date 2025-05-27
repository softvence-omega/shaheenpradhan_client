import SmallTitle from "../shared/Title/SmallTitle";
import AdminApproval from "./UserDashboard/AdminApproval";
import AssistantApproval from "./UserDashboard/AssistantApproval";
import CurrentlyWorking from "./UserDashboard/CurrentlyWorking";
import ReviewEdit from "./UserDashboard/ReviewEdit";
import ReviewLeave from "./UserDashboard/ReviewLeave";
import UpcomingBookings from "./UserDashboard/UpcomingBookings";

const UserHomeComponent = () => {
  return (
    <div className="space-y-10">
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
