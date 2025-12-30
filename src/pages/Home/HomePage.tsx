import Assistant from "@/components/Home/Assistant";
import Assistants from "@/components/Home/Assistants";
import CarouselCard from "@/components/Home/CaroselCard";
import FAQ from "@/components/Home/FAQ";
import HeaderPart from "@/components/Home/HeaderPart";
import HeaderSecondPart from "@/components/Home/HeaderSecondPart";
import HelpSection from "@/components/Home/HelpSection";
import Matchmaker from "@/components/Home/Matchmaker";
import Meet from "@/components/Home/Meet";
import UnlockPotential from "@/components/Home/UnlockPotential";
import { Element } from "react-scroll";
// import TestimonialCarousel from "@/components/shared/Payment/TestimonialCarousel";

const HomePage = () => {
  return (
    <div>
      <HeaderPart />
      <div className="">
        <HeaderSecondPart />
        {/* Fixed: Use 'name' prop instead of 'id' */}
        <Element name="assistants-section">
          <Assistants />
        </Element>
        <div className="bg-white">
          <Matchmaker />
          <Meet />
          <Assistant />
          <UnlockPotential />
          <div className="">
            <CarouselCard />
          </div>
          {/* <TestimonialCarousel /> */}
        </div>
        <div className="bg-bgBody">
          <FAQ />
        </div>
        <HelpSection />
      </div>
    </div>
  );
};

export default HomePage;