import UpcomingCard from "@/components/assistant/MyTask/TaskCardComponent/UpcomingCard";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";

const CardUpcamingPage = () => {
  return (
    <div>
      <div>
        <TitleAndSubTitle title="Upcoming Tasks" subTitle="" />
      </div>
      <div>
        <UpcomingCard />
      </div>
    </div>
  );
};

export default CardUpcamingPage;
