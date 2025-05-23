import SubFooter from "./SubFooter";
import Wrapper from "./Wrapper";
import logo from "@/assets/icons/Logofooter.png";
import facebook from "@/assets/icons/Facebook.png";
import instagram from "@/assets/icons/Instagram.png";
import twitter from "@/assets/icons/X.png";
import linkedin from "@/assets/icons/LinkedIn.png";
import youtube from "@/assets/icons/Youtube.png";

const Footer = () => {
  return (
    <Wrapper>
      <div className="space-y-16 p-4">
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-10">
          {/* Part 1 - Address & Contact */}
          <div className="order-3 md:order-none flex flex-col justify-between gap-4">
            <div>
              <h2 className="text-[18px] font-semibold">Address</h2>
              <p className="text-[18px] font-normal leading-[27px]">
                Level 1, 12 Sample St, Sydney NSW 2000
              </p>
            </div>
            <div>
              <h2 className="text-[18px] font-semibold">Contact:</h2>
              <p className="text-[18px] font-normal">1800 123 4567</p>
              <p className="text-[18px] font-normal">info@relume.io</p>
            </div>
          </div>

          {/* Part 2 - Links */}
          <div className="order-2 md:order-none flex gap-8 space-x-8">
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-normal leading-[27px]">Link One</p>
              <p className="text-[18px] font-normal leading-[27px]">Link Two</p>
              <p className="text-[18px] font-normal leading-[27px]">
                Link Three
              </p>
              <p className="text-[18px] font-normal leading-[27px]">
                Link Four
              </p>
              <p className="text-[18px] font-normal leading-[27px]">
                Link Five
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-normal leading-[27px]">Link Six</p>
              <p className="text-[18px] font-normal leading-[27px]">
                Link Seven
              </p>
              <p className="text-[18px] font-normal leading-[27px]">
                Link Eight
              </p>
              <p className="text-[18px] font-normal leading-[27px]">
                Link Nine
              </p>
              <p className="text-[18px] font-normal leading-[27px]">Link Ten</p>
            </div>
          </div>

          {/* Part 3 - Logo & Social Media */}
          <div className="order-1 md:order-none flex flex-col justify-between gap-4">
            <img
              src={logo}
              alt="logo footer"
              height={40}
              width={157}
              className="rounded-[8px]"
            />
            <p className="text-[18px] font-normal">Follow Us on Social Media</p>
            <div className="flex gap-3">
              <a href="#">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a href="#">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a href="#">
                <img
                  src={twitter}
                  alt="Twitter"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a href="#">
                <img
                  src={linkedin}
                  alt="LinkedIn"
                  className="w-[24px] h-[24px]"
                />
              </a>
              <a href="#">
                <img
                  src={youtube}
                  alt="Youtube"
                  className="w-[24px] h-[24px]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* SubFooter stays as is */}
        <SubFooter />
      </div>
    </Wrapper>
  );
};

export default Footer;
