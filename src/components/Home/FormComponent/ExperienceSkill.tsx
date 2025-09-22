import SmallTitle from "@/components/shared/Title/SmallTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import { useState, useRef } from "react";

interface ExperienceSkillProps {
  onNext: () => void;
  onBack: () => void;
  data: any;
  updateData: (data: any) => void;
}

const ExperienceSkill: React.FC<ExperienceSkillProps> = ({
  onNext,
  onBack,
  data,
  updateData,
}) => {
  const [portfolioPhoto, setPortfolioPhoto] = useState<File | null>(
    data.portfolioPhoto
  );
  const [yearsOfExperience, setYearsOfExperience] = useState(
    data.yearsOfExperience || ""
  );
  const [coreSkills, setCoreSkills] = useState(
    data.coreSkills || [
      "Social Media",
      "Google Calendar",
      "Business Set-up",
      "Accounting",
      "SAP",
    ]
  );
  const [manualSkills, setManualSkills] = useState(data.manualSkills || "");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPortfolioPhoto(file);
    }
    event.target.value = ""; // reset input so same file can be reselected
  };

  const handleSkillChange = (skill: string, checked: boolean) => {
    if (checked) {
      setCoreSkills((prev) => [...prev, skill]);
    } else {
      setCoreSkills((prev) => prev.filter((s) => s !== skill));
    }
  };

  const handleNext = () => {
    updateData({
      yearsOfExperience,
      coreSkills,
      manualSkills,
      portfolioPhoto,
    });
    onNext();
  };

  const allSkills = [
    "Social Media",
    "QuickBooks",
    "Visa Set-up",
    "Google Calendar",
    "Business Set-up",
    "Accounting",
    "Sales Force",
    "SAP",
  ];

  return (
    <div>
      {/* Section Title */}
      <div className="mb-2">
        <SmallTitle smalltitle="Experience & Skills" />
      </div>
      <hr className="border-b border-[#E5E5E5] mb-6" />

      <div className="space-y-8">
        {/* Years of Experience + Portfolio */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Years Of Experience */}
          <div className="w-full">
            <label className="block font-medium text-sm mb-3">
              Years Of Experience
            </label>
            <Select
              value={yearsOfExperience}
              onValueChange={setYearsOfExperience}
            >
              <SelectTrigger className="w-full border border-[#E7E5E4] rounded px-4 py-5 bg-white focus:ring-2 focus:ring-[#E5E5E5] focus:outline-none cursor-pointer">
                <SelectValue placeholder="Select years" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="0">0</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5+">5+</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Portfolio Photo */}
          <div className="w-full">
            <Label className="block text-sm font-medium mb-3">
              Portfolio Photo
            </Label>
            <div className="flex items-center gap-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePhotoUpload}
              />
              <Button
                variant="outline"
                size="sm"
                type="button"
                className="cursor-pointer"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-4 h-4 mr-2" />
                Upload portfolio
              </Button>
              <span className="text-sm text-gray-500">
                {portfolioPhoto ? portfolioPhoto.name : "No file uploaded"}
              </span>
            </div>
          </div>
        </div>

        {/* Core Skills */}
        <div className="w-full">
          <label className="block font-semibold mb-3">Core Skills</label>
          <div className="flex flex-wrap gap-4">
            {allSkills.map((skill) => (
              <label
                key={skill}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={coreSkills.includes(skill)}
                  onChange={(e) => handleSkillChange(skill, e.target.checked)}
                  className="accent-[#8559CA] cursor-pointer"
                />
                {skill}
              </label>
            ))}
          </div>
        </div>

        {/* Manual Skills */}
        <div className="w-full">
          <Label
            htmlFor="skill"
            className="text-[18px] font-normal leading-[27px] mb-2 block"
          >
            Add Your Skill Manually
          </Label>
          <Input
            type="text"
            id="skill"
            placeholder="Type Your Skill"
            className="bg-[#FFFFFF]"
            value={manualSkills}
            onChange={(e) => setManualSkills(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-8">
        <hr className="border-b border-[#E5E5E5]" />
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        <button
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ExperienceSkill;
