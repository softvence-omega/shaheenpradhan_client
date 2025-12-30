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
            subTitle="Find your assistant with advanced filters"
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
                <X className="w-4 h-4 text-TextSecondary" />
              </div>

              <div className="flex items-center justify-between">
                {activeTag && (
                  <div className="bg-[#E6DDF8] inline-flex py-2 px-4 items-center gap-2 rounded">
                    <p className="text-sm sm:text-[15px] font-normal text-TextSecondary">
                      {activeTag}
                    </p>
                    <X
                      className="w-4 h-4 text-TextSecondary cursor-pointer"
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
            {filteredAssistants.length > 0 ? (
              <BookingCard assistants={filteredAssistants} />
            ) : (
              <div className="w-full py-20 text-center text-gray-600">
                <h2 className="text-xl sm:text-2xl font-semibold">
                  No assistants available
                </h2>
                <p className="mt-2 text-sm sm:text-base">
                  We couldn’t find any assistants matching your selected filters. 
                  Try adjusting your search criteria.
                </p>
              </div>
            )}
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
        const matchesTitle = assistant.title.toLowerCase().includes(searchLower);
        const matchesIndustry = assistant.industry?.toLowerCase().includes(searchLower);
        const matchesSkills = assistant.skills.some((skill) =>
          skill.toLowerCase().includes(searchLower)
        );
        if (!matchesName && !matchesRole && !matchesTitle && !matchesIndustry && !matchesSkills) return false;
      }

      // Location filter
      if (filters.location && assistant.location !== filters.location) {
        return false;
      }

      // Skills filter (all selected)
      if (filters.skills.length > 0) {
        const hasAllSkills = filters.skills.every((skill) =>
          assistant.skills.map((s) => s.toLowerCase()).includes(skill.toLowerCase())
        );
        if (!hasAllSkills) return false;
      }

      // Languages filter (all selected)
      if (filters.languages.length > 0) {
        const hasAllLanguages = filters.languages.every((lang) =>
          assistant.languages.map((l) => l.toLowerCase()).includes(lang.toLowerCase())
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
