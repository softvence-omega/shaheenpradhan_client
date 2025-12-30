import Camera from "@/assets/icon/Camera";
import Platform from "@/assets/icon/Platform";
import SuperPower from "@/assets/icon/SuperPower";
import User from "@/assets/icon/User";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";

const Meet = () => {
  return (
    <div className="max-[767px]:bg-bgBody">
      <Wrapper>
        <div className="flex flex-col xl:flex-row gap-20 w-full py-[70px] md:pt-24">
          <iframe
            className="w-full h-[462px] md:h-[550px] lg:h-[550px] rounded-lg"
            src="https://www.youtube.com/embed/UcXWY057YuQ?loop=1&playlist=UcXWY057YuQ"
            title="YouTube video"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>

          <div className="w-full  space-y-6">
            <TitleAndSubTitle
              style="w-full"
              title="Meet Before You Book"
              subTitle="Want to be sure it’s the right fit? Request a quick video interview with any assistant before confirming your booking."
            />
            {/* ALL CARDS */}
            <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
              <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                <Camera className="" />
                <p className="text-[16px] sm:text-[18px]">
                  Optional video calls to assess communication and compatibility
                </p>
              </div>
              <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                <SuperPower className="" />
                <p className="text-[16px] sm:text-[18px]">
                  {" "}
                  Fast scheduling — typically confirmed within 24 hours
                </p>
              </div>
              <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                <Platform className="" />
                <p className="text-[16px] sm:text-[18px]">
                  Professional, interviews via integrated video platform
                </p>
              </div>
              <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                <User className="" />
                <p className="text-[16px] sm:text-[18px]">
                  Admin-approved for security and quality assurance
                </p>
              </div>
            </div>

            {/* ALL BUTTON */}
            <div className="flex md:flex-row flex-col md:items-center gap-5">
              <Button className="w-[232px] h-[50px] px-6 py-2 md:px-8 md:py-4 text-[16px] sm:text-[18px] bg-ButtonBGSecondary cursor-pointer rounded-[6px]">
                Request Live Interview
              </Button>

              <Button
                variant="outline"
                className="w-[138px] h-[50px] px-6 py-2 md:px-8 md:py-4 text-[16px] sm:text-[18px] cursor-pointer border border-black rounded-[6px] bg-transparent"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Meet;
