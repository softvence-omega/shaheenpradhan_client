// components/shared/Filter/Sort.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortProps {
  value: string;
  onChange: (value: string) => void;
}

const Sort = ({ value, onChange }: SortProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="rating-desc">Highest Rating</SelectItem>
        <SelectItem value="price-asc">Price: Low to High</SelectItem>
        <SelectItem value="price-desc">Price: High to Low</SelectItem>
        <SelectItem value="name-asc">Name: A to Z</SelectItem>
        <SelectItem value="name-desc">Name: Z to A</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default Sort;


// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import React from "react";

// const Sort = () => {
//   return (
//     <Select>
//       <SelectTrigger className="w-[80px] shadow-none border-none text-TextSecondary">
//         <SelectValue placeholder="Sort" />
//       </SelectTrigger>
//       <SelectContent className="translate-x-[-38%]">
//         <SelectGroup className="">
//           <SelectLabel className="">Fruits</SelectLabel>
//           <SelectItem className="text-center " value="apple">
//             Apple
//           </SelectItem>
//           <SelectItem className="text-center " value="banana">
//             Banana
//           </SelectItem>
//           <SelectItem className="text-center " value="blueberry">
//             Blueberry
//           </SelectItem>
//           <SelectItem className="text-center " value="grapes">
//             Grapes
//           </SelectItem>
//           <SelectItem className="text-center " value="pineapple">
//             Pineapple
//           </SelectItem>
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// };

// export default Sort;
