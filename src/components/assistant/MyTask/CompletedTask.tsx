import ReuseBreadCrum from "@/components/shared/Title/ReuseBreadCrum";
import SmallTitle from "@/components/shared/Title/SmallTitle";
import BookingRequestUsed from "../Shared/BookingRequestUsed";
import CompletedTaskUsed from "../Shared/CompletedTaskUsed";

const CompletedTask = () => {
  return (
    <div className="space-y-4">
      <div>
        <ReuseBreadCrum
          items={[
            { label: "Home", path: "/" },
            { label: "Completed Task", path: "/components" },
            { label: "12345678" },
          ]}
        />
      </div>
      <SmallTitle smalltitle="Task Information" />
      <div>
        <hr className="border-b border-[#E5E5E5]" />
      </div>
      <CompletedTaskUsed />
    </div>
  );
};

export default CompletedTask;
