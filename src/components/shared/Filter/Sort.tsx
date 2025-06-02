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
      <SelectTrigger className="w-[80px] shadow-none border-none text-TextSecondary">
        <SelectValue placeholder="Sort" />
      </SelectTrigger>
      <SelectContent className="translate-x-[-38%]">
        <SelectGroup className="">
          <SelectLabel className="">Fruits</SelectLabel>
          <SelectItem className="text-center " value="apple">
            Apple
          </SelectItem>
          <SelectItem className="text-center " value="banana">
            Banana
          </SelectItem>
          <SelectItem className="text-center " value="blueberry">
            Blueberry
          </SelectItem>
          <SelectItem className="text-center " value="grapes">
            Grapes
          </SelectItem>
          <SelectItem className="text-center " value="pineapple">
            Pineapple
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sort;
