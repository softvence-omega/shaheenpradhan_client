import { AssistantDashboard } from "@/components/home/BillingCard/AssistantDashboard";
import { AssistantBillingHistory } from "@/components/home/PaymentHistory/AssistantBillingHistory";
import { UserBillingHistory } from "@/components/home/PaymentHistory/UserBillingHistory";
import Review from "@/components/home/Review";
import { UserDashboard } from "@/components/home/BillingCard/UserDashboard";
import Wrapper from "@/components/shared/Wrapper";

const Reuserable = () => {
  return (
    <Wrapper>
      <Review />
      <UserDashboard />
      <UserBillingHistory />
      <AssistantDashboard />
      <AssistantBillingHistory />
    </Wrapper>
  );
};

export default Reuserable;
