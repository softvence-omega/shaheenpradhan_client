import HeaderPart from "@/components/home/HeaderPart";
import Assistants from "./Assistants";
import HeaderSecondPart from "@/components/home/HeaderSecondPart";
import Matchmaker from "./Matchmaker";
import Meet from "./Meet";
import Assistant from "./Assistant";

const HomePage = () => {
  return (
    <div>
      <HeaderPart />
      <div className="bg-gradient-to-b from-">
        <HeaderSecondPart />
        <Assistants />
        <Matchmaker />
        <Meet />
        <Assistant />
      </div>
    </div>
  );
};

export default HomePage;

//
