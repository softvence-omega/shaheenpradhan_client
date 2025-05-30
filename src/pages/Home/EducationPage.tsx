import Education from "@/components/home/FormComponent/Education";
import TittleBig from "@/components/shared/Title/TittleBig";
import Wrapper from "@/components/shared/Wrapper";
import logo from "@/assets/logo/main_logo.png";
const EducationPage = () => {
  return (
    <div className="mt-10 bg-white">
      <Wrapper>
        <img src={logo} alt="logo" />
        <div className="space-y-20 ">
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
