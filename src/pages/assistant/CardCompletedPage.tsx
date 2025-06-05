import CompletedCard from "@/components/assistant/MyTask/TaskCardComponent/CompletedCard";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";

const CardCompletedPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <TitleAndSubTitle title="Completed Tasks" subTitle="" />
      </div>
      <div>
        <CompletedCard />
      </div>
      <p>No other current booking.</p>
    </div>
  );
};

export default CardCompletedPage;
