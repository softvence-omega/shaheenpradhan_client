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
  singleSelect = true,
}: SelectsProps) => {
  const handleValueChange = (newValue: string) => {
    if (singleSelect) {
      // For single select, always replace with the new selection
      onChange([newValue]);
    } else {
      // For multi-select (not used in your case)
      const newValues = value.includes(newValue)
        ? value.filter((item) => item !== newValue)
        : [...value, newValue];
      onChange(newValues);
    }
  };

  const displayValue = value[0] || "";

  return (
    <div className="space-y-2">
      <Select 
        value={displayValue} 
        onValueChange={handleValueChange}
      >
        <SelectTrigger className="w-full py-5 text-sm">
          <SelectValue placeholder={placeholder}>
            {displayValue || placeholder}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={option}
              value={option}
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






// multiple aktadik select kora jai 
// // components/shared/Select.tsx
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Check } from "lucide-react";

// interface SelectsProps {
//   placeholder: string;
//   value: string[];
//   onChange: (value: string[]) => void;
//   options: string[];
//   singleSelect?: boolean;
// }

// const Selects = ({
//   placeholder,
//   value,
//   onChange,
//   options,
//   singleSelect = false,
// }: SelectsProps) => {
//   const handleValueChange = (selectedValue: string) => {
//     if (singleSelect) {
//       onChange([selectedValue]);
//     } else {
//       // For multi-select, toggle the selected value
//       const newValue = value.includes(selectedValue)
//         ? value.filter((item) => item !== selectedValue)
//         : [...value, selectedValue];
//       onChange(newValue);
//     }
//   };

//   const displayValue = singleSelect 
//     ? value[0] || ""
//     : value.length > 0 
//       ? `${value.length} selected` 
//       : "";

//   return (
//     <div className="space-y-2">
//       <Select onValueChange={handleValueChange} value={singleSelect ? displayValue : undefined}>
//         <SelectTrigger className="w-full py-5 text-sm">
//           <SelectValue placeholder={placeholder}>
//             {displayValue || placeholder}
//           </SelectValue>
//         </SelectTrigger>
//         <SelectContent>
//           {options.map((option) => (
//             <SelectItem
//               key={option}
//               value={option}
//               className="flex items-center justify-between"
//             >
//               <span>{option}</span>
//               {value.includes(option) && <Check className="w-4 h-4 ml-2" />}
//             </SelectItem>
//           ))}
//         </SelectContent>
//       </Select>
//     </div>
//   );
// };

// export default Selects;