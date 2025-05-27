import HeaderPart from "@/components/Home/HeaderPart";
import Assistants from "./Assistants";
import HeaderSecondPart from "@/components/Home/HeaderSecondPart";

const HomePage = () => {
  return (
    <div>
      <HeaderPart />
      <div className="bg-gradient-to-b from-">
        <HeaderSecondPart />
        <Assistants />
      </div>
    </div>
  );
};

export default HomePage;
