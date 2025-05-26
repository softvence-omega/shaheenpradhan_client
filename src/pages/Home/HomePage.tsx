import Filtering from "@/components/shared/Filter/Filtering";
import BookingCard from "@/components/shared/BookingCard";
import ProfileCard from "@/components/shared/ProfileCard";

const HomePage = () => {
  return (
    <div>
      <Filtering />
      <BookingCard />
      <ProfileCard />
    </div>
  );
};

export default HomePage;
