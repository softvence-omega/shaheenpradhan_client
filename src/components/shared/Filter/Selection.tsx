import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";
import Selects from "../Select";

const Selection = () => {
  return (
    <div className="flex items-center justify-between bg-white shadow-sm rounded-lg border border-slate-100 p-4 space-x-8 my-2">
      <div className="w-full max-w-[400px] space-y-2">
        <div className="flex items-center justify-between space-x-3">
          <p className="text-sm font-medium">Search By Task Or Industry</p>
          <button className="text-sm font-medium">Clear</button>
        </div>
        <fieldset className="w-full space-y-1 dark:text-gray-800">
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
              type="email"
              placeholder="Email"
              className="max-w-96 w-full py-5 pl-10 text-sm rounded-md focus:outline-none"
            />
          </div>
        </fieldset>
      </div>
      <div className="w-full max-w-[320px] space-y-2">
        <div className="flex items-center justify-between space-x-3">
          <p className="text-sm font-medium">Location</p>
          <button className="text-sm font-medium">Clear</button>
        </div>
        <fieldset className="w-full space-y-1 dark:text-gray-800">
          <label htmlFor="Search" className="hidden">
            Search
          </label>
          <Selects
            placeholder="Select your location"
            Label="location"
            value={["Bangladesh", "India", "America", "Portugal"]}
          />
        </fieldset>
      </div>
      <div className="w-full max-w-[320px] space-y-2">
        <div className="flex items-center justify-between space-x-3">
          <p className="text-sm font-medium">Skills</p>
          <button className="text-sm font-medium">Clear</button>
        </div>
        <Selects
          placeholder="Select your skills"
          Label="Skills"
          value={[
            "web development",
            "UI/UX",
            "Game Development",
            "Digital Marketing",
          ]}
        />
      </div>
      <div className="w-full max-w-[320px] space-y-2">
        <div className="flex items-center justify-between space-x-3">
          <p className="text-sm font-medium">Language</p>
          <button className="text-sm font-medium">Clear</button>
        </div>
        <Selects
          placeholder="Select a language"
          Label="language"
          value={["Arabic", "Bangla", "Hindi", "Spanish", "English"]}
        />
      </div>
    </div>
  );
};

export default Selection;
