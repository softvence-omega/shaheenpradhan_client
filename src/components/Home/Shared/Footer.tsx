import footerbg from "@/assets/images/footerbg.png";
import footerlogo2 from "@/assets/images/footerlogo2.png";

import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper>
      <div
        style={{
          backgroundImage: `url(${footerbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full py-10 h-[526px]"
      >
        <div className="flex justify-center items-center mt-30 ">
          <img
            src={footerlogo2}
            alt="Footer Logo"
            className="w-[600px] h-[326px]"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
