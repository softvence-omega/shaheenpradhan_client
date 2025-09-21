import Love from "@/assets/icon/Love";
import Filterings from "@/components/shared/Filter/Filterings";
import Wrapper from "@/components/shared/Wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { data } from "@/lib/matchCardData";
import { Check, Star, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AssistantsPage = () => {
  const [filters, setFilters] = useState({
    searchQuery: "",
    location: "",
    skills: [],
    languages: [],
    availability: "all",
    sortBy: "rating-desc",
  });

  const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially on mobile
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Handle window resize to detect mobile devices
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust initial visible count based on device type
  useEffect(() => {
    setVisibleCount(isMobile ? 6 : 9);
  }, [isMobile]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      searchQuery: "",
      location: "",
      skills: [],
      languages: [],
      availability: "all",
      sortBy: "rating-desc",
    });
  };

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + (isMobile ? 6 : 6)); // Load 6 more on mobile
      setLoading(false);
    }, 800);
  };

  // Filter the data
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

  // Sort the data
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

  return (
    <Wrapper>
      <div className="space-y-10 md:space-y-12 pt-12">
        <h1 className="text-2xl sm:text-4xl font-semibold text-center">
          Top Assistants for Your <br /> Tasks
        </h1>

        {/* Filter */}
        <Filterings
          onFilterChange={handleFilterChange}
          activeFilters={filters}
          onClearFilters={handleClearFilters}
        />

        {/* Booking Cards */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between px-5 xl:px-0">
            <div className="bg-[#E6DDF8] inline-flex items-center gap-2 rounded-[100px] px-3 sm:px-4 py-2">
              <p className="text-xs sm:text-sm font-light">Tag</p>
              <X className="w-4 h-4" />
            </div>

            <p className="text-xs sm:text-[15px] font-light">
              Showing {visibleData.length} of {sortedData.length}
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {visibleData?.map((item) => {
              return (
                <div
                  key={item.name}
                  className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10"
                >
                  <div className="flex item-center justify-between space-y-3">
                    <div className="flex sm:item-center justify-between space-x-4">
                      {/* Avatar */}
                      <div className="relative w-fit">
                        <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
                          <AvatarImage src={item?.avatar} alt="@shadcn" />
                          <AvatarFallback>{item?.name}</AvatarFallback>
                        </Avatar>
                        {/* Star Rating */}
                        <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
                          <Star className="w-3 h-3 text-yellow-500" />
                          <p className="text-xs font-medium">{item?.rating}</p>
                          <p className="text-xs font-medium">({item?.outOf})</p>
                        </div>
                      </div>
                      <div>
                        <h1 className="font-semibold text-sm sm:text-[15px]">
                          {item?.name}
                        </h1>
                        <p className="text-sm sm:text-[15px] font-light">
                          {item?.title}
                        </p>
                      </div>
                    </div>
                    <Love className="w-8 h-8 rounded-full p-2 bg-[#E6DDF8]" />
                  </div>

                  <h1
                    className={`font-DMsans text-[16px] ${
                      item?.available ? "text-[#16CC71]" : "text-red-500"
                    }`}
                  >
                    {item?.available ? "Available Now" : "Not Available"}
                  </h1>

                  <div className="flex items-center justify-between my-4">
                    <h1 className="text-xs sm:text-[15px] font-semibold">
                      Availability :
                    </h1>
                    <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
                      <Check className="w-4 h-4 " />
                      <span className="text-xs sm:text-[15px]">
                        {item?.availabilityType}
                      </span>
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex items-center flex-wrap gap-3">
                    <p className="text-xs sm:text-[15px] font-semibold">
                      Skills :
                    </p>
                    {item?.skills?.slice(0, 2).map((skill, index) => {
                      return (
                        <p
                          key={index}
                          className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light"
                        >
                          {skill}
                        </p>
                      );
                    })}
                  </div>

                  {/* Languages */}
                  <div className="flex items-center justify-between my-4">
                    <h1 className="text-xs sm:text-[15px] font-semibold">
                      Language:
                    </h1>
                    <p className="flex items-center gap-2">
                      {item?.languages?.map((lang, index) => {
                        return (
                          <span
                            key={index}
                            className="text-xs sm:text-[15px] font-light"
                          >
                            {lang}
                          </span>
                        );
                      })}
                    </p>
                  </div>

                  {/* Rate */}
                  <div className="flex items-center justify-between my-4">
                    <h1 className="text-xs sm:text-[15px] font-semibold">
                      Rate:
                    </h1>
                    <div className="flex items-center gap-2">
                      <Select>
                        <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10">
                          <SelectValue placeholder={item?.currency} />
                        </SelectTrigger>
                        <SelectContent className="w-[60px] text-xs border-gray-900/10">
                          <SelectGroup>
                            <SelectItem value="usd">USD</SelectItem>
                            <SelectItem value="eur">EUR</SelectItem>
                            <SelectItem value="aed">AED</SelectItem>
                            <SelectItem value="gbp">GBP</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <div className="flex items-baseline">
                        <span className="font-bold text-[20px]">
                          {item?.rate}
                        </span>
                        <span className="font-medium text-xs text-muted-foreground ml-1">
                          /hours
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-900/10" />

                  {/* Buttons */}
                  <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
                    <Link to="/user/assistant-request-confirm">
                      <Button className="w-[156px] h-[37px] text-sm font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer">
                        Request Interview
                      </Button>
                    </Link>
                    <Link to="/user/assistant-booking">
                      <Button className="text-sm font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* See More Button */}
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
    </Wrapper>
  );
};

export default AssistantsPage;