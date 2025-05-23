import React from "react";
import { Button } from "../ui/button";
import { ListFilter } from "lucide-react";

const Filtering = () => {
  return (
    <div className="font-DMsans">
      <div>
        <Button variant="outline" className="flex items-center space-x-4">
          <ListFilter />
          <span>Filters</span>
        </Button>
      </div>
    </div>
  );
};

export default Filtering;
