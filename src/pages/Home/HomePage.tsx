import Filtering from "@/components/shared/Filter/Filtering";
import Review from "@/components/Home/Review";
import BookingCard from "@/components/shared/bookingCard";
import Filtering from "@/components/shared/Filter/Filtering";

const HomePage = () => {
  return (
    <div>
      <Filtering />
      <Review />
      <BookingCard />
    </div>
  );
};

export default HomePage;
