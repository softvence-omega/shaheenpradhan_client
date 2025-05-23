import footerbg from "@/assets/images/footerbg.png";
import footerlogo2 from "@/assets/images/footerlogo2.png";

import Wrapper from "./Wrapper";

const SubFooter = () => {
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
      <div>
        <hr className="mt-10 border-t-2 border-black w-full" />

        <div className="flex justify-between items-center py-5 ">
          <div>
            <p className="text-start text-black">
              © 2023 All rights reserved.{" "}
            </p>
          </div>
          <div className="flex gap-5">
            <a href="#">Privacy Policy</a>
            <a href="">Terms of Service </a>
            <a href="">Cookies Settings</a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SubFooter;
