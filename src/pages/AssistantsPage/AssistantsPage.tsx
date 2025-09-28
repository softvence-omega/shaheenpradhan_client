import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X, Check } from "lucide-react";
import Wrapper from "@/components/shared/Wrapper";
import Filtering from "@/components/shared/Filter/Filtering";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Love from "@/assets/icon/Love";
import Star from "@/assets/icon/Star";
import { assistantsData } from "@/components/shared/Filter/data/assistants";
import { FilterOptions } from "@/components/shared/Filter/types/assistant";

const AssistantsPage = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    searchQuery: "",
    location: "",
    skills: [],
    languages: [],
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

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    setVisibleCount(isMobile ? 6 : 9);
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
      setVisibleCount((prev) => prev + (isMobile ? 6 : 6));
      setLoading(false);
    }, 800);
  };

  // Filter Logic
  const filteredData = assistantsData.filter((item) => {
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      const matchesSearch =
        item.name.toLowerCase().includes(query) ||
        item.role.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query) ||
        (item.industry && item.industry.toLowerCase().includes(query)) ||
        item.skills.some((skill) => skill.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    if (filters.location && item.location !== filters.location) return false;

    if (filters.skills.length > 0) {
      const selectedSkill = filters.skills[0].toLowerCase();
      const hasMatchingSkill = item.skills.some(
        (itemSkill) => itemSkill.toLowerCase() === selectedSkill
      );
      if (!hasMatchingSkill) return false;
    }

    if (filters.languages.length > 0) {
      const selectedLanguage = filters.languages[0].toLowerCase();
      const hasMatchingLanguage = item.languages.some(
        (itemLang) => itemLang.toLowerCase() === selectedLanguage
      );
      if (!hasMatchingLanguage) return false;
    }

    if (filters.availability === "available" && !item.available) return false;
    if (filters.availability === "topRated" && item.rating < 4.5) return false;

    return true;
  });

  // Sort Logic
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

        <Filtering
          onFilterChange={handleFilterChange}
          activeFilters={filters}
          onClearFilters={handleClearFilters}
        />

        <div className="flex flex-col gap-5">
          {/* Info Row */}
          <div className="flex items-center justify-between px-5 xl:px-0">
            <div className="bg-[#E6DDF8] inline-flex items-center gap-2 rounded-[100px] px-3 sm:px-4 py-2">
              <p className="text-xs sm:text-sm font-light">Tag</p>
              <X className="w-4 h-4" />
            </div>
            <p className="text-xs sm:text-[15px] font-light">
              Showing {visibleData.length} of {sortedData.length}
            </p>
          </div>

          {/* BookingCard Style Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 font-DMsans">
            {visibleData.length > 0 ? (
              visibleData.map((assistant) => (
                <div
                  key={assistant.id}
                  className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10 flex flex-col h-full"
                >
                  {/* Avatar + Name + Role + Rating */}
                  <div className="flex item-center justify-between space-y-3">
                    <div className="flex sm:item-center justify-between space-x-4">
                      <div className="relative w-fit">
                        <Link to="/user/profile-summery">
                          <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
                            <AvatarImage
                              src={assistant.avatar}
                              alt={assistant.name}
                            />
                            <AvatarFallback>
                              {assistant.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </Link>

                        <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
                          <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
                          <p className="text-xs font-medium">{assistant.rating}</p>
                        </div>
                      </div>

                      <div>
                        <Link to="/user/profile-summery" className="group">
                          <h1 className="font-semibold text-[20px] transition-colors duration-300 ease-in-out hover:text-BorderHighlight relative">
                            {assistant.name}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-BorderHighlight transition-all duration-300 ease-in-out group-hover:w-full"></span>
                          </h1>
                        </Link>
                        <p className="text-sm sm:text-[16px] font-light">
                          {assistant.role}
                        </p>
                      </div>
                    </div>
                    <Love className="w-8 h-8 rounded-full p-2 bg-[#E6DDF8]" />
                  </div>

                  <h1
                    className={`${
                      assistant.available ? "text-[#16CC71]" : "text-red-500"
                    }`}
                  >
                    {assistant.available ? "Available Now" : "Not Available"}
                  </h1>

                  {/* Location */}
                  <div className="flex items-center justify-between my-4">
                    <h1 className="text-sm sm:text-[16px] font-semibold">
                      Availability :
                    </h1>
                    <p className="flex items-center text-[#8559CA] space-x-0.5">
                      <Check className="w-4 h-4 " />
                      <span className="text-xs sm:text-[15px]">
                        {assistant.remote
                          ? `Remote (${assistant.location})`
                          : assistant.location}
                      </span>
                    </p>
                  </div>

                  {/* Skills */}
                  <div className="flex items-center flex-wrap gap-3">
                    <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
                    {assistant.skills.slice(0, 3).map((skill, index) => (
                      <p
                        key={index}
                        className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light"
                      >
                        {skill}
                      </p>
                    ))}
                    {assistant.skills.length > 3 && (
                      <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
                        +{assistant.skills.length - 3}
                      </p>
                    )}
                  </div>

                  {/* Languages */}
                  <div className="flex items-center justify-between my-4">
                    <h1 className="text-sm sm:text-[16px] font-semibold">Language:</h1>
                    <p className="flex items-center gap-1">
                      {assistant.languages.map((language, index) => (
                        <span
                          key={index}
                          className="text-xs sm:text-[15px] font-light"
                        >
                          {language}
                          {index < assistant.languages.length - 1 && ","}
                        </span>
                      ))}
                    </p>
                  </div>

                  {/* Rate */}
                  <div className="flex items-center justify-between my-4">
                    <h1 className="text-sm sm:text-[16px] font-semibold">Rate:</h1>
                    <div className="flex items-center gap-2">
                      <Select>
                        <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
                          <SelectValue placeholder="USD" />
                        </SelectTrigger>
                        <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
                          <SelectGroup>
                            <SelectItem value="usd">USD</SelectItem>
                            <SelectItem value="eur">EUR</SelectItem>
                            <SelectItem value="aed">AED</SelectItem>
                            <SelectItem value="gbp">GBP</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>

                      <div className="flex items-baseline">
                        <span className="font-bold text-[20px]">{assistant.rate}</span>
                        <span className="font-medium text-[16px] text-muted-foreground ml-1">
                          /hours
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-[1px] bg-gray-900/10" />

                  {/* Buttons */}
                  <div className="mt-auto flex flex-row items-center justify-between gap-2 flex-wrap w-full pt-2 md:pt-5">
                    <Link to="/user/assistant-request-confirm">
                      <Button className="w-[156px] h-[37px] px-6 py-2 rounded-[6px] gap-[10px] text-sm font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer">
                        Request Interview
                      </Button>
                    </Link>
                    <Link to="/user/assistant-booking">
                      <Button className="text-sm font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-20 text-gray-600">
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

          {/* Load More */}
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






// multiple akbare onekgulo select kora jai 
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { X, Check } from "lucide-react";
// import Wrapper from "@/components/shared/Wrapper";
// import Filtering from "@/components/shared/Filter/Filtering";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import Love from "@/assets/icon/Love";
// import Star from "@/assets/icon/Star";
// import { assistantsData } from "@/components/shared/Filter/data/assistants";
// import { FilterOptions } from "@/components/shared/Filter/types/assistant";

// const AssistantsPage = () => {
//   const [filters, setFilters] = useState<FilterOptions>({
//     searchQuery: "",
//     location: "",
//     skills: [],
//     languages: [],
//     availability: "all",
//     sortBy: "rating-desc",
//   });

//   const [visibleCount, setVisibleCount] = useState(6);
//   const [loading, setLoading] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     setVisibleCount(isMobile ? 6 : 9);
//   }, [isMobile]);

//   const handleFilterChange = (newFilters: FilterOptions) => {
//     setFilters(newFilters);
//     setVisibleCount(isMobile ? 6 : 9); // Reset visible count when filters change
//   };

//   const handleClearFilters = () => {
//     setFilters({
//       searchQuery: "",
//       location: "",
//       skills: [],
//       languages: [],
//       availability: "all",
//       sortBy: "rating-desc",
//     });
//   };

//   const handleLoadMore = () => {
//     setLoading(true);
//     setTimeout(() => {
//       setVisibleCount((prev) => prev + (isMobile ? 6 : 6));
//       setLoading(false);
//     }, 800);
//   };

//   // Filter Logic - Fixed
//   const filteredData = assistantsData.filter((item) => {
//     // Search query filter
//     if (filters.searchQuery) {
//       const query = filters.searchQuery.toLowerCase();
//       const matchesSearch = 
//         item.name.toLowerCase().includes(query) ||
//         item.role.toLowerCase().includes(query) ||
//         item.title.toLowerCase().includes(query) ||
//         (item.industry && item.industry.toLowerCase().includes(query)) ||
//         item.skills.some(skill => skill.toLowerCase().includes(query));
      
//       if (!matchesSearch) return false;
//     }

//     // Location filter
//     if (filters.location && item.location !== filters.location) {
//       return false;
//     }

//     // Skills filter - Fixed logic
//     if (filters.skills.length > 0) {
//       const hasMatchingSkill = filters.skills.some(filterSkill => 
//         item.skills.some(itemSkill => 
//           itemSkill.toLowerCase().includes(filterSkill.toLowerCase())
//         )
//       );
//       if (!hasMatchingSkill) return false;
//     }

//     // Languages filter - Fixed logic
//     if (filters.languages.length > 0) {
//       const hasMatchingLanguage = filters.languages.some(filterLang => 
//         item.languages.some(itemLang => 
//           itemLang.toLowerCase().includes(filterLang.toLowerCase())
//         )
//       );
//       if (!hasMatchingLanguage) return false;
//     }

//     // Availability filter
//     if (filters.availability === "available" && !item.available) {
//       return false;
//     }
//     if (filters.availability === "topRated" && item.rating < 4.5) {
//       return false;
//     }

//     return true;
//   });

//   // Sort - Fixed
//   const sortedData = [...filteredData].sort((a, b) => {
//     switch (filters.sortBy) {
//       case "rating-desc":
//         return b.rating - a.rating;
//       case "rating-asc":
//         return a.rating - b.rating;
//       case "price-asc":
//         return a.rate - b.rate;
//       case "price-desc":
//         return b.rate - a.rate;
//       case "name-asc":
//         return a.name.localeCompare(b.name);
//       case "name-desc":
//         return b.name.localeCompare(a.name);
//       default:
//         return 0;
//     }
//   });

//   const visibleData = sortedData.slice(0, visibleCount);

//   return (
//     <Wrapper>
//       <div className="space-y-10 md:space-y-12 pt-12">
//         <h1 className="text-2xl sm:text-4xl font-semibold text-center">
//           Top Assistants for Your <br /> Tasks
//         </h1>

//         <Filtering
//           onFilterChange={handleFilterChange}
//           activeFilters={filters}
//           onClearFilters={handleClearFilters}
//         />

//         <div className="flex flex-col gap-5">
//           {/* Info Row */}
//           <div className="flex items-center justify-between px-5 xl:px-0">
//             <div className="bg-[#E6DDF8] inline-flex items-center gap-2 rounded-[100px] px-3 sm:px-4 py-2">
//               <p className="text-xs sm:text-sm font-light">Tag</p>
//               <X className="w-4 h-4" />
//             </div>
//             <p className="text-xs sm:text-[15px] font-light">
//               Showing {visibleData.length} of {sortedData.length}
//             </p>
//           </div>

//           {/* BookingCard Style Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 font-DMsans">
//             {visibleData.map((assistant) => (
//               <div
//                 key={assistant.id}
//                 className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10 flex flex-col h-full"
//               >
//                 <div className="flex item-center justify-between space-y-3">
//                   <div className="flex sm:item-center justify-between space-x-4">
//                     {/* Avatar + Rating */}
//                     <div className="relative w-fit">
//                       <Link to="/user/profile-summery">
//                         <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                           <AvatarImage
//                             src={assistant.avatar}
//                             alt={assistant.name}
//                           />
//                           <AvatarFallback>
//                             {assistant.name
//                               .split(" ")
//                               .map((n) => n[0])
//                               .join("")}
//                           </AvatarFallback>
//                         </Avatar>
//                       </Link>

//                       <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                         <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                         <p className="text-xs font-medium">{assistant.rating}</p>
//                       </div>
//                     </div>

//                     {/* Name + Role */}
//                     <div>
//                       <Link to="/user/profile-summery" className="group">
//                         <h1 className="font-semibold text-[20px] transition-colors duration-300 ease-in-out hover:text-BorderHighlight relative">
//                           {assistant.name}
//                           <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-BorderHighlight transition-all duration-300 ease-in-out group-hover:w-full"></span>
//                         </h1>
//                       </Link>
//                       <p className="text-sm sm:text-[16px] font-light">
//                         {assistant.role}
//                       </p>
//                     </div>
//                   </div>
//                   <Love className="w-8 h-8 rounded-full p-2 bg-[#E6DDF8]" />
//                 </div>

//                 <h1
//                   className={`${
//                     assistant.available ? "text-[#16CC71]" : "text-red-500"
//                   }`}
//                 >
//                   {assistant.available ? "Available Now" : "Not Available"}
//                 </h1>

//                 {/* Location */}
//                 <div className="flex items-center justify-between my-4">
//                   <h1 className="text-sm sm:text-[16px] font-semibold">
//                     Availability :
//                   </h1>
//                   <p className="flex items-center text-[#8559CA] space-x-0.5">
//                     <Check className="w-4 h-4 " />
//                     <span className="text-xs sm:text-[15px]">
//                       {assistant.remote
//                         ? `Remote (${assistant.location})`
//                         : assistant.location}
//                     </span>
//                   </p>
//                 </div>

//                 {/* Skills */}
//                 <div className="flex items-center flex-wrap gap-3">
//                   <p className="text-xs sm:text-[15px] font-semibold">
//                     Skills :
//                   </p>
//                   {assistant.skills.slice(0, 3).map((skill, index) => (
//                     <p
//                       key={index}
//                       className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light"
//                     >
//                       {skill}
//                     </p>
//                   ))}
//                   {assistant.skills.length > 3 && (
//                     <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//                       +{assistant.skills.length - 3}
//                     </p>
//                   )}
//                 </div>

//                 {/* Languages */}
//                 <div className="flex items-center justify-between my-4">
//                   <h1 className="text-sm sm:text-[16px] font-semibold">
//                     Language:
//                   </h1>
//                   <p className="flex items-center gap-1">
//                     {assistant.languages.map((language, index) => (
//                       <span
//                         key={index}
//                         className="text-xs sm:text-[15px] font-light"
//                       >
//                         {language}
//                         {index < assistant.languages.length - 1 && ","}
//                       </span>
//                     ))}
//                   </p>
//                 </div>

//                 {/* Rate */}
//                 <div className="flex items-center justify-between my-4">
//                   <h1 className="text-sm sm:text-[16px] font-semibold">
//                     Rate:
//                   </h1>
//                   <div className="flex items-center gap-2">
//                     <Select>
//                       <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                         <SelectValue placeholder="USD" />
//                       </SelectTrigger>
//                       <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                         <SelectGroup>
//                           <SelectItem value="usd">USD</SelectItem>
//                           <SelectItem value="eur">EUR</SelectItem>
//                           <SelectItem value="aed">AED</SelectItem>
//                           <SelectItem value="gbp">GBP</SelectItem>
//                         </SelectGroup>
//                       </SelectContent>
//                     </Select>

//                     <div className="flex items-baseline">
//                       <span className="font-bold text-[20px]">
//                         {assistant.rate}
//                       </span>
//                       <span className="font-medium text-[16px] text-muted-foreground ml-1">
//                         /hours
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-full h-[1px] bg-gray-900/10" />

//                 {/* Buttons fixed at bottom */}
//                 <div className="mt-auto flex flex-row items-center justify-between gap-2 flex-wrap w-full pt-2 md:pt-5">
//                   <Link to="/user/assistant-request-confirm">
//                     <Button className="w-[156px] h-[37px] px-6 py-2 rounded-[6px] gap-[10px] text-sm font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer">
//                       Request Interview
//                     </Button>
//                   </Link>
//                   <Link to="/user/assistant-booking">
//                     <Button className="text-sm font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                       Book Now
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Load More */}
//           {visibleCount < sortedData.length && (
//             <div className="flex justify-center">
//               <Button
//                 onClick={handleLoadMore}
//                 disabled={loading}
//                 className="px-6 py-2 cursor-pointer rounded-md bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2 min-w-[120px]"
//               >
//                 {loading ? (
//                   <>
//                     <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//                     Loading...
//                   </>
//                 ) : (
//                   "See More"
//                 )}
//               </Button>
//             </div>
//           )}
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default AssistantsPage;