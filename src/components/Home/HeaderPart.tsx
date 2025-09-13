import Image from "@/assets/images/headerImage.png";
import Wrapper from "../shared/Wrapper";
import { Button } from "../ui/button";
import Robot from "@/assets/icon/Robot";
import { AnimatedTooltip } from "../aceternity/animated-tooltip";
// default users
const items = [
  {
    id: 1,
    name: "Alice Johnson",
    designation: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Lee",
    designation: "Product Manager",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    designation: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "James Kim",
    designation: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: 5,
    name: "Emma Brown",
    designation: "QA Analyst",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
];

const HeaderPart = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[750px] object-cover font-DMsans brightness-100"
    >
      <Wrapper>
        <div>
          {/* HEADER TEXT SECTION */}
          <div className="lg:max-w-1/2 w-full mx-2 xl:mx-0 pt-16 sm:pt-36 space-y-8">
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-[56px] font-semibold text-white ">
                Your Executive Assistant, On Demand
              </h1>
              <p className="text-[16px] sm:text-[20px] leading-[120%] font-light text-grayWhite">
                Book vetted EAs in minutes, AI-Matched to your needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Button className="w-[269px] h-[54px] rounded-lg text-lg sm:text-[15px] md:text-[16px] font-normal leading-[120%] py-[18px] px-[32px] bg-BorderHighlight hover:bg-BorderHighlight/70 cursor-pointer">
                Find Your Force Multiplier
              </Button>

              <Button className="w-[274px] h-[54px] rounded-lg text-lg sm:text-[15px] md:text-[16px] font-normal leading-[120%] py-[18px] px-[32px] bg-ButtonBGSecondary hover:bg-ButtonBGSecondary cursor-pointer">
                Become a Force Multiplier
              </Button>
            </div>
          </div>

          {/* SECOND DIV */}
          <div className="flex flex-col lg:flex-row pt-10 justify-between gap-2 sm:gap-6 px-2  xl:px-0 w-full">
            {/* ROBOT SECTION */}
            <div className="flex flex-col w-full sm:w-auto">
              <Robot className="shadow-2xl shadow-ButtonBGPrimary rounded-full w-16 sm:w-28" />
              <p className="text-white font-semibold max-w-44 text-xs sm:text-sm mt-2">
                Adminity Anna Your AI Companion
              </p>
            </div>

            {/* AVATAR CARD */}
            <div className="w-full] sm:w-[330px] flex flex-col gap-3 backdrop-blur-xs p-6 h-fit rounded-[20px] border border-gray-50/65">
              <AnimatedTooltip items={items} />
              <p className="font-light sm:text-[14px] text-grayWhite">
                No Visa, No Sponsorship, No Hassle – Just your assistant booked
                within minutes
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeaderPart;
