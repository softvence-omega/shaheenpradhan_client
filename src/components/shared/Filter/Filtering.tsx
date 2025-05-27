import { Button } from "../../ui/button";
import { ListFilter, Search } from "lucide-react";
import Wrapper from "../Wrapper";
import Sort from "./Sort";
import Selection from "./Selection";
import { Input } from "@/components/ui/input";

const Filtering = () => {
  return (
    <div className="font-DMsans">
      <Wrapper>
        {/* FOR MOBILE DEVICE SEARCH BAR */}
        <div className="w-full space-y-2 lg:hidden block my-5">
          <div className="flex items-center justify-between space-x-3">
            <p className="text-sm font-medium">Search By Task Or Industry</p>
          </div>
          <fieldset className="w-full space-y-1">
            <label htmlFor="Search" className="hidden">
              Search
            </label>
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button
                  type="button"
                  title="search"
                  className="p-1 focus:outline-none focus:ring"
                >
                  <Search className="w-5 h-5" />
                </button>
              </span>
              <Input
                type="text"
                placeholder="Event Manager"
                className=" w-full py-5 pl-10 text-sm bg-white rounded-md focus:outline-none"
              />
            </div>
          </fieldset>
        </div>

        {/* FILTERING SECTION */}
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
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              size="sm"
              variant="outline"
              className="cursor-pointer rounded bg-white border-BorderHighlight border-[1px]"
            >
              View all
            </Button>
            <button className="text-xs sm:text-sm font-medium leading-[150%] cursor-pointer">
              Available Now
            </button>
            <button className="text-xs sm:text-sm font-medium leading-[150%] cursor-pointer">
              Top Rated
            </button>
            <button className="text-xs sm:text-sm font-medium leading-[150%] cursor-pointer">
              Category three
            </button>
            <button className="text-xs sm:text-sm font-medium leading-[150%] cursor-pointer">
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
