import Camera from "@/assets/icon/Camera";
import Platform from "@/assets/icon/Platform";
import SuperPower from "@/assets/icon/SuperPower";
import User from "@/assets/icon/User";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";

const Meet = () => {
  return (
    <Wrapper>
      <div className="flex flex-col xl:flex-row gap-6 w-full pt-24">
        <iframe
          className="w-full h-[350px] md:h-[550px] xl:h-[462px] rounded-lg"
          src="https://www.youtube.com/embed/UcXWY057YuQ?autoplay=1&loop=1&playlist=UcXWY057YuQ"
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>

        <div className="w-full  space-y-5">
          <TitleAndSubTitle
            style="w-full"
            title="Meet Before You Book"
            subTitle="Want to be sure it’s the right fit? Request a quick video interview with any assistant before confirming your booking."
          />
          {/* ALL CARDS */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
              <Camera className="" />
              <p className="text-xs sm:text-[15px]">
                Optional video calls to assess communication and compatibility
              </p>
            </div>
            <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
              <SuperPower className="" />
              <p className="text-xs sm:text-[15px]">
                {" "}
                Fast scheduling — typically confirmed within 24 hours
              </p>
            </div>
            <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
              <Platform className="" />
              <p className="text-xs sm:text-[15px]">
                Professional, interviews via integrated video platform
              </p>
            </div>
            <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
              <User className="" />
              <p className="text-xs sm:text-[15px]">
                Admin-approved for security and quality assurance
              </p>
            </div>
          </div>

          {/* ALL BUTTON */}
          <div className="flex items-center gap-5">
            <Button className="px-2 sm:p-4 py-2 s text-xs sm:text-[15px] bg-ButtonBGSecondary cursor-pointer">
              Request Live Interview
            </Button>
            <Button
              variant="outline"
              className="px-2 sm:p-4.5 py-2 text-xs sm:text-[15px] bg-none cursor-pointer"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Meet;
