import Education from "@/components/profile/Education";
import Experience from "@/components/profile/Experience";
import Expertise from "@/components/profile/Expertise";
import Summary from "@/components/profile/Summary";
import ProfileCard from "@/components/shared/ProfileCard";
import Wrapper from "@/components/shared/Wrapper";

const Profile = () => {
  return (
    <Wrapper>
      {/* MAIN DIV */}
      <div className="flex flex-col md:flex-row gap-5 lg:gap-10 mt-5">
        {/* PROFILE SIDEBAR */}
        <div className="sticky">
          <ProfileCard />
        </div>
        {/* EXPERIENCE AND OTHERS */}
        <div className="bg-primary-100 border-[2px] w-full border-gary-900/20  rounded-xl shadow-sm shadow-gray-50">
          <Summary />
          <div className="bg-white">
            <Expertise />
            <Experience />
            <Education />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
