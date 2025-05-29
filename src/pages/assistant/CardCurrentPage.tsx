import CurrentCard from "@/components/assistant/MyTask/TaskCardComponent/CurrentCard";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";

const CardCurrentPage = () => {
  return (
    <div>
      <div>
        <TitleAndSubTitle title="Current Tasks" subTitle="" />
      </div>
      <div>
        <CurrentCard />
      </div>
    </div>
  );
};

export default CardCurrentPage;
