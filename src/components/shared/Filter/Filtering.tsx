// components/shared/Filter/Filtering.tsx
import { Button } from "../../ui/button";
import { ListFilter, Search, X } from "lucide-react";
import Sort from "./Sort";
import Selection from "./Selection";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FilterOptions } from "./types/assistant";

interface FilteringProps {
  onFilterChange: (filters: FilterOptions) => void;
  activeFilters: FilterOptions;
  onClearFilters: () => void;
}

const Filtering = ({
  onFilterChange,
  activeFilters,
  onClearFilters,
}: FilteringProps) => {
  const [mobileSearch, setMobileSearch] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMobileSearch(value);
    onFilterChange({ ...activeFilters, searchQuery: value });
  };

  const handleClearSearch = () => {
    setMobileSearch("");
    onFilterChange({ ...activeFilters, searchQuery: "" });
  };

  const handleAvailabilityFilter = (type: string) => {
    if (type === "all") {
      // When "View All" is clicked, clear ALL filters
      onClearFilters();
      setMobileSearch("");
    } else {
      // For other tabs, only change availability
      onFilterChange({ ...activeFilters, availability: type });
    }
  };

  return (
    <div className="font-DMsans">
      {/* FOR MOBILE DEVICE SEARCH BAR */}
      <div className="w-full space-y-2 lg:hidden block my-5">
        <div className="flex items-center justify-between space-x-3">
          <p className="text-sm font-medium">Search By Task Or Industry</p>
          {mobileSearch && (
            <button onClick={handleClearSearch}>
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <fieldset className="w-full space-y-1">
          <div className="relative w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Search className="w-5 h-5" />
            </span>
            <Input
              type="text"
              placeholder="Event Manager"
              className="w-full py-5 pl-10 text-sm bg-white rounded-md focus:outline-none"
              value={mobileSearch}
              onChange={handleSearchChange}
            />
          </div>
        </fieldset>
      </div>

      {/* FILTERING SECTION */}
      <div className="flex items-center justify-between">
        {/* On mobile: Sort button on left, Filter button on right */}
        <div className="lg:hidden">
          <Sort
            value={activeFilters.sortBy}
            onChange={(value) =>
              onFilterChange({ ...activeFilters, sortBy: value })
            }
          />
        </div>

        {/* On desktop: Filter button on left */}
        <div className="hidden lg:block">
          <Button
            size="lg"
            variant="outline"
            className="flex items-center space-x-1.5 cursor-pointer bg-transparent hover:bg-transparent shadow-none border-[1px] border-TextSecondary"
          >
            <ListFilter />
            <span>Filters</span>
          </Button>
        </div>

        {/* MENU BY FILTER! */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* View All Button */}
          <button
            className={` h-[38px] px-4  gap-2 text-lg sm:text-[16px] cursor-pointer rounded-[6px] border-[1px] transition-all duration-200
      ${activeFilters.availability === "all"
                ? "bg-white text-black border-BorderHighlight"
                : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
              }`}
            onClick={() => handleAvailabilityFilter("all")}
          >
            View all
          </button>

          {/* Available Now Button */}
          <button
            className={`sm:text-sm font-medium leading-[150%] cursor-pointer text-sm sm:text-[15px] px-4 py-2 rounded-[6px] border-[1px] transition-all duration-200
      ${activeFilters.availability === "available"
                ? "bg-white text-black border-BorderHighlight"
                : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
              }`}
            onClick={() => handleAvailabilityFilter("available")}
          >
            Available Now
          </button>

          {/* Top Rated Button */}
          <button
            className={`sm:text-sm font-medium leading-[150%] cursor-pointer text-sm sm:text-[15px] px-4 py-2 rounded-[6px] border-[1px] transition-all duration-200
      ${activeFilters.availability === "topRated"
                ? "bg-white text-black border-BorderHighlight"
                : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
              }`}
            onClick={() => handleAvailabilityFilter("topRated")}
          >
            Top Rated
          </button>
        </div>

        {/* On desktop: Sort button on right */}
        <div className="hidden lg:block">
          <Sort
            value={activeFilters.sortBy}
            onChange={(value) =>
              onFilterChange({ ...activeFilters, sortBy: value })
            }
          />
        </div>

        {/* On mobile: Filter button on right */}
        <div className="lg:hidden">
          <Button
            size="lg"
            variant="outline"
            className="flex items-center space-x-1.5 cursor-pointer bg-transparent hover:bg-transparent shadow-none border-[1px] border-TextSecondary"
          >
            <ListFilter />
            <span>Filters</span>
          </Button>
        </div>
      </div>

      <Selection
        filters={activeFilters}
        onFilterChange={onFilterChange}
        onClearFilters={onClearFilters}
      />
    </div>
  );
};

export default Filtering;




// aksathe onekgulo select kora jai
// // components/shared/Filter/Filtering.tsx
// import { Button } from "../../ui/button";
// import { ListFilter, Search, X } from "lucide-react";
// import Sort from "./Sort";
// import Selection from "./Selection";
// import { Input } from "@/components/ui/input";
// import { useState } from "react";
// import { FilterOptions } from "./types/assistant";

// interface FilteringProps {
//   onFilterChange: (filters: FilterOptions) => void;
//   activeFilters: FilterOptions;
//   onClearFilters: () => void;
// }

// const Filtering = ({
//   onFilterChange,
//   activeFilters,
//   onClearFilters,
// }: FilteringProps) => {
//   const [mobileSearch, setMobileSearch] = useState("");

//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setMobileSearch(value);
//     onFilterChange({ ...activeFilters, searchQuery: value });
//   };

//   const handleClearSearch = () => {
//     setMobileSearch("");
//     onFilterChange({ ...activeFilters, searchQuery: "" });
//   };

//   const handleAvailabilityFilter = (type: string) => {
//     onFilterChange({ ...activeFilters, availability: type });
//   };

//   return (
//     <div className="font-DMsans">
//       {/* FOR MOBILE DEVICE SEARCH BAR */}
//       <div className="w-full space-y-2 lg:hidden block my-5">
//         <div className="flex items-center justify-between space-x-3">
//           <p className="text-sm font-medium">Search By Task Or Industry</p>
//           {mobileSearch && (
//             <button onClick={handleClearSearch}>
//               <X className="w-4 h-4" />
//             </button>
//           )}
//         </div>
//         <fieldset className="w-full space-y-1">
//           <div className="relative w-full">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-2">
//               <Search className="w-5 h-5" />
//             </span>
//             <Input
//               type="text"
//               placeholder="Event Manager"
//               className="w-full py-5 pl-10 text-sm bg-white rounded-md focus:outline-none"
//               value={mobileSearch}
//               onChange={handleSearchChange}
//             />
//           </div>
//         </fieldset>
//       </div>

//       {/* FILTERING SECTION */}
//       <div className="flex items-center justify-between">
//         {/* On mobile: Sort button on left, Filter button on right */}
//         <div className="lg:hidden">
//           <Sort
//             value={activeFilters.sortBy}
//             onChange={(value) =>
//               onFilterChange({ ...activeFilters, sortBy: value })
//             }
//           />
//         </div>

//         {/* On desktop: Filter button on left */}
//         <div className="hidden lg:block">
//           <Button
//             size="lg"
//             variant="outline"
//             className="flex items-center space-x-1.5 cursor-pointer bg-transparent hover:bg-transparent shadow-none border-[1px] border-TextSecondary"
//           >
//             <ListFilter />
//             <span>Filters</span>
//           </Button>
//         </div>

//         {/* MENU BY FILTER! */}
//         <div className="hidden lg:flex items-center space-x-4">
//           {/* View All Button */}
//           <button
//             className={`h-[38px] px-4 gap-2 text-lg sm:text-[16px] cursor-pointer rounded-[6px] border-[1px] transition-all duration-200
//               ${
//                 activeFilters.availability === "all"
//                   ? "bg-white text-black border-BorderHighlight"
//                   : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
//               }`}
//             onClick={() => handleAvailabilityFilter("all")}
//           >
//             View all
//           </button>

//           {/* Available Now Button */}
//           <button
//             className={`sm:text-sm font-medium leading-[150%] cursor-pointer text-sm sm:text-[15px] px-4 py-2 rounded-[6px] border-[1px] transition-all duration-200
//               ${
//                 activeFilters.availability === "available"
//                   ? "bg-white text-black border-BorderHighlight"
//                   : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
//               }`}
//             onClick={() => handleAvailabilityFilter("available")}
//           >
//             Available Now
//           </button>

//           {/* Top Rated Button */}
//           <button
//             className={`sm:text-sm font-medium leading-[150%] cursor-pointer text-sm sm:text-[15px] px-4 py-2 rounded-[6px] border-[1px] transition-all duration-200
//               ${
//                 activeFilters.availability === "topRated"
//                   ? "bg-white text-black border-BorderHighlight"
//                   : "text-black border-transparent hover:bg-white hover:border-[#B655DA]"
//               }`}
//             onClick={() => handleAvailabilityFilter("topRated")}
//           >
//             Top Rated
//           </button>
//         </div>

//         {/* On desktop: Sort button on right */}
//         <div className="hidden lg:block">
//           <Sort
//             value={activeFilters.sortBy}
//             onChange={(value) =>
//               onFilterChange({ ...activeFilters, sortBy: value })
//             }
//           />
//         </div>

//         {/* On mobile: Filter button on right */}
//         <div className="lg:hidden">
//           <Button
//             size="lg"
//             variant="outline"
//             className="flex items-center space-x-1.5 cursor-pointer bg-transparent hover:bg-transparent shadow-none border-[1px] border-TextSecondary"
//           >
//             <ListFilter />
//             <span>Filters</span>
//           </Button>
//         </div>
//       </div>

//       <Selection
//         filters={activeFilters}
//         onFilterChange={onFilterChange}
//         onClearFilters={onClearFilters}
//       />
//     </div>
//   );
// };

// export default Filtering;