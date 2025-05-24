import Filtering from "@/components/shared/Filter/Filtering";
import BookingCard from "@/components/shared/BookingCard";
import ProfileCard from "@/components/shared/ProfileCard";
import ReviewCard from "@/components/shared/ReviewCard";

const HomePage = () => {
  return (
    <div>
      <Filtering />
      <BookingCard />
      <ProfileCard />
      <ReviewCard />
    </div>
  );
};

export default HomePage;
