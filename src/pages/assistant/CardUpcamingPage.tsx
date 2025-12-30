import UpcomingCard from "@/components/assistant/MyTask/TaskCardComponent/UpcomingCard";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";

const CardUpcamingPage = () => {
  return (
    <div className="space-y-8 min-h-screen">
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
