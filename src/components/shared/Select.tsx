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
              className={value.includes(option) ? "bg-white hover:text-black" : "hover:text-black"}
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
