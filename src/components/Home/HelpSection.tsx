import Wrapper from "@/components/shared/Wrapper";
import BGImage from "@/assets/images/helpSection.png";
import { Button } from "@/components/ui/button";
const HelpSection = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BGImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[500px] mt-20"
    >
      <Wrapper>
        <div className="h-[500px] flex justify-center items-center">
          <div className="sm:w-[60%] w-full mx-auto flex flex-col items-center text-center gap-4">
            <h1 className="text-[40px] sm:text-5xl leading-[120%] font-semibold text-white">
              Looking for a force multiplier or want to become one? Adminity is
              here to help
            </h1>
            <p className="text-sm sm:text-[20px] leading-[120%] font-light text-border">
              Join a growing network of professionals using Adminity to connect,
              collaborate, and succeed with confidence.
            </p>
            <Button className="min-w-[143px] h-[46px] px-6 py-[14px] text-[16px] sm:text-[18px] font-medium bg-white hover:bg-white cursor-pointer text-BorderHighlight rounded-[8px]">
              Get Started
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HelpSection;
