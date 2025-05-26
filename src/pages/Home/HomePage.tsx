import Filtering from "@/components/shared/Filter/Filtering";
import BookingCard from "@/components/shared/BookingCard";
import ProfileCard from "@/components/shared/ProfileCard";
import ReviewCard from "@/components/shared/ReviewCard";
import ExperienceCard from "@/components/shared/ExperienceCard";

const HomePage = () => {
  return (
    <div>
      <Filtering />
      <BookingCard />
      <ProfileCard />
      <ReviewCard />
      <ExperienceCard />
    </div>
  );
};

export default HomePage;
