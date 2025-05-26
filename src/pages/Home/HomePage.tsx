import Image from "@/assets/images/headerImage.png";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="font-DMsans">
      {/* IMAGE MAIN DIV */}
      <div
        style={{
          backgroundImage: `url(${Image})`,
        }}
        className="w-full h-[650px] bg-cover bg-center bg-no-repeat opacity-95 brightness-95"
      >
        <Wrapper>
          <div className="pt-20 sm:pt-24 space-y-5">
            <div className="space-y-1">
              <h1 className="font-semibold text-3xl sm:text-5xl leading-[120%] tracking-wider text-white max-w-1/2 w-full">
                Your Executive Assistant, On Demand
              </h1>
              <p className="text-gray-50 font-light text-sm sm:text-[15px] leading-[150%]">
                Book vetted EAs in minutes, AI-Matched to your needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <Button className="text-sm sm:text-[15px] font-medium p-3 sm:p-5 bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer">
                Find Your Force Multiplier
              </Button>
              <Button className="text-sm sm:text-[15px] font-medium p-3 sm:p-5 bg-ButtonBGSecondary hover:bg-ButtonBGSecondary cursor-pointer">
                Become a Force Multiplier
              </Button>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default HomePage;
