import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";
// import Male from "@/assets/images/male.png";
import Male from "@/assets/images/sucess.png";
import Female from "@/assets/images/females.png";
import SuperPower from "@/assets/icon/SuperPower";

const Assistant = () => {
  return (
    <Wrapper>
      <div className="py-12 md:py-[70px] flex flex-col xl:flex-row gap-16 ">
        {/* Mobile Content Order */}
        <div className="xl:hidden flex flex-col gap-10">
          {/* Title Section (Mobile only) */}
          <section className="space-y-5">
            <h1 className="text-2xl sm:text-[28px] md:text-[48px] leading-[120%] font-medium font-sans w-full max-[767px]:mb-3">
              Become an Adminity Assistant
            </h1>
            <p className="text-[16px] text-left sm:text-[18px] md:text-lg leading-[120%] font-light text-[#4D4D4D] sm:mt-3 w-full">
              Join a trusted network that values your skills, offers flexibility and control over your schedule, and rewards you with meaningful opportunities to advance your career-on your terms. <br />
              Step into a platform designed for top-tier assistants ready to grow, thrive, and shape the future of executive support. <br />  NDA provided as standard to protect your personal and company data and confidentiality. All Assistants are pre vetted, your security and peace of mind is paramount.
            </p>
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
              <p className="text-sm sm:text-[16px] font-light leading-[120%] tracking-wider text-justify">
                Take control of your earning potential. Whether you're looking
                to fill gaps in your schedule or build a full-time remote
                career, Adminity offers diverse opportunities to match your
                availability and financial goals.
              </p>
            </div>
          </div>

          {/* Images (Mobile only) */}
          <div className="flex w-full flex-row lg:justify-between gap-2 md:gap-5">
            <img
              src="https://plus.unsplash.com/premium_photo-1691844987971-701e141bb1f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="male"
              className="border-[2px] border-white p-1 rounded-xl sm:w-[200px] w-[150px] md:w-[230px] object-cover"
            />
            <img
              src={Female}
              alt="female"
              className="border-[2px] border-white p-1 rounded-xl sm:w-[200px] w-[150px] md:w-[230px] object-cover"
            />
          </div>

          {/* Mobile Buttons (Mobile only) */}
          <div className="flex items-stretch gap-5">
            <Button className="sm:min-w-[168px] h-[50px] px-4 py-2 text-[16px] bg-ButtonBGSecondary cursor-pointer rounded-[8px]">
              Sign Up Now
            </Button>

            <Button
              variant="outline"
              className="sm:min-w-[138px] h-[50px] px-4 py-2 text-[16px] bg-none cursor-pointer rounded-[8px]"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Desktop Layout (hidden on mobile) */}
        <div className="hidden md:flex xl:flex-row w-full justify-between items-start gap-10">
          {/* Left Content Section */}
          <section className="flex-1 flex flex-col space-y-5">
            <div className="font-DMsans space-y-2">
              <h1 className="text-2xl sm:text-[28px] md:text-[48px] leading-[120%] font-medium font-sans w-full max-[767px]:mb-3">
                Become an Adminity Assistant
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-lg leading-[120%] font-light text-[#4D4D4D] sm:mt-3 w-full">
                Join a trusted network that values your skills, offers flexibility and control over your schedule, and rewards you with meaningful opportunities to advance your career-on your terms. <br />
                Step into a platform designed for top-tier assistants ready to grow, thrive, and shape the future of executive support. <br />  NDA provided as standard to protect your personal and company data and confidentiality. All Assistants are pre vetted, your security and peace of mind is paramount.
              </p>
            </div>
            {/* <TitleAndSubTitle
              title="Become an Adminity Assistant"
              subTitle="Join a trusted network that values your skills, offers flexibility and control over your schedule, and rewards you with meaningful opportunities to advance your career—on your terms.
              Step into a platform designed for top-tier assistants ready to grow, thrive, and shape the future of executive support.NDA provided as standard to protect your personal and company data and confidentiality. All Assistants are pre vetted, your security and peace of mind is paramount. "
            /> */}

            <div className="flex flex-wrap gap-5 mt-2">
              <Button className="flex-1 md:flex-none w-full md:w-[168px] h-[50px] px-8 py-4 text-[14px] sm:text-[18px] bg-ButtonBGSecondary rounded-[8px] cursor-pointer">
                Sign Up Now
              </Button>

              <Button
                variant="outline"
                className="flex-1 md:flex-none w-full md:w-[138px] h-[50px] bg-none cursor-pointer border border-black rounded-[8px] px-8 py-4 text-[14px] sm:text-[18px] bg-transparent"
              >
                Learn More
              </Button>
            </div>

            <div className="flex flex-col md:flex-row gap-5 md:mt-[30px]">
              <div className="flex-1 p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                <SuperPower />
                <h1 className="text-sm sm:text-2xl font-semibold">Join our network</h1>
                <p className="text-xs sm:text-[15px] font-light leading-[120%] tracking-wider">
                  Become part of an exclusive network of vetted executive assistants. We connect you with high-caliber clients and provide the tools you need to manage your assignments seamlessly.
                </p>
              </div>

              <div className="flex-1 p-5 border-[1px] border-gray-900/10 rounded-md shadow-sm space-y-2">
                <SuperPower />
                <h1 className="text-sm sm:text-2xl font-semibold">Set your own rates</h1>
                <p className="text-xs sm:text-[15px] font-light leading-[120%] tracking-wider">
                  Take control of your earning potential. Whether you're looking to fill gaps in your schedule or build a full-time remote career, Adminity offers diverse opportunities to match your availability and financial goals.
                </p>
              </div>
            </div>
          </section>

          {/* Right Images Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="flex flex-row gap-8 items-start">
              <img
                src="https://plus.unsplash.com/premium_photo-1691844987971-701e141bb1f8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="male"
                className="border-[2px] border-white p-1 rounded-xl w-[200px] md:w-[300px] lg:h-[690px] object-cover object-bottom"
              />
              <img
                src={Female}
                alt="female"
                className="border-[2px] border-white p-1 rounded-xl w-[200px] md:w-[300px] lg:h-[690px] object-cover object-top"
              />
            </div>
          </div>
        </div>

      </div>
    </Wrapper>
  );
};

export default Assistant;
