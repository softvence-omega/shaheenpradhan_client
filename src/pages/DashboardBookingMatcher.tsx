import { useState, useEffect } from "react";
import { X, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingCardFind from "@/components/shared/BookingCardFind";
import { data } from "@/lib/matchCardData";
import Sort from "@/components/shared/Filter/Sort";

const DashboardBookingMatcher = () => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    location: "",
    skills: [] as string[],
    languages: [] as string[],
    availability: "all",
    sortBy: "rating-desc",
  });

  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setVisibleCount(isMobile ? 6 : 9);
  }, [isMobile]);

  const handleAvailabilityFilter = (value: string) => {
    setFilters((prev) => ({ ...prev, availability: value }));
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + (isMobile ? 6 : 6));
      setLoading(false);
    }, 800);
  };

  // === Filtering logic ===
  const filteredData = data.filter((item) => {
    if (
      filters.searchQuery &&
      !item.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) &&
      !item.title.toLowerCase().includes(filters.searchQuery.toLowerCase())
    ) {
      return false;
    }
    if (filters.location && item.availabilityType !== filters.location) {
      return false;
    }
    if (
      filters.skills.length > 0 &&
      !filters.skills.some((skill) =>
        item.skills.some((itemSkill) =>
          itemSkill.toLowerCase().includes(skill.toLowerCase())
        )
      )
    ) {
      return false;
    }
    if (
      filters.languages.length > 0 &&
      !filters.languages.some((lang) =>
        item.languages.some((itemLang) =>
          itemLang.toLowerCase().includes(lang.toLowerCase())
        )
      )
    ) {
      return false;
    }
    if (filters.availability === "available" && !item.available) {
      return false;
    }
    if (filters.availability === "topRated" && item.rating < 4.5) {
      return false;
    }
    return true;
  });

  // === Sort logic ===
  const sortedData = [...filteredData].sort((a, b) => {
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

  const visibleData = sortedData.slice(0, visibleCount);

  // === Check available categories ===
  const hasAvailableNow = data.some((d) => d.available);
  const hasTopRated = data.some((d) => d.rating >= 4.5);

  return (
    <div className="space-y-10 md:space-y-12">
      <h1 className="text-2xl md:text-5xl font-semibold">
        Find Your Assistant
      </h1>

      {/* Filters + Tabs + Sort */}
      <div className="flex flex-row items-center justify-between gap-4">
        {/* Filter Button (Mobile) */}
        <div>
          <Button
            size="lg"
            variant="outline"
            className="flex items-center space-x-1.5 cursor-pointer bg-transparent hover:bg-transparent shadow-none border-[1px] border-TextSecondary"
          >
            <ListFilter />
            <span>Filters</span>
          </Button>
        </div>

        {/* Tabs */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Always show View All */}
          <button
            className={`h-[38px] px-4 text-sm sm:text-[15px] rounded-[6px] border-[1px] transition-all duration-200 cursor-pointer ${filters.availability === "all"
              ? "bg-white text-black border-BorderHighlight"
              : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
              }`}
            onClick={() => handleAvailabilityFilter("all")}
          >
            View All
          </button>

          {/* Show Available Now tab if data exists */}
          {hasAvailableNow && (
            <button
              className={`h-[38px] px-4 text-sm sm:text-[15px] rounded-[6px] border-[1px] transition-all duration-200 cursor-pointer ${filters.availability === "available"
                ? "bg-white text-black border-BorderHighlight"
                : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
                }`}
              onClick={() => handleAvailabilityFilter("available")}
            >
              Available Now
            </button>
          )}

          {/* Show Top Rated tab if data exists */}
          {hasTopRated && (
            <button
              className={`h-[38px] px-4 text-sm sm:text-[15px] rounded-[6px] border-[1px] transition-all duration-200 cursor-pointer ${filters.availability === "topRated"
                ? "bg-white text-black border-BorderHighlight"
                : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
                }`}
              onClick={() => handleAvailabilityFilter("topRated")}
            >
              Top Rated
            </button>
          )}
          {hasTopRated && (
            <button
              className={`h-[38px] px-4 text-sm sm:text-[15px] rounded-[6px] border-[1px] transition-all duration-200 cursor-pointer ${filters.availability === "topRated"
                ? "bg-white text-black border-BorderHighlight"
                : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
                }`}
            >
              Category Three
            </button>
          )}
          {hasTopRated && (
            <button
              className={`h-[38px] px-4 text-sm sm:text-[15px] rounded-[6px] border-[1px] transition-all duration-200 cursor-pointer ${filters.availability === "topRated"
                ? "bg-white text-black border-BorderHighlight"
                : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
                }`}
            >
              Category Four
            </button>
          )}
        </div>

        {/* Sort */}
        <div>
          <Sort
            value={filters.sortBy}
            onChange={(value) => setFilters({ ...filters, sortBy: value })}
          />
        </div>
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-5">
        {/* Tag + Count */}
        <div className="flex items-center justify-between px-5 xl:px-0">
          <div className="bg-[#E6DDF8] inline-flex items-center gap-2 rounded-[100px] px-3 sm:px-4 py-2">
            <p className="text-xs sm:text-sm font-light">Tag</p>
            <X className="w-4 h-4" />
          </div>
          <p className="text-xs sm:text-[15px] font-light">
            Showing {visibleData.length} of {sortedData.length}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
          {visibleData?.map((item) => (
            <BookingCardFind key={item.id} item={item} />
          ))}
        </div>

        {/* See More */}
        {visibleCount < sortedData.length && (
          <div className="flex justify-center">
            <Button
              onClick={handleLoadMore}
              disabled={loading}
              className="px-6 py-2 cursor-pointer rounded-md bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2 min-w-[120px]"
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  Loading...
                </>
              ) : (
                "See More"
              )}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardBookingMatcher;
