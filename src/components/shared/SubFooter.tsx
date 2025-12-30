import footerbg from "@/assets/images/footerbg.png";
import footerlogo2 from "@/assets/images/footerlogo2.png";

const linkClass =
  "relative text-[16px] text-black transition-colors duration-500 ease-in-out hover:text-[#B655DA] " +
  "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#B655DA] " +
  "after:transition-all after:duration-500 after:ease-in-out hover:after:w-full";

const SubFooter = () => {
  return (
    <div className="pt-0 md:pt-4">
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
      <div className="font-DMsans">
        <hr className="mt-10 h-0 w-full border border-gray-400" />

        <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-5 md:py-10 gap-4 md:gap-0 text-left">
          {/* Copyright */}
          <p className="text-black w-full md:w-auto text-[16px] text-center md:text-left">
            © 2024 All rights reserved.
          </p>

          {/* Links */}
          <div className="w-full md:w-auto flex flex-col md:flex-row justify-center md:justify-start items-center md:items-start gap-2 md:gap-5 text-sm text-black">
            {/* First row: Privacy and Terms */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center md:items-start w-full md:w-auto gap-2 sm:gap-4">
              <a href="#" className={linkClass}>
                Privacy Policy
              </a>
              <a href="#" className={linkClass}>
                Terms of Service
              </a>
            </div>

            {/* Second row: Cookies */}
            <div className="flex justify-center md:justify-start items-center md:items-start">
              <a href="#" className={linkClass}>
                Cookies Settings
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SubFooter;
