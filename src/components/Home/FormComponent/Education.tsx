import SmallTitle from "@/components/shared/Title/SmallTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface EducationProps {
  onBack: () => void;
  onSave: () => void;
  onSkip: () => void;
  data: any;
  updateData: (data: any) => void;
}

const Education: React.FC<EducationProps> = ({
  onBack,
  onSave,
  onSkip,
  data,
  updateData,
}) => {
  const [higherDegree, setHigherDegree] = useState(data.higherDegree || "");
  const [institutionName, setInstitutionName] = useState(
    data.institutionName || ""
  );
  const [graduationYear, setGraduationYear] = useState(
    data.graduationYear || ""
  );
  const [certificationName, setCertificationName] = useState("");
  const [certificationInstitution, setCertificationInstitution] = useState("");
  const [certificationYear, setCertificationYear] = useState("");
  const [certifications, setCertifications] = useState(
    data.certifications || []
  );
  const [termsAccepted, setTermsAccepted] = useState(
    data.termsAccepted || false
  );

  const handleSave = () => {
    updateData({
      higherDegree,
      institutionName,
      graduationYear,
      certifications,
      termsAccepted,
    });
    onSave();
  };

  const addCertification = () => {
    if (certificationName && certificationInstitution && certificationYear) {
      setCertifications((prev) => [
        ...prev,
        {
          name: certificationName,
          institution: certificationInstitution,
          year: certificationYear,
        },
      ]);
      setCertificationName("");
      setCertificationInstitution("");
      setCertificationYear("");
    }
  };

  return (
    <div>
      {/* Education */}
      <section>
        <div className="mb-2">
          <SmallTitle smalltitle="Education" />
        </div>
        <hr className="border-b border-[#E5E5E5] mb-6" />

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label>Higher Degree</Label>
              <Select value={higherDegree} onValueChange={setHigherDegree}>
                <SelectTrigger className="w-full bg-white pt-6 pb-5 cursor-pointer">
                  <SelectValue placeholder="Select Your Degree" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Degree</SelectLabel>
                    <SelectItem value="cse">BSc in CSE</SelectItem>
                    <SelectItem value="bba">BBA</SelectItem>
                    <SelectItem value="mba">MBA</SelectItem>
                    <SelectItem value="msc">MSC</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Institution Name</Label>
              <Input
                type="text"
                className="bg-white"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Graduation Years</Label>
            <Select value={graduationYear} onValueChange={setGraduationYear}>
              <SelectTrigger className="w-full bg-white pt-6 pb-5 cursor-pointer">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Years</SelectLabel>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <button className="mt-2 text-[#8559CA] hover:underline text-sm cursor-pointer">
            + Add Another Degree
          </button>
        </div>
      </section>

      {/* Certifications */}
      <section className="mt-8">
        <div className="mb-2">
          <SmallTitle smalltitle="Certifications" />
        </div>
        <hr className="border-b border-[#E5E5E5] mb-6" />

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label>Certification Name</Label>
              <Input
                type="text"
                placeholder="Enter certification name"
                className="bg-white"
                value={certificationName}
                onChange={(e) => setCertificationName(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Label>Institution Name</Label>
              <Input
                type="text"
                className="bg-white"
                value={certificationInstitution}
                onChange={(e) => setCertificationInstitution(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Certification Year</Label>
            <Select
              value={certificationYear}
              onValueChange={setCertificationYear}
            >
              <SelectTrigger className="w-full bg-white pt-6 pb-5 cursor-pointer">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Years</SelectLabel>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <button
            onClick={addCertification}
            className="mt-2 text-[#8559CA] hover:underline text-sm cursor-pointer"
          >
            + Add Certification
          </button>

          {certifications.length > 0 && (
            <div className="mt-4 space-y-2">
              <Label>Added Certifications:</Label>
              {certifications.map((cert, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <p className="font-medium">{cert.name}</p>
                  <p className="text-sm text-gray-600">
                    {cert.institution} - {cert.year}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Agreement */}
      <section className="space-y-3 mt-8">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mr-2 text-[#8559CA] cursor-pointer"
          />
          I agree to the{" "}
          <a href="#" className="text-[#4D4D4D] underline ml-1 cursor-pointer">
            Terms & Conditions
          </a>
        </label>
        <hr className="border-b border-[#E5E5E5]" />
      </section>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        <button
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 cursor-pointer"
          onClick={onSkip}
        >
          Skip
        </button>
        <button
          className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer"
          onClick={handleSave}
          disabled={!termsAccepted}
          style={{ opacity: termsAccepted ? 1 : 0.5 }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Education;
