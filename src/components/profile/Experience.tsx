
import ExperienceCard from "../shared/ExperienceCard";
import { Button } from "../ui/button";


const Experience = () => {
  return (
    <div className="p-6 sm:py-5 px-12">
      <div className="pt-4 space-y-3">
        <p className="bg-white  text-sm sm:text-[15px] px-3 py-0.5 uppercase border-[1px] border-gary-900/80 rounded-xl w-fit">
          Experience
        </p>
        <h1 className="w-1/2 sm:w-[25%]  font-semibold text-sm sm:text-lg">
          Work History & Roles
        </h1>
      </div>
      <ExperienceCard />
      <ExperienceCard />
      <div className="flex flex-col items-center pb-8">
        <Button
          variant="outline"
          className="px-2 sm:p-4 py-2 s text-xs sm:text-[15px] cursor-pointer"
        >
          Load More
        </Button>
      </div>

     
    </div>
  );
};

export default Experience;
