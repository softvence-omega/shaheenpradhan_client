import Education from "@/components/home/FormComponent/Education";
import ExperienceSkill from "@/components/home/FormComponent/ExperienceSkill";
import JoinAssistant from "@/components/home/FormComponent/PersonalInfo";
import WorkPreference from "@/components/home/FormComponent/WorkPreference";
import Review from "@/components/home/Review";
import WrapperDashboard from "@/components/shared/WrapperDashboard";
import PersonalInfoPage from "./PersonalInfoPage";

const Reuserable = () => {
  return (
    <div className="mt-20">
      <WrapperDashboard>
        <Education />
        <WorkPreference />

        <ExperienceSkill />
        <PersonalInfoPage />
      </WrapperDashboard>
      <Review />
    </div>
  );
};

export default Reuserable;
