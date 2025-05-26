import { AssistantDashboard } from "@/components/home/BillingCard/AssistantDashboard";
import { AssistantBillingHistory } from "@/components/home/PaymentHistory/AssistantBillingHistory";
import { UserBillingHistory } from "@/components/home/PaymentHistory/UserBillingHistory";
import { UserDashboard } from "@/components/home/BillingCard/UserDashboard";
import Wrapper from "@/components/shared/Wrapper";
import WrapperDashboard from "@/components/shared/WrapperDashboard";
import AssistantInfo from "@/components/shared/UserBooking/AssistantInfo";
import TaskInfo from "@/components/shared/UserBooking/TaskInfo";
import TaskInformationUse from "@/components/shared/UserBooking/TaskInformationUse";
import UpcomingCard from "@/components/shared/UpcomingCard/UpcomingCard";
import Review from "@/components/home/Review";

const Reuserable = () => {
  return (
    <div>
      <Wrapper>
        <Review />
      </Wrapper>
      <WrapperDashboard>
        <div className="space-y-8">
          <UpcomingCard />
          <AssistantInfo />
          <TaskInfo />
          <TaskInformationUse />
          <UserDashboard />
          <UserBillingHistory />
          <AssistantDashboard />
          <AssistantBillingHistory />
        </div>
      </WrapperDashboard>
    </div>
  );
};

export default Reuserable;
