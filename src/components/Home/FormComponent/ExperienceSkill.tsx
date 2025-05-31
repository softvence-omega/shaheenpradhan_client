import SmallTitle from "@/components/shared/Title/SmallTitle";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
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
import { useState } from "react";

// Zod schema
const formSchema = z.object({
  dob: z.date().nullable(),
});

const ExperienceSkill = () => {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dob: null,
    },
  });

  return (
    <div className="max-w-[780px]">
      <div>
        <div>
          <div className="w-full">
            {/* Section Title */}
            <div className="mb-4 w-[1200px]">
              <SmallTitle smalltitle="Experience & Skils" />
              <hr className="border-b border-[#E5E5E5]" />
            </div>

            <div className="w-[1200px] space-y-6">
              {/* Year Of experience */}
              <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                {/* Year Of experience */}
                <div className="w-full">
                  <div>
                    <label className="  w-[480px] font-medium text-sm leading-[27px] tracking-normal">
                      Years Of Experience
                    </label>
                    <Select defaultValue="Year">
                      <SelectTrigger className="w-full border border-[##E7E5E4] rounded px-4 py-5 bg-white focus:ring-2 focus:ring-[#E5E5E5] focus:outline-none cursor-pointer">
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
                {/* Profile Photo */}
                <div className="w-full">
                  <Label
                    htmlFor="profile-photo"
                    className="block text-sm font-medium mb-3"
                  >
                    Profile Photo
                  </Label>
                  <div className="flex items-center gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="relative"
                      onClick={() =>
                        document.getElementById("photo-upload")?.click()
                      }
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload a photo
                      <input
                        id="photo-upload"
                        type="file"
                        accept="image/*"
                        className="absolute inset-0 opacity-0 cursor-pointer"
                        onChange={handlePhotoUpload}
                      />
                    </Button>
                    <span className="text-sm text-gray-500">
                      {profilePhoto ? profilePhoto.name : "No file uploaded"}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                {/* Core Concept */}
                <div className="w-[650px]">
                  <div>
                    <label className="block font-semibold mb-1">
                      Core Skills
                    </label>
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
                            className="accent-[#8559CA]"
                          />
                          {skill}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                {/* Full Name */}
                <div className="w-[870px]">
                  <div className="grid w-full items-center gap-1.5">
                    <Label
                      htmlFor="fullName"
                      className="w-[646px] text-[18px] font-normal leading-[27px]"
                    >
                      Add Your Skill Manually
                    </Label>

                    <Input
                      type="text"
                      id="skill"
                      placeholder="Type Your Skill"
                      className="bg-[#FFFFFF]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <hr className="border-b border-[#E5E5E5]" />
      </div>
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-5">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white cursor-pointer">
          Back
        </button>
        <button className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
};

export default ExperienceSkill;
