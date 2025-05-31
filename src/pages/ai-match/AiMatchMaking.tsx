import Wrapper from "@/components/shared/Wrapper";
import Search from "@/assets/icon/AiSearchIcon.svg";
import Divider from "@/components/shared/Divider";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import MatchBookingCard from "@/components/match-making/MatchBookingCard";

const AiMatchMaking = () => {
  return (
    <Wrapper>
      <div>
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center pt-14 pb-5 text-center">
          <img src={Search} alt="Ai-SearchIcon" className="" />
          <TitleAndSubTitle title="Here are your top matches!" />
        </div>
        <Divider />
        {/* MATCH MAKER SECTION */}
        <div className="pt-10">
          <MatchBookingCard />
        </div>
      </div>
    </Wrapper>
  );
};

export default AiMatchMaking;
