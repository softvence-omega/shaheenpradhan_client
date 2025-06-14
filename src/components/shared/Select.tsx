// components/shared/Select.tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "../ui/badge";
import { X } from "lucide-react";

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
      if (value.includes(val)) {
        onChange(value.filter((item) => item !== val));
      } else {
        onChange([...value, val]);
      }
    }
  };

  const removeItem = (item: string) => {
    onChange(value.filter((i) => i !== item));
  };

  return (
    <div className="space-y-2">
      {value.length > 0 && (
        <div className="flex flex-wrap gap-1">
          {value.map((item) => (
            <Badge key={item} variant="secondary" className="px-2 py-1 text-xs">
              {item}
              <button
                type="button"
                onClick={() => removeItem(item)}
                className="ml-1"
              >
                <X className="w-3 h-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

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
