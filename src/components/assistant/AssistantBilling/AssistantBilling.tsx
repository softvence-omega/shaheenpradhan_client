import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import { AssistantBillingCom } from "./AssistantBillingCom";
import { AssistantBillingHistory } from "./AssistantBillingHistory";
import { Button } from "@/components/ui/button";

const AssistantBilling = () => {
  return (
    <div className="space-y-8">
      <div className="flex  items-center justify-between">
        <TitleAndSubTitle
          title="Payment Information"
          subTitle=""
        ></TitleAndSubTitle>
        <div className="space-x-4">
          <Button className="w-[191px] h-[46px] px-[24px] py-[14px] rounded-md gap-[10px] text-[18px]">
            Request Withdraw
          </Button>
        </div>
      </div>
      <div className="space-y-4">
        <AssistantBillingCom />
        <AssistantBillingHistory />
      </div>
    </div>
  );
};

export default AssistantBilling;
