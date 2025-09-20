import { Calendar } from "lucide-react";
import ReviewCard from "./ReviewCard";
import { IExperienceCard } from "./ExperienceCard.type";

const ExperienceCard = ({
  // review,
  // value,
  // image,
  // name,
  // objective,
  designation,
  group,
  country,
  date,
  // task,
}: IExperienceCard) => {
  return (
    <div className="rounded-xl border-[1px] border-BorderHighlight  my-5 w-full">
      {/* TITLE SECTION */}
      <div className="flex flex-col xl:flex-row space-y-3 xl:space-y-0 items-start justify-between bg-pink-100 p-4 rounded-t-xl border-b-[1px] border-gray-900/30">
        <div>
          <h1 className="text-sm sm:text-lg font-semibold">
            {designation || "Executive Assistant"}
          </h1>
          <p className="text-xs sm:text-[15px] font-light">
            {" "}
            {group || "Emirates Group"} . {country || "Abu Dhabi"}
          </p>
        </div>
        <div className="flex items-start xl:items-center  space-x-2">
          <Calendar className="w-4 h-4" />
          <p className="text-sm sm:text-[15px] leading-[150%] font-light">
            {date || "June 2024 – December 2024"}
          </p>
        </div>
      </div>
      {/* TASK AND REVIEW SECTION HERE */}
      <div className="flex flex-col xl:flex-row justify-between py-6 px-4 space-y-3 xl:space-y-0">
        <div className="inline-flex flex-col items-start space-y-2">
          <h1 className="text-lg font-semibold leading-none">Task Overview</h1>
          <ul className="list-disc list-inside inline-block">
            <li className="text-sm sm:text-[15px] leading-[150%] font-normal text-gray-900/70 [&::marker]:text-gray-900/70 [&::marker]:text-xs ">
              Supported three directors across aviation and HR divisions
            </li>
            <li className="text-sm sm:text-[15px] leading-[150%] font-normal text-gray-900/70 [&::marker]:text-gray-900/70 [&::marker]:text-xs">
              Arranged travel to over 15 countries with 100% accuracy
            </li>
            <li className="text-sm sm:text-[15px] leading-[150%] font-normal text-gray-900/70 [&::marker]:text-gray-900/70 [&::marker]:text-xs">
              Created monthly performance dashboards using Excel & PowerPoint
            </li>
          </ul>
        </div>

        {/* DIVIDER */}
        <div className="w-[1px] h-full bg-gray-900/30" />
        {/* REVIEW SECTION */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-lg font-semibold leading-none">Review:</h1>
          <ReviewCard
            value={[
              {
                review: "Reliable and consistent. A solid choice.",
                rating: 4,
                image: "https://randomuser.me/api/portraits/men/10.jpg",
                name: "Robert Smith",
                objective: "HR Specialist",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
