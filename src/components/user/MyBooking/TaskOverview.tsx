import SmallTitle from "@/components/shared/SmallTitle";
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const taskDetails: string[] = [
  " Supported three directors across aviation and HR divisions",
  "  Arranged travel to over 15 countries with 100% accuracy",
  "Created monthly performance dashboards using Excel & PowerPoint.",
];

const TaskOverview = () => {
  return (
    <div className="space-y-6">
      <div>
        <SmallTitle smalltitle="Task Overview" />
        <div className="mt-2">
          <hr className="border-b border-[#E5E5E5]" />
        </div>
      </div>
      <div className="space-y-4">
        {taskDetails.map((task, index) => (
          <div key={index} className="flex items-start space-x-2">
            <span className="mt-2">
              <RiCheckboxBlankCircleFill className="w-[3px] h-[3px]" />
            </span>

            <p className="text-gray-800 w-[375px]">{task}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskOverview;

/* import SmallTitle from "@/components/shared/SmallTitle";

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
 */
