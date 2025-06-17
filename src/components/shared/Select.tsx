// components/shared/Select.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SelectsProps {
  placeholder: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
  singleSelect?: boolean;
}

const Selects = ({
  placeholder,
  value,
  onChange,
  options,
  singleSelect = false,
}: SelectsProps) => {
  const handleValueChange = (val: string) => {
    if (singleSelect) {
      onChange([val]);
    } else {
      onChange(
        value.includes(val)
          ? value.filter((item) => item !== val)
          : [...value, val]
      );
    }
  };

  return (
    <div className="space-y-2">
      <Select onValueChange={handleValueChange} value={value[0] || ""}>
        <SelectTrigger className="w-full py-5 text-sm">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option}
              value={option}
              className={value.includes(option) ? "bg-gray-100" : ""}
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Selects;

// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectLabel,
//   SelectGroup,
//   SelectItem,
// } from "../ui/select";
// import { SelectsProps } from "./Filter/filter.type";

// const Selects = ({ placeholder, Label, value }: SelectsProps) => {
//   return (
//     <Select>
//       <SelectTrigger className="w-full py-5">
//         <SelectValue placeholder={placeholder} />
//       </SelectTrigger>
//       <SelectContent className="border-[#FAF8FD] border">
//         <SelectGroup>
//           <SelectLabel>{Label}</SelectLabel>
//           {value?.map((item: any, index) => {
//             return (
//               <SelectItem key={index} value={item}>
//                 {item}
//               </SelectItem>
//             );
//           })}
//         </SelectGroup>
//       </SelectContent>
//     </Select>
//   );
// };

// export default Selects;
