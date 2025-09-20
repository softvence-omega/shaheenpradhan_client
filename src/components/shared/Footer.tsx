import SubFooter from "./SubFooter";
import Wrapper from "./Wrapper";
import logo from "@/assets/logo/main_logo.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const linkClass =
  "text-[18px] font-normal leading-[27px] text-black transition-colors duration-300 ease-in-out hover:text-[#B655DA] hover:underline";


const iconClass =
  "text-[24px] text-black transition-colors duration-500 ease-in-out hover:text-[#B655DA]";

const Footer = () => {
  const location = useLocation();
  const locked =
    location.pathname == "/signups" ||
    location.pathname == "/logins" ||
    location.pathname == "/company-yourself" ||
    location.pathname == "/personal-info" ||
    location.pathname == "/work-preferance" ||
    location?.pathname == "/experience-skill" ||
    location.pathname == "/education";

  return (
    <div className="bg-[#FAF8FD]">
      <Wrapper>
        <div
          className={cn(
            "space-y-16 mt-20 font-DMsans pb-0 sm:pb-12 md:pb-12 lg:pb-12 2xl:pb-0",
            locked && "hidden"
          )}
        >
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-10">
            {/* Part 1 - Address & Contact */}
            <div className="order-3 md:order-none flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h2 className="text-[18px] font-semibold">Address</h2>
                <p className="text-[18px] font-normal leading-[27px]">
                  <a
                    href="https://www.google.com/maps?q=Level+1,+12+Sample+St,+Sydney+NSW+2000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    Level 1, 12 Sample St, <br /> Sydney NSW 2000
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-[18px] font-semibold">Contact:</h2>
                <p className="text-[18px] font-normal cursor-pointer">
                  <a href="tel:18001234567" className={linkClass}>
                    1800 123 4567
                  </a>
                </p>
                <p className="text-[18px] font-normal">
                  <a href="mailto:info@relume.io" className={linkClass}>
                    info@relume.io
                  </a>
                </p>
              </div>
            </div>

            {/* Part 2 - Links */}
            <div className="order-2 md:order-none flex gap-8 space-x-16 sm:space-x-8">
              <div className="flex flex-col gap-2">
                <a href="/about" className={linkClass}>
                  About Adminity
                </a>
                <a href="/contact" className={linkClass}>
                  Contact Us
                </a>
                <a href="/pricing" className={linkClass}>
                  Pricing Plans
                </a>
                <a href="/services" className={linkClass}>
                  AI Services
                </a>
                <a href="/get-started" className={linkClass}>
                  Get Started
                </a>
              </div>
              <div className="flex flex-col gap-2">
                <a href="/faq" className={linkClass}>
                  FAQ
                </a>
                <a href="/blog" className={linkClass}>
                  Blog & Updates
                </a>
                <a href="/security" className={linkClass}>
                  Privacy & Security
                </a>
                <a href="/terms" className={linkClass}>
                  Terms of Use
                </a>
                <a href="/support" className={linkClass}>
                  Help & Support
                </a>
              </div>
            </div>

            {/* Part 3 - Logo & Social Media */}
            <div className="order-1 md:order-none flex flex-col justify-between gap-4">
              <a href="/">
                <img
                  src={logo}
                  alt="logo footer"
                  height={40}
                  width={157}
                  className="rounded-[8px]"
                />
              </a>
              <p className="text-[18px] font-normal">
                Follow Us on Social Media
              </p>
              <div className="flex gap-3 text-black">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconClass}
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconClass}
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconClass}
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconClass}
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={iconClass}
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          {/* SubFooter stays as is */}
          <SubFooter />
        </div>
      </Wrapper>
    </div>
  );
};

export default Footer;
