import CurrentCard from "@/components/assistant/MyTask/TaskCardComponent/CurrentCard";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";

const CardCurrentPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <TitleAndSubTitle title="Current Tasks" subTitle="" />
      </div>
      <div>
        <CurrentCard />
      </div>
      <p>No other current booking.</p>
    </div>
  );
};

export default CardCurrentPage;
