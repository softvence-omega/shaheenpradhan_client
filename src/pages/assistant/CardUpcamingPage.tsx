import UpcomingCard from "@/components/assistant/MyTask/TaskCardComponent/UpcomingCard";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";

const CardUpcamingPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <TitleAndSubTitle title="Upcoming Tasks" subTitle="" />
      </div>
      <div>
        <UpcomingCard />
      </div>
      <p>No other Upcoming Task</p>
    </div>
  );
};

export default CardUpcamingPage;
