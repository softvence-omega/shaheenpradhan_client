import ReuseBreadCrum from "@/components/shared/Title/ReuseBreadCrum";
import SmallTitle from "@/components/shared/Title/SmallTitle";
import BookingRequestUsed from "../Shared/BookingRequestUsed";
import CurrentTaskUsed from "../Shared/CurrentTaskUsed";

const CurrentTask = () => {
  return (
    <div className="space-y-4">
      <div>
        <ReuseBreadCrum
          items={[
            { label: "Home", path: "/" },
            { label: "Current Tasks", path: "/components" },
            { label: "12345678" },
          ]}
        />
      </div>
      <SmallTitle smalltitle="Task Information" />
      <div>
        <hr className="border-b border-[#E5E5E5]" />
      </div>
      <CurrentTaskUsed />
    </div>
  );
};

export default CurrentTask;
