import footerbg from "@/assets/images/footerbg.png";
import footerlogo2 from "@/assets/images/footerlogo2.png";

import Wrapper from "./Wrapper";

const SubFooter = () => {
  return (
    <Wrapper>
      {/* Background Section */}
      <div
        style={{
          backgroundImage: `url(${footerbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full py-10 h-[300px] md:h-[400px] lg:h-[444px]"
      >
        <div className="flex justify-center items-center h-full w-full px-4">
          <img
            src={footerlogo2}
            alt="Footer Logo"
            className="w-full max-w-[300px] md:max-w-[400px] lg:max-w-[600px] h-auto"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="">
        <hr className="mt-10 border-t-2 border-black w-full" />

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-5 gap-4 md:gap-0 text-left">
          <p className="text-black w-full md:w-auto text-[16px]">
            © 2023 All rights reserved.
          </p>

          <div className="w-full md:w-auto flex flex-col gap-2 md:flex-row md:gap-5 text-sm text-black underline">
            {/* First row on mobile: Privacy and Terms on left/right */}
            <div className="flex justify-between w-full md:w-auto space-x-4">
              <a href="#" className="text-[16px]">
                Privacy Policy
              </a>
              <a href="#" className="text-[16px]">
                Terms of Service
              </a>
            </div>
            {/* Second row on mobile: Cookies on left */}
            <div>
              <a href="#" className="text-[16px]">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubFooter;
