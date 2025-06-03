import Handshake from "@/assets/icon/Handshake";
import Match from "@/assets/icon/Match";
import TopArrow from "@/assets/icon/TopArrow";
import Voice from "@/assets/icon/Voice";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Robot from "@/assets/images/RobotImage.png";

const Matchmaker = () => {
  return (
    <Wrapper>
      <div className="flex flex-col sm:flex-row sm:items-center-safe justify-between">
        <div className="flex flex-col gap-5 sm:gap-16">
          <section className="space-y-5 mt-16">
            <TitleAndSubTitle
              title="Meet Your Matchmaker"
              subTitle="Our smart AI assistant helps you find the perfect Executive Assistant – faster, smarter, and fully personalized."
            />
            <div className="items-center flex-shrink-0 hidden lg:flex">
              <Link to="#" className="flex items-center cursor-pointer">
                <Button variant="outline" className="cursor-pointer rounded-md">
                  Find Your Match
                </Button>
                <Button className="bg-ButtonBGSecondary cursor-pointer rounded-sm">
                  <TopArrow />
                </Button>{" "}
              </Link>
            </div>
          </section>
          <section className="space-y-3 ">
            <div className="flex sm:items-center flex-row gap-3">
              <Voice className="bg-Blue/40 rounded-lg w-9 h-9" />
              <h1 className="text-lg sm:text-xl font-semibold tracking-wider">
                Tell us what you need
              </h1>
            </div>
            <div className="flex items-center flex-row gap-3">
              <Match className="bg-green-300/40 rounded-lg w-9 h-9" />
              <h1 className="text-lg sm:text-xl font-semibold tracking-wider">
                {" "}
                AI finds your perfect match
              </h1>
            </div>
            <div className="flex items-center flex-row gap-3 ">
              <Handshake className="w-10 h-10" />
              <h1 className="text-lg sm:text-xl font-semibold tracking-wider">
                Book with confidence{" "}
              </h1>
            </div>
          </section>
        </div>
        {/* ROBOT IMAGE */}
        <div>
          <img
            src={Robot}
            alt="robot-image"
            className="w-[330px] h-[406px]  object-contain"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Matchmaker;
