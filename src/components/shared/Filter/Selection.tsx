// components/shared/Filter/Selection.tsx
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import Selects from "../Select";
import { FilterOptions } from "./types/assistant";

interface SelectionProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
}

const Selection = ({
  filters,
  onFilterChange,
  onClearFilters,
}: SelectionProps) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchQuery: e.target.value });
  };

  const handleLocationChange = (values: string[]) => {
    onFilterChange({ ...filters, location: values[0] || "" });
  };

  const handleSkillsChange = (values: string[]) => {
    onFilterChange({ ...filters, skills: values });
  };

  const handleLanguageChange = (values: string[]) => {
    onFilterChange({ ...filters, languages: values });
  };

  const clearField = (field: keyof FilterOptions) => {
    onFilterChange({
      ...filters,
      [field]: field === "skills" || field === "languages" ? [] : "",
    });
  };

  return (
    <div className="hidden lg:flex items-center justify-between bg-white shadow-sm rounded-lg border border-slate-100 p-4 space-x-8 my-4">
      <div className="w-full max-w-[400px] space-y-2">
        <div className="flex items-center justify-between space-x-3">
          <p className="text-sm sm:text-[15px] font-normal">
            Search By Task Or Industry
          </p>
          {filters.searchQuery && (
            <button
              className="text-sm sm:text-[15px] font-normal"
              onClick={() => clearField("searchQuery")}
            >
              Clear
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
              className="max-w-96 w-full py-5 pl-10 text-sm rounded-md focus:outline-none"
              value={filters.searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </fieldset>
      </div>

      <div className="w-full max-w-[320px] space-y-2">
        <div className="flex items-center justify-between space-x-3">
          <p className="text-sm sm:text-[15px] font-normal">Location</p>
          {filters.location && (
            <button
              className="text-sm sm:text-[15px] font-normal"
              onClick={() => clearField("location")}
            >
              Clear
            </button>
          )}
        </div>
        <Selects
          placeholder="Select your location"
          value={filters.location ? [filters.location] : []}
          onChange={handleLocationChange}
          options={["Dubai", "Abu Dhabi", "Sharjah", "Riyadh", "Doha"]}
          singleSelect={true}
        />
      </div>

      <div className="w-full max-w-[320px] space-y-2">
        <div className="flex items-center justify-between space-x-3">
          <p className="text-sm sm:text-[15px] font-normal">Skills</p>
          {filters.skills.length > 0 && (
            <button
              className="text-sm sm:text-[15px] font-normal"
              onClick={() => clearField("skills")}
            >
              Clear
            </button>
          )}
        </div>
        <Selects
          placeholder="Select your skills"
          value={filters.skills}
          onChange={handleSkillsChange}
          options={[
            "UI/UX",
            "Accounting",
            "Communication",
            "Marketing",
            "Web Development",
          ]}
          singleSelect={true}
        />
      </div>

      <div className="w-full max-w-[320px] space-y-2">
        <div className="flex items-center justify-between space-x-3">
          <p className="text-sm sm:text-[15px] font-normal">Language</p>
          {filters.languages.length > 0 && (
            <button
              className="text-sm sm:text-[15px] font-normal"
              onClick={() => clearField("languages")}
            >
              Clear
            </button>
          )}
        </div>
        <Selects
          placeholder="Select a language"
          value={filters.languages}
          onChange={handleLanguageChange}
          options={["English", "Arabic", "Hindi", "Spanish", "French"]}
          singleSelect={true}
        />
      </div>
    </div>
  );
};

export default Selection;






// aksathe onekgulo select kora jai
// // components/shared/Filter/Selection.tsx
// import { Input } from "@/components/ui/input";
// import { Search, X } from "lucide-react";
// import Selects from "../Select";
// import { FilterOptions } from "./types/assistant";

// interface SelectionProps {
//   filters: FilterOptions;
//   onFilterChange: (filters: FilterOptions) => void;
//   onClearFilters: () => void;
// }

// const Selection = ({
//   filters,
//   onFilterChange,
//   onClearFilters,
// }: SelectionProps) => {
//   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     onFilterChange({ ...filters, searchQuery: e.target.value });
//   };

//   const handleLocationChange = (values: string[]) => {
//     onFilterChange({ ...filters, location: values[0] || "" });
//   };

//   const handleSkillsChange = (values: string[]) => {
//     onFilterChange({ ...filters, skills: values });
//   };

//   const handleLanguageChange = (values: string[]) => {
//     onFilterChange({ ...filters, languages: values });
//   };

//   const clearField = (field: keyof FilterOptions) => {
//     onFilterChange({
//       ...filters,
//       [field]: field === "skills" || field === "languages" ? [] : "",
//     });
//   };

//   return (
//     <div className="hidden lg:flex items-center justify-between bg-white shadow-sm rounded-lg border border-slate-100 p-4 space-x-8 my-4">
//       <div className="w-full max-w-[400px] space-y-2">
//         <div className="flex items-center justify-between space-x-3">
//           <p className="text-sm sm:text-[15px] font-normal">
//             Search By Task Or Industry
//           </p>
//           {filters.searchQuery && (
//             <button
//               className="text-sm sm:text-[15px] font-normal"
//               onClick={() => clearField("searchQuery")}
//             >
//               Clear
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
//               placeholder="Event Manager-4"
//               className="max-w-96 w-full py-5 pl-10 text-sm rounded-md focus:outline-none"
//               value={filters.searchQuery}
//               onChange={handleSearchChange}
//             />
//           </div>
//         </fieldset>
//       </div>

//       <div className="w-full max-w-[320px] space-y-2">
//         <div className="flex items-center justify-between space-x-3">
//           <p className="text-sm sm:text-[15px] font-normal">Location</p>
//           {filters.location && (
//             <button
//               className="text-sm sm:text-[15px] font-normal"
//               onClick={() => clearField("location")}
//             >
//               Clear
//             </button>
//           )}
//         </div>
//         <Selects
//           placeholder="Select your location"
//           value={filters.location ? [filters.location] : []}
//           onChange={handleLocationChange}
//           options={["Dubai", "Abu Dhabi", "Sharjah", "Riyadh", "Doha"]}
//           singleSelect
//         />
//       </div>

//       <div className="w-full max-w-[320px] space-y-2">
//         <div className="flex items-center justify-between space-x-3">
//           <p className="text-sm sm:text-[15px] font-normal">Skills</p>
//           {filters.skills.length > 0 && (
//             <button
//               className="text-sm sm:text-[15px] font-normal"
//               onClick={() => clearField("skills")}
//             >
//               Clear
//             </button>
//           )}
//         </div>
//         <Selects
//           placeholder="Select your skills"
//           value={filters.skills}
//           onChange={handleSkillsChange}
//           options={[
//             "UI/UX",
//             "Accounting",
//             "Communication",
//             "Marketing",
//             "Web Development",
//           ]}
//         />
//       </div>

//       <div className="w-full max-w-[320px] space-y-2">
//         <div className="flex items-center justify-between space-x-3">
//           <p className="text-sm sm:text-[15px] font-normal">Language</p>
//           {filters.languages.length > 0 && (
//             <button
//               className="text-sm sm:text-[15px] font-normal"
//               onClick={() => clearField("languages")}
//             >
//               Clear
//             </button>
//           )}
//         </div>
//         <Selects
//           placeholder="Select a language"
//           value={filters.languages}
//           onChange={handleLanguageChange}
//           options={["English", "Arabic", "Hindi", "Spanish", "French"]}
//         />
//       </div>
//     </div>
//   );
// };

// export default Selection;