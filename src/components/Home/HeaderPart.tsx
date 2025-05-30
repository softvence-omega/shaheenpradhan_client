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
          <div className="max-w-1/2 w-full mx-2 xl:mx-0 pt-16 sm:pt-36 space-y-3">
            <h1 className="text-4xl sm:text-5xl tracking-wider font-semibold text-white ">
              Your Executive Assistant, On Demand
            </h1>
            <p className="text-sm sm:text-[15px] leading-[150%] font-light text-white">
              Book vetted EAs in minutes, AI-Matched to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Button className="text-xs sm:text-sm font-light py-3 px4 bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit">
                Find Your Force Multiplier
              </Button>
              <Button className="text-xs sm:text-sm font-light py-3 px4 bg-ButtonBGSecondary hover:bg-ButtonBGSecondary cursor-pointer w-fit">
                Become a Force Multiplier
              </Button>
            </div>
          </div>

          {/* SECOND DIV */}
          <div className="flex flex-col-reverse sm:flex-row-reverse lg:flex-row pt-5 justify-between gap-2 sm:gap-6 px-2 xl:px-0 w-full">
            {/* ROBOT SECTION */}
            <div className="flex flex-col  sm:pt-12 w-full sm:w-auto ">
              <Robot className="shadow-2xl shadow-ButtonBGPrimary rounded-full w-16 sm:w-20 animate-pulse" />
              <p className="text-white font-semibold max-w-44 text-xs sm:text-sm mt-2">
                Adminity Anna Your AI Companion
              </p>
            </div>

            {/* AVATAR CARD */}
            <div className="w-[80%] sm:w-[60%] md:w-[35%] xl:w-[20%]  flex flex-col items-center text-center space-y-4 backdrop-blur-sm p-6 rounded-md border border-gray-50/65">
              <AnimatedTooltip items={items} />
              <p className="font-light text-xs sm:text-sm text-white text-center ">
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
