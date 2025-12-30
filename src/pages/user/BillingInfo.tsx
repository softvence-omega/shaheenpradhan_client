// import { UserBillingHistory } from "@/components/home/PaymentHistory/UserBillingHistory";
import { UserBillingHistory } from "@/components/Home/PaymentHistory/UserBillingHistory";
import DashboardContent from "@/components/user/DashboardContent";

const BillingInfo = () => {
  return (
    <div className="space-y-8">
      <DashboardContent />
      <UserBillingHistory />
    </div>
  );
};

export default BillingInfo;
