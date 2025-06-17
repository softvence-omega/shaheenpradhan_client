import BookingCard from "@/components/shared/BookingCard";
import Filtering from "@/components/shared/Filter/Filtering";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { X } from "lucide-react";
import { useState } from "react";
import { assistantsData } from "../shared/Filter/data/assistants";
import { Assistant, FilterOptions } from "../shared/Filter/types/assistant";

const Assistants = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: "",
    location: "",
    skills: [],
    languages: [],
    availability: "all",
    sortBy: "rating-desc",
  });

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const clearFilters = () => {
    setFilters({
      searchQuery: "",
      location: "",
      skills: [],
      languages: [],
      availability: "all",
      sortBy: "rating-desc",
    });
    setActiveTag(null);
  };

  const filteredAssistants = filterAssistants(assistantsData, filters);

  return (
    <div className="pt-16 min-h-screen bg-[radial-gradient(circle_at_center_top,_#B586DE_0%,_#B586DE00_40%)]">
      <Wrapper>
        <div className="space-y-8">
          <TitleAndSubTitle
            title="Top Assistants for Your Tasks"
            subTitle="Find your assistant with advance filter"
          />

          <Filtering
            onFilterChange={setFilters}
            activeFilters={filters}
            onClearFilters={clearFilters}
          />

          <div className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <div className="bg-[#E6DDF8] inline-flex py-2 px-4 items-center gap-2 rounded">
                <p className="text-sm sm:text-[15px] font-normal text-TextSecondary">
                  Tag
                </p>

                <X className="w-4 h-4 text-sm sm:text-[15px] font-medium text-TextSecondary" />
              </div>

              <div className="flex items-center justify-between">
                {activeTag && (
                  <div className="bg-[#E6DDF8] inline-flex py-2 px-4 items-center gap-2 rounded">
                    <p className="text-sm sm:text-[15px] font-normal text-TextSecondary">
                      {activeTag}
                    </p>
                    <X
                      className="w-4 h-4 text-sm sm:text-[15px] font-medium text-TextSecondary cursor-pointer"
                      onClick={() => setActiveTag(null)}
                    />
                  </div>
                )}
                <p className="text-sm sm:text-[15px] font-medium text-TextSecondary leading-[120%]">
                  Showing {filteredAssistants.length} of {assistantsData.length}
                </p>
              </div>
            </div>

            {/* CARDS */}
            <BookingCard assistants={filteredAssistants} />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

function filterAssistants(
  assistants: Assistant[],
  filters: FilterOptions
): Assistant[] {
  return assistants
    .filter((assistant) => {
      // Search filter
      if (filters.searchQuery) {
        const searchLower = filters.searchQuery.toLowerCase();
        const matchesName = assistant.name.toLowerCase().includes(searchLower);
        const matchesRole = assistant.role.toLowerCase().includes(searchLower);
        const matchesSkills = assistant.skills.some((skill) =>
          skill.toLowerCase().includes(searchLower)
        );
        if (!matchesName && !matchesRole && !matchesSkills) return false;
      }

      // Location filter
      if (filters.location && assistant.location !== filters.location) {
        return false;
      }

      // Skills filter
      if (filters.skills.length > 0) {
        const hasAllSkills = filters.skills.every((skill) =>
          assistant.skills.includes(skill)
        );
        if (!hasAllSkills) return false;
      }

      // Languages filter
      if (filters.languages.length > 0) {
        const hasAllLanguages = filters.languages.every((language) =>
          assistant.languages.includes(language)
        );
        if (!hasAllLanguages) return false;
      }

      // Availability filter
      if (filters.availability === "available" && !assistant.available) {
        return false;
      }
      if (filters.availability === "topRated" && assistant.rating < 4.5) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Sorting logic
      switch (filters.sortBy) {
        case "rating-desc":
          return b.rating - a.rating;
        case "price-asc":
          return a.rate - b.rate;
        case "price-desc":
          return b.rate - a.rate;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });
}

export default Assistants;

// import BookingCard from "@/components/shared/BookingCard";
// import Filtering from "@/components/shared/Filter/Filtering";
// import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
// import Wrapper from "@/components/shared/Wrapper";
// import { X } from "lucide-react";

// const Assistants = () => {
//   return (
//     <div className="pt-16">
//       <Wrapper>
//         <div className="space-y-8">
//           <TitleAndSubTitle
//             title="Top Assistants for Your Tasks"
//             subTitle="Find your assistant with advance filter"
//           />
//           <Filtering />
//           <div className="flex flex-col gap-5">
//             <div className="flex items-center justify-between">
//               <div className="bg-pink-200 inline-flex py-2 px-4 items-center gap-2 rounded">
//                 <p className="text-sm sm:text-[15px] font-normal text-TextSecondary">Tag</p>
//                 <X className="w-4 h-4 text-sm sm:text-[15px] font-medium text-TextSecondary" />
//               </div>
//               <p className="text-sm sm:text-[15px] font-medium text-TextSecondary leading-[120%]">
//                 Showing 0 of 100
//               </p>
//             </div>
//             {/* CARDS */}
//             <BookingCard />
//           </div>
//         </div>
//       </Wrapper>{" "}
//     </div>
//   );
// };

// export default Assistants;
