import TittleBig from "@/components/shared/Title/TittleBig";
import Wrapper from "@/components/shared/Wrapper";
import logo from "@/assets/logo/main_logo.png";
import ExperienceSkill from "@/components/Home/FormComponent/ExperienceSkill";
const ExperienceSkillPage = () => {
  return (
    <div className="mt-10 bg-white">
      <Wrapper>
        <img src={logo} alt="logo" />
        <div className="space-y-20 ">
          <div>
            <TittleBig bigtittle="Join the adminity Assistant network" />
          </div>
          <div>
            <ExperienceSkill />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ExperienceSkillPage;
