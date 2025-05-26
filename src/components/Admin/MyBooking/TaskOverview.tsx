import SmallTitle from "@/components/shared/SmallTitle";

const TaskOverview = () => {
  return (
    <div className="space-y-4">
      <SmallTitle smalltitle="Task Overview" />
      <div>
        <hr className="border-b border-[#E5E5E5]" />
      </div>
      <div className="space-y-4">
        <div className="flex items-center  space-x-2">
          <span className="text-lg mt-1">•</span>
          <p className="text-gray-800">
            Supported three directors across aviation and HR divisions
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg mt-1">•</span>
          <p className="text-gray-800">
            Arranged travel to over 15 countries with 100% accuracy
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-lg mt-1">•</span>
          <p className="text-gray-800">
            Created monthly performance dashboards using Excel & PowerPoint
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskOverview;
