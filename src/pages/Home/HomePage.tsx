
import Filtering from "@/components/shared/Filter/Filtering";
import Review from "@/components/Home/Review";
import BookingCard from "@/components/shared/BookingCard";

const HomePage = () => {
  return (
    <div>
      <Filtering />
      <BookingCard />
      <Review />
    </div>
  );
};

export default HomePage;
