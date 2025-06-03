import HeaderPart from "@/components/home/HeaderPart";
import Assistants from "../../components/home/Assistants";
import HeaderSecondPart from "@/components/home/HeaderSecondPart";
import Matchmaker from "../../components/home/Matchmaker";
import Meet from "../../components/home/Meet";
import Assistant from "../../components/home/Assistant";
import FAQ from "../../components/home/FAQ";
import HelpSection from "../../components/home/HelpSection";
import TestimonialCarousel from "@/components/shared/Carousel";

const HomePage = () => {
  return (
    <div>
      <HeaderPart />
      <div className="">
        <HeaderSecondPart />
        <Assistants />
        <div className="bg-white">
          <Matchmaker />
          <Meet />
          <Assistant />
          <TestimonialCarousel />
        </div>
        <FAQ />
        <HelpSection/>
      </div>
    </div>
  );
};

export default HomePage;
