import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
} from "../ui/select";
import { SelectsProps } from "./Filter/filter.type";

const Selects = ({ placeholder, Label, value }: SelectsProps) => {
  return (
    <Select>
      <SelectTrigger className="w-full py-5">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="border-[#FAF8FD] border">
        <SelectGroup>
          <SelectLabel>{Label}</SelectLabel>
          {value?.map((item: any, index) => {
            return (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Selects;
