import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Sort = () => {
  return (
    <Select>
      <SelectTrigger className="w-[80px]">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent className="w-[80px]">
        <SelectGroup className="w-[80px]">
          <SelectLabel className="w-[80px]">Fruits</SelectLabel>
          <SelectItem className="text-center w-[80px]" value="apple">
            Apple
          </SelectItem>
          <SelectItem className="text-center w-[80px]" value="banana">
            Banana
          </SelectItem>
          <SelectItem className="text-center w-[80px]" value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem className="text-center w-[80px]" value="grapes">
            Grapes
          </SelectItem>
          <SelectItem className="text-center w-[80px]" value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sort;
