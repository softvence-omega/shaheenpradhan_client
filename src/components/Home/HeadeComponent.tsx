import { Button } from "../ui/button";
import { Cover } from "../aceternity/cover";

const HeadeComponent = () => {
  return (
    <div className=" min-h-screen">
      <h1>Landing Cromponent</h1>
      <Button className="">Button</Button>
      <div>
        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Build amazing websites <br /> at <Cover>warp speed</Cover>
        </h1>
      </div>
    </div>
  );
};

export default HeadeComponent;
