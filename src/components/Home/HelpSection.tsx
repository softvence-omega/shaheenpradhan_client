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
          <div className="sm:w-[40%] w-full mx-auto flex flex-col items-center text-center gap-4">
            <h1 className="text-2xl sm:text-4xl font-semibold text-white">
              Looking for a force multiplier or want to become one? Adminity is
              here to help
            </h1>
            <p className="text-xs sm:text-sm leading-[120%] font-light text-white">
              Join a growing network of professionals using Adminity to connect,
              collaborate, and succeed with confidence.
            </p>
            <Button className="px-2 w-fit sm:p-4 py-2 text-xs sm:text-sm bg-white hover:bg-white cursor-pointer text-BorderHighlight">
              Get Started
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HelpSection;
