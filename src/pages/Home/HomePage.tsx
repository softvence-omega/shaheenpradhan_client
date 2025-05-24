import Filtering from "@/components/shared/Filter/Filtering";
import Review from "@/components/Home/Review";
import BookingCard from "@/components/shared/BookingCard";
import ProfileCard from "@/components/shared/ProfileCard";

const HomePage = () => {
  return (
    <div>
      <Filtering />
      <BookingCard />
      <ProfileCard />
      <Review />
    </div>
  );
};

export default HomePage;
