import CompletedCard from "@/components/assistant/MyTask/TaskCardComponent/CompletedCard";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";

const CardCompletedPage = () => {
  return (
    <div>
      <div>
        <TitleAndSubTitle title="Completed Tasks" subTitle="" />
      </div>
      <div>
        <CompletedCard />
      </div>
    </div>
  );
};

export default CardCompletedPage;
