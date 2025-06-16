import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown, X } from "lucide-react";
import { useState } from "react";

interface SelectsProps {
  placeholder: string;
  options: string[];
  value: string[];
  onChange: (value: string[]) => void;
  singleSelect?: boolean;
}

const Selectby = ({
  placeholder,
  options,
  value,
  onChange,
  singleSelect = false,
}: SelectsProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (currentValue: string) => {
    if (singleSelect) {
      onChange([currentValue]);
      setOpen(false);
    } else {
      if (value.includes(currentValue)) {
        onChange(value.filter((item) => item !== currentValue));
      } else {
        onChange([...value, currentValue]);
      }
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          className={cn(
            "flex items-center justify-between w-full p-2 border rounded-md cursor-pointer",
            !value.length && "text-muted-foreground"
          )}
        >
          <div className="flex flex-wrap gap-1">
            {value.length ? (
              singleSelect ? (
                <Badge variant="secondary" className="mr-1">
                  {value[0]}
                </Badge>
              ) : (
                value.map((val) => (
                  <Badge key={val} variant="secondary" className="mr-1">
                    {val}
                    <X
                      className="w-3 h-3 ml-1 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect(val);
                      }}
                    />
                  </Badge>
                ))
              )
            ) : (
              <span>{placeholder}</span>
            )}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={placeholder} />
          <CommandEmpty>No option found.</CommandEmpty>
          <CommandGroup className="max-h-[200px] overflow-y-auto">
            {options.map((option) => (
              <CommandItem
                key={option}
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
  );
};

export default Selectby;
