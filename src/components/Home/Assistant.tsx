import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import Male from "@/assets/images/male.png";
import Female from "@/assets/images/females.png";
import SuperPower from "@/assets/icon/SuperPower";

const Assistant = () => {
  return (
    <Wrapper>
      <div className="py-20 flex flex-col xl:flex-row gap-16">
        {/* Mobile Content Order */}
        <div className="xl:hidden flex flex-col gap-10">
          {/* Title Section (Mobile only) */}
          <section className="space-y-5">
            <TitleAndSubTitle
              title="Become an Adminity Assistant"
              subTitle="Leverage your secretarial assistant skills to support leading professionals and businesses. Adminity is a platform to find flexible, rewarding work, manage your schedule, and grow your career on your terms. Join our network of trusted EAs today."
            />
          </section>

          {/* Info Cards (Mobile only) */}
          <div className="flex flex-col gap-5">
            <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
              <SuperPower />
              <h1 className="text-lg sm:text-2xl font-semibold">
                Join our network
              </h1>
              <p className="text-sm sm:text-[16px] font-light leading-[120%] tracking-wider">
                Become part of an exclusive network of vetted executive
                assistants. We connect you with high-caliber clients and provide
                the tools you need to manage your assignments seamlessly.
              </p>
            </div>
            <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
              <SuperPower />
              <h1 className="text-lg sm:text-2xl font-semibold">
                Set your own rates
              </h1>
              <p className="text-sm sm:text-[16px] font-light leading-[120%] tracking-wider">
                Take control of your earning potential. Whether you're looking
                to fill gaps in your schedule or build a full-time remote
                career, Adminity offers diverse opportunities to match your
                availability and financial goals.
              </p>
            </div>
          </div>

          {/* Images (Mobile only) */}
          <div className="flex w-full flex-row justify-between gap-5">
            <img
              src={Male}
              alt="male"
              className="border-[2px] border-white p-1 rounded-xl w-[150px] sm:w-[230px] object-cover"
            />
            <img
              src={Female}
              alt="female"
              className="border-[2px] border-white p-1 rounded-xl w-[150px] sm:w-[230px] object-cover"
            />
          </div>

          {/* Mobile Buttons (Mobile only) */}
          <div className="flex items-stretch gap-5">
            <Button className="sm:min-w-[168px] h-[50px] px-6 sm:px-8 py-4 text-[18px] bg-ButtonBGSecondary cursor-pointer rounded-[8px] ">
              Sign Up Now
            </Button>

            <Button
              variant="outline"
              className="sm:min-w-[138px] h-[50px] px-6 sm:px-8 py-4 text-[18px] bg-none cursor-pointer rounded-[8px]"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Desktop Layout (hidden on mobile) */}
        <div className="hidden xl:flex flex-col xl:flex-row w-full gap-16">
          {/* Left Content Section */}
          <section className="space-y-5 xl:w-[60%]">
            <TitleAndSubTitle
              title="Become an Adminity Assistant"
              subTitle="Leverage your secretarial assistant skills to support leading professionals and businesses. Adminity is a platform to find flexible, rewarding work, manage your schedule, and grow your career on your terms. Join our network of trusted EAs today."
            />

            <div className="flex items-stretch gap-5">
              <Button className="min-w-[168px] h-[50px] px-8 py-4 text-[16px] sm:text-[18px] bg-ButtonBGSecondary  rounded-[8px] cursor-pointer ">
                Sign Up Now
              </Button>

              <Button
                variant="outline"
                className="min-w-[138px] h-[50px] px-8 py-4 bg-none cursor-pointer !border !border-black rounded-[8px] w-[138px]  md:px-8 md:py-4 text-[16px] sm:text-[18px] bg-transparent"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col xl:flex-col items-stretch gap-5">
              <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                <SuperPower />
                <h1 className="text-sm sm:text-2xl font-semibold">
                  Join our network
                </h1>
                <p className="text-xs sm:text-[15px] font-light leading-[120%] tracking-wider">
                  Become part of an exclusive network of vetted executive
                  assistants. We connect you with high-caliber clients and
                  provide the tools you need to manage your assignments
                  seamlessly.
                </p>
              </div>
              <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                <SuperPower />
                <h1 className="text-sm sm:text-2xl font-semibold">
                  Set your own rates
                </h1>
                <p className="text-xs sm:text-[15px] font-light leading-[120%] tracking-wider">
                  Take control of your earning potential. Whether you're looking
                  to fill gaps in your schedule or build a full-time remote
                  career, Adminity offers diverse opportunities to match your
                  availability and financial goals.
                </p>
              </div>
            </div>
          </section>

          {/* Right Images Section */}
          <div className="xl:w-[40%]">
            <div className="flex flex-row justify-between gap-5">
              <img
                src={Male}
                alt="male"
                className="border-[2px] border-white p-1 rounded-xl w-[200px] sm:w-[230px] xl:h-[700px] object-cover"
              />
              <img
                src={Female}
                alt="female"
                className="border-[2px] border-white p-1 rounded-xl w-[200px] sm:w-[230px] xl:h-[700px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Assistant;
