import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const ProfileForm = () => {
  return (
    <div className="mx-auto mt-5 text-[#0D0A0A] font-DMsans space-y-3">
      {/* Available Days */}
      <div className="space-y-3">
        <div>
          <label className="text-black mb-1 w-[480px] font-medium text-[18px] leading-[27px] tracking-normal">
            Available Days{" "}
            <span className="text-gray-500">(Select All that Apply)</span>
          </label>
        </div>
        <div className="flex flex-wrap gap-3">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <label key={day} className="flex items-center gap-1 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={["Sun", "Mon", "Tue", "Wed", "Thu"].includes(
                  day
                )}
                className="accent-[#8559CA] h-[18px]  w-[18px]"
              />
              {day}
            </label>
          ))}
        </div>
      </div>

      {/* Rate Per Hour */}
      <div className="space-y-3">
        <div>
          <label className="text-[#0D0A0A] mb-1 w-[480px] font-medium text-[18px] leading-[27px] tracking-normal">
            Rate Per Hour
          </label>
        </div>
        <div>
          <Select defaultValue="usd">
            <SelectTrigger className="w-full bg-white border border-[##E7E5E4] rounded-lg px-4 py-5 focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="eur">EUR </SelectItem>
                <SelectItem value="gbp">GBP </SelectItem>
                <SelectItem value="jpy">JPY </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Experience & Skills */}
      <div className="space-y-3">
        <div>
          <label className=" mb-1 w-[480px] font-medium text-[18px] leading-[27px] tracking-normal">
            Years Of Experience
          </label>
        </div>
        <div>
          <Select defaultValue="Year">
            <SelectTrigger className="w-full bg-white border border-[##E7E5E4] rounded-lg px-4 py-5 focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer">
              <SelectValue placeholder="0" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3 </SelectItem>
                <SelectItem value="4">4 </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <label className="mb-1 w-[480px] font-medium text-[18px] leading-[27px] tracking-normal">
            Core Skills
          </label>
        </div>
        <div className="flex flex-wrap gap-3 mb-2">
          {[
            "Social Media",
            "QuickBooks",
            "Visa Set-up",
            "Google Calendar",
            "Business Set-up",
            "Accounting",
            "Sales Force",
            "SAP",
          ].map((skill) => (
            <label
              key={skill}
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="checkbox"
                defaultChecked={[
                  "Social Media",
                  "Google Calendar",
                  "Business Set-up",
                  "Accounting",
                  "SAP",
                ].includes(skill)}
                className="accent-[#8559CA]  h-[18px]  w-[18px]"
              />
              {skill}
            </label>
          ))}
        </div>
        <div>
          <input
            type="text"
            placeholder="Type your skill"
            className="w-full bg-white border border-[##E7E5E4] rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
          />
        </div>
      </div>

      {/* Upload CV */}
      <div className="space-y-3">
        <div>
          <label className="block mb-1 w-[480px] font-medium text-[18px] leading-[27px] tracking-normal">
            Upload CV/Portfolio
          </label>
        </div>
        <div className="flex justify-baseline items-center space-x-3 ">
          <button className="w-[143px] h-[30px] border border-[] px-4 py-1 rounded-[20px] text-sm text-gray-700 hover:bg-gray-200 hover:text-white  flex items-center gap-2 cursor-pointer">
            Upload File
          </button>

          <p className="text-sm text-gray-400 ">CV.pdf</p>
        </div>
      </div>

      {/* Education */}
      <div className="space-y-3">
        <div>
          <h2 className="block mb-1 w-[480px] font-medium text-[18px] leading-[27px] tracking-normal">
            Education
          </h2>
          <div className="mt-1 mb-4">
            <hr className="border-b border-[#E5E5E5]" />
          </div>
        </div>
        <div className="border p-4 rounded-lg bg-purple-50 space-y-1">
          <h3 className="font-semibold">
            Bachelor of Business Administration (BBA)
          </h3>
          <p className="text-sm text-gray-600">
            June 2016 • American University in Dubai
          </p>
          <p className="text-gray-700 text-sm mt-2 bg-white w-full">
            A comprehensive four-year degree focused on core business
            disciplines including management, marketing, finance, and
            organizational behavior. Developed strong analytical, communication,
            and problem-solving skills, with coursework emphasizing leadership,
            business ethics, and operational strategy. Completed capstone
            projects on workflow optimization and cross-functional team
            collaboration.
          </p>
        </div>
        <button className="mt-2 text-[#8559CA] hover:underline text-sm cursor-pointer">
          + Add Another Degree
        </button>
      </div>

      {/* Certifications */}
      <div className="space-y-3">
        <div>
          <h2 className="block mb-1 w-[480px] font-medium text-[18px] leading-[27px] tracking-normal">
            Certifications
          </h2>
          <div className="mt-1 mb-4">
            <hr className="border-b border-[#E5E5E5]" />
          </div>
        </div>

        <div className="flex justify-between items-center border p-4 rounded-lg bg-white">
          <div>
            <p className="font-semibold">Certified Executive Assistant (CEA)</p>
            <p className="text-sm text-gray-600">
              Issued Oct 2023 • The Institute of Executive Assistants
            </p>
          </div>
          <Button className="cursor-pointer" variant="outline">
            View
          </Button>
        </div>
        <button className="mt-2 text-[#8559CA] hover:underline text-sm cursor-pointer">
          + Add New Payment Method
        </button>
      </div>
    </div>
  );
};

export default ProfileForm;
