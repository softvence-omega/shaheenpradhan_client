import { AssistantDashboard } from "@/components/home/AssistantDashboard";
import Review from "@/components/home/Review";
import { UserDashboard } from "@/components/home/UserDashboard";
import React from "react";

const Reuserable = () => {
  return (
    <div>
      <Review />
      <AssistantDashboard />
      <UserDashboard />
    </div>
  );
};

export default Reuserable;
