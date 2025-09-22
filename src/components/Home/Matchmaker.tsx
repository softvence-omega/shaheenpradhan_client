import Handshake from "@/assets/icon/Handshake";
import Match from "@/assets/icon/Match";
import Voice from "@/assets/icon/Voice";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Robot from "@/assets/images/RobotImage.png";
import TopArrow from "@/assets/icon/topArrow";

const Matchmaker = () => {
  return (
    <Wrapper>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 md:gap-10 pb-4 md:pb-[50px]">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-5 md:gap-16 md:w-1/2">
          <section className="space-y-5 mt-16">
            <TitleAndSubTitle
              title="Meet Your Matchmaker"
              subTitle="Our smart AI assistant helps you find the perfect Executive Assistant – faster, smarter, and fully personalized."
            />
            {/* Button only for desktop/tablet */}
            <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
              <Link to="#" className="flex items-center cursor-pointer gap-2">
                <Button variant="outline" className="cursor-pointer rounded-md">
                  Find Your Match
                </Button>
                <Button className="bg-ButtonBGSecondary cursor-pointer rounded-sm">
                  <TopArrow />
                </Button>
              </Link>
            </div>
          </section>

          <section className="space-y-3">
            <div className="flex items-center gap-3">
              <Voice className="bg-Blue/40 rounded-lg w-9 h-9" />
              <h1 className="text-lg sm:text-xl font-semibold tracking-wider">
                Tell us what you need
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Match className="bg-green-300/40 rounded-lg w-9 h-9" />
              <h1 className="text-lg sm:text-xl font-semibold tracking-wider">
                AI finds your perfect match
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Handshake className="w-10 h-10" />
              <h1 className="text-lg sm:text-xl font-semibold tracking-wider">
                Book with confidence
              </h1>
            </div>
          </section>
        </div>

        {/* ROBOT IMAGE + BUTTON FOR MOBILE */}
        <div className="flex flex-col md:w-1/2 items-start md:items-end gap-4">
          <img
            src={Robot}
            alt="robot-image"
            className="w-full h-full md:w-[450px] md:h-[450px] object-contain"
          />

          {/* Button only for mobile */}
          <div className="flex sm:hidden mt-1 mb-8 gap-2">
            <Link to="#" className="flex cursor-pointer gap-2">
              <Button variant="outline" className="cursor-pointer py-4 px-6 rounded-md">
                Find Your Match
              </Button>
              <Button className="bg-ButtonBGSecondary cursor-pointer rounded-sm">
                <TopArrow />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Matchmaker;
