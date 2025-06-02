import { Button } from "../../ui/button";
import { ListFilter, Search } from "lucide-react";
import Wrapper from "../Wrapper";
import Sort from "./Sort";
import Selection from "./Selection";
import { Input } from "@/components/ui/input";

const Filtering = () => {
  return (
    <div className="font-DMsans">
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
              className="flex items-center space-x-1.5 cursor-pointer bg-transparent hover:bg-transparent shadow-none border-[1px] border-TextSecondary"
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
              className="cursor-pointer rounded bg-white border-BorderHighlight border-[1px] text-sm sm:text-[15px]"
            >
              View all
            </Button>
            <button className="sm:text-sm font-medium leading-[150%] cursor-pointer text-sm sm:text-[15px]">
              Available Now
            </button>
            <button className="sm:text-sm font-medium leading-[150%] cursor-pointer text-sm sm:text-[15px]">
              Top Rated
            </button>
            <button className="sm:text-sm font-medium leading-[150%] cursor-pointer text-sm sm:text-[15px]">
              Category three
            </button>
            <button className="sm:text-sm font-medium leading-[150%] cursor-pointer text-sm sm:text-[15px]">
              Category four
            </button>
          </div>
          {/* SORT BUTTON */}
          <div>
            <Sort />
          </div>
        </div>

        <Selection />
    </div>
  );
};

export default Filtering;
