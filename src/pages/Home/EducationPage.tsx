import TittleBig from "@/components/shared/Title/TittleBig";
import Wrapper from "@/components/shared/Wrapper";
import logo from "@/assets/logo/main_logo.png";
import Education from "@/components/Home/FormComponent/Education";
const EducationPage = () => {
  return (
    <div className="mt-10 bg-white">
      <Wrapper>
        <img src={logo} alt="logo" className="mt-5" />
        <div className="space-y-[80px] ">
          <div>
            <TittleBig bigtittle="Join the adminity Assistant network" />
          </div>
          <div>
            <Education />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default EducationPage;
