import { AssistantDashboard } from "@/components/home/BillingCard/AssistantDashboard";
import { AssistantBillingHistory } from "@/components/home/PaymentHistory/AssistantBillingHistory";
import { UserBillingHistory } from "@/components/home/PaymentHistory/UserBillingHistory";

import { UserDashboard } from "@/components/home/BillingCard/UserDashboard";
import Wrapper from "@/components/shared/Wrapper";
import Review from "@/components/home/Review";

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
