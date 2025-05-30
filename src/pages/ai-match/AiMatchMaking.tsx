import Wrapper from "@/components/shared/Wrapper";
import Search from "@/assets/icon/AiSearchIcon.svg";
import Divider from "@/components/shared/Divider";
import ProgressDemo from "@/components/shared/ProgressBar";
import BookingCard from "@/components/shared/BookingCard";
import MatchBookingCard from "@/components/match-making/matchBookingCard";

const AiMatchMaking = () => {
  return (
    <Wrapper>
      <div>
        {/* HEADER */}
        <div className="flex flex-col items-center justify-center pt-14 pb-5">
          <img src={Search} alt="Ai-SearchIcon" className="" />
          <h1 className="text-2xl sm:text-3xl font-semibold">
            Here are your top matches!
          </h1>
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
