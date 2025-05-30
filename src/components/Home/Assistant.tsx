import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
import Male from "@/assets/images/male.png";
import Female from "@/assets/images/females.png";
import SuperPower from "@/assets/icon/SuperPower";
const Assistant = () => {
  return (
    <Wrapper>
      <div className="py-20  flex flex-col xl:flex-row  gap-16">
        <section className="space-y-5 xl:w-[60%] w-full">
          <TitleAndSubTitle
            title="Become an Adminity Assistant"
            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. "
          />
          <div className="flex items-stretch gap-5">
            <Button className="px-2 sm:p-4 py-2 s text-xs sm:text-[15px] bg-ButtonBGSecondary cursor-pointer">
              Sign Up Now
            </Button>
            <Button
              variant="outline"
              className="px-2 sm:p-4.5 py-2 text-xs sm:text-[15px] bg-none cursor-pointer"
            >
              Learn More
            </Button>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-col  items-stretch gap-5">
            <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2 ">
              <SuperPower className="" />
              <h1 className="text-sm sm:text-2xl font-semibold ">
                Join our network
              </h1>
              <p className="text-xs sm:text-[15px] font-light leading-[120%] tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare,
              </p>
            </div>
            <div className="p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
              <SuperPower className="" />
              <h1 className="text-sm sm:text-2xl font-semibold ">
                Set your own rates
              </h1>
              <p className="text-xs sm:text-[15px] font-light leading-[120%] tracking-wider">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare,
              </p>
            </div>
          </div>
        </section>
        <div className="xl:flex justify-between xl:w-[40%] w-full hidden gap-5">
          <img
            src={Male}
            alt="male"
            className="border-[2px] border-white p-1 rounded-xl xl:h-[570px]"
          />
          <img
            src={Female}
            alt="female"
            className="border-[2px] border-white p-1 rounded-xl xl:h-[570px]"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Assistant;
