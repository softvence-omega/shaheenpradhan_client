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
    <Wrapper>
      <div className={cn("space-y-16 mt-20 font-DMsans", locked && "hidden")}>
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
                  className="hover:text-[#B655DA] transition-colors duration-200"
                >
                  Level 1, 12 Sample St, <br /> Sydney NSW 2000
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-[18px] font-semibold">Contact:</h2>
              <p className="text-[18px] font-normal hover:text-[#B655DA] transition-colors duration-200 cursor-pointer">
                1800 123 4567
              </p>
              <p className="text-[18px] font-normal ">
                <a
                  className="hover:text-[#B655DA] transition-colors duration-200 cursor-pointer"
                  href="info@relume.io"
                >
                  info@relume.io
                </a>
              </p>
            </div>
          </div>

          {/* Part 2 - Links */}

          {/* Part 2 - Links */}
          <div className="order-2 md:order-none flex gap-8 space-x-8">
            <div className="flex flex-col gap-2">
              <a
                href="/about"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                About Adminity
              </a>
              <a
                href="/contact"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                Contact Us
              </a>
              <a
                href="/pricing"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                Pricing Plans
              </a>
              <a
                href="/services"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                AI Services
              </a>
              <a
                href="/get-started"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                Get Started
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="/faq"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                FAQ
              </a>
              <a
                href="/blog"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                Blog & Updates
              </a>
              <a
                href="/security"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                Privacy & Security
              </a>
              <a
                href="/terms"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                Terms of Use
              </a>
              <a
                href="/support"
                className="text-[18px] font-normal leading-[27px] hover:text-[#B655DA]"
              >
                Help & Support
              </a>
            </div>
          </div>

          {/* Part 3 - Logo & Social Media */}
          <div className="order-1 md:order-none flex flex-col justify-between gap-4">
            <a href="">
              <img
                src={logo}
                alt="logo footer"
                height={40}
                width={157}
                className="rounded-[8px]"
              />
            </a>
            <p className="text-[18px] font-normal">Follow Us on Social Media</p>
            <div className="flex gap-3 text-black">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B655DA] transition-colors duration-200 text-[24px]"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B655DA] transition-colors duration-200 text-[24px]"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B655DA] transition-colors duration-200 text-[24px]"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B655DA] transition-colors duration-200 text-[24px]"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B655DA] transition-colors duration-200 text-[24px]"
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
  );
};

export default Footer;
