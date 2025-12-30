// components/shared/Selectby.tsx
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

interface SelectbyProps {
  placeholder: string;
  value: string[];
  onChange: (value: string[]) => void;
  options: string[];
  singleSelect?: boolean;
}

const Selectby = ({
  placeholder,
  value,
  onChange,
  options,
  singleSelect = false,
}: SelectbyProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedValue: string) => {
    if (singleSelect) {
      onChange([selectedValue]);
      setOpen(false);
    } else {
      if (value.includes(selectedValue)) {
        onChange(value.filter((item) => item !== selectedValue));
      } else {
        onChange([...value, selectedValue]);
      }
    }
  };

  return (
    <div className="space-y-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div
            className={cn(
              "flex items-center justify-between w-full p-3 border rounded-md cursor-pointer text-sm",
              !value.length && "text-muted-foreground"
            )}
          >
            <span className="truncate">
              {value.length > 0 ? value.join(", ") : placeholder}
            </span>
            <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
          </div>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start">
          <Command>
            <CommandGroup className="max-h-[200px] overflow-y-auto">
              {options.map((option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={() => handleSelect(option)}
                  className="cursor-pointer"
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value.includes(option) ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Selectby;
