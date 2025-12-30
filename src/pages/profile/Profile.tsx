import Certifications from "@/components/profile/Certifications";
import Education from "@/components/profile/Education";
import Experience from "@/components/profile/Experience";
import Expertise from "@/components/profile/Expertise";
import Summary from "@/components/profile/Summary";
import Divider from "@/components/shared/Divider";
import ProfileCard from "@/components/shared/ProfileCard";
import profile from "@/assets/images/profile.png";
import Wrapper from "@/components/shared/Wrapper";

const Profile = () => {
  return (
    <Wrapper>
      {/* MAIN DIV */}
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-6">
        {/* PROFILE SIDEBAR */}
        <div className="sticky">
          <ProfileCard
            image={profile}
            rating={4.5}
            totalRating={150}
            name="John Doe"
            designation="Senior Developer"
            location="New York, USA"
            itsWorkingTime="9AM - 5PM"
            gender="Male"
            Availability={true}
            Experience="5 years"
            language={["English", "Spanish"]}
            hourlyPay={50}
          />
        </div>
        {/* EXPERIENCE AND OTHERS */}
        <div className="bg-primary-100 border-[2px] w-full border-gary-900/20 rounded-xl shadow-sm shadow-gray-50">
          <Summary />
          <div className="bg-white rounded-b-xl">
            <Expertise />
            <Divider />
            <Experience />
            <Divider />
            <Education />
            <Divider />
            <Certifications />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Profile;
