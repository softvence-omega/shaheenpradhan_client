import { UserBillingHistory } from "@/components/home/PaymentHistory/UserBillingHistory";
import WrapperDashboard from "@/components/shared/WrapperDashboard";
import DashboardContent from "@/components/user/DashboardContent";

const Dashboard = () => {
  return (
    <div className="space-y-8">
      <DashboardContent />
      <UserBillingHistory />
    </div>
  );
};

export default Dashboard;
