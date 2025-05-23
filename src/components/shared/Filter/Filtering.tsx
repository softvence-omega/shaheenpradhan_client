import { Button } from "../../ui/button";
import { ListFilter } from "lucide-react";
import Wrapper from "../Wrapper";
import Sort from "./Sort";
import Selection from "./Selection";

const Filtering = () => {
  return (
    <div className="font-DMsans">
      <Wrapper>
        <div className="flex items-center justify-between">
          {/* FILTER BUTTON */}
          <div>
            <Button
              size="lg"
              variant="outline"
              className="flex items-center space-x-1.5 cursor-pointer"
            >
              <ListFilter />
              <span>Filters</span>
            </Button>
          </div>
          {/* MENU BY FILTER! */}
          <div className="flex items-center space-x-4">
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer rounded bg-white border-BorderHighlight border-[1px]"
            >
              View all
            </Button>
            <button className="text-xs sm:text-sm font-medium leading-[150%]">
              Available Now
            </button>
            <button className="text-xs sm:text-sm font-medium leading-[150%]">
              Top Rated
            </button>
            <button className="text-xs sm:text-sm font-medium leading-[150%]">
              Category three
            </button>
            <button className="text-xs sm:text-sm font-medium leading-[150%]">
              Category four
            </button>
          </div>
          {/* SORT BUTTON */}
          <div>
            <Sort />
          </div>
        </div>
        <Selection />
      </Wrapper>
    </div>
  );
};

export default Filtering;
