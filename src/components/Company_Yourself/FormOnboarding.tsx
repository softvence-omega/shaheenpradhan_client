import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload } from "lucide-react";
import Divider from "../shared/Divider";

interface FormOnboardingProps {
  onSave: (data: any) => void;
  onSkip: () => void;
}

const FormOnboarding: React.FC<FormOnboardingProps> = ({ onSave, onSkip }) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  // 🔧 Form states for Individual section
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [designation, setDesignation] = useState("");
  const [companySize, setCompanySize] = useState("5-10");
  const [location, setLocation] = useState("");

  // 🔑 Ref for file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
    // reset so same file can be re-uploaded
    event.target.value = "";
  };

  const handleSave = () => {
    const formData = {
      personalInfo: {
        uploadedFile: uploadedFile?.name || null,
        fullName,
        email,
        phone,
      },
      companyInfo: {
        companyName,
        designation,
        companySize,
        location,
      },
    };
    onSave(formData);
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="w-full max-w-4xl shadow-none border-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-5">
          {/* Personal Information Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Personal Information
            </h3>

            {/* Upload Document */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Upload Photo</Label>
              <div className="flex items-center gap-3 py-1.5">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx,.txt,.xlsx,.xls,.jpg,.jpeg,.png,.gif,.bmp,.webp,image/*"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="cursor-pointer"
                  onClick={handleUploadClick}
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Upload a document
                </Button>
                {/* ✅ Show file name if uploaded */}
                <span className="text-sm text-gray-500 truncate max-w-[180px]">
                  {uploadedFile ? uploadedFile.name : "No file uploaded"}
                </span>
              </div>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <Label htmlFor="full-name" className="text-sm font-medium">
                Your Full Name
              </Label>
              <Input
                id="full-name"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="Example@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </Label>
              <div className="flex">
                <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                  <span className="text-sm">🇦🇪</span>
                  <span className="ml-2 text-sm">+971</span>
                </div>
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  className="rounded-l-none border-l-0"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Company Information Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Company Information
            </h3>

            {/* Company Name */}
            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-sm font-medium">
                Company Name
              </Label>
              <Input
              placeholder="Enter your company name"
                id="company-name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            {/* Designation */}
            <div className="space-y-2">
              <Label htmlFor="designation" className="text-sm font-medium">
                Your Designation
              </Label>
              <Input
                placeholder="Enter your designation"
                id="designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
              />
            </div>

            {/* Company Size */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Company Size</Label>
              <Select value={companySize} onValueChange={setCompanySize}>
                <SelectTrigger className="w-full py-[21px]">
                  <SelectValue placeholder="Select company size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1 - 5 Employees</SelectItem>
                  <SelectItem value="5-10">5 - 10 Employees</SelectItem>
                  <SelectItem value="10-50">10 - 50 Employees</SelectItem>
                  <SelectItem value="50-100">50 - 100 Employees</SelectItem>
                  <SelectItem value="100+">100+ Employees</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label className="text-sm font-medium">Location</Label>
              <Select value={location} onValueChange={setLocation}>
                <SelectTrigger className="w-full py-[21px]">
                  <SelectValue placeholder="Select Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="uae">United Arab Emirates</SelectItem>
                  <SelectItem value="saudi">Saudi Arabia</SelectItem>
                  <SelectItem value="qatar">Qatar</SelectItem>
                  <SelectItem value="kuwait">Kuwait</SelectItem>
                  <SelectItem value="bahrain">Bahrain</SelectItem>
                  <SelectItem value="oman">Oman</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <Divider />

        {/* Action Buttons */}
        <div className="flex justify-end gap-3 pt-6">
          <Button
            className="cursor-pointer"
            variant="outline"
            size="lg"
            onClick={onSkip}
          >
            Skip
          </Button>
          <Button
            size="lg"
            className="bg-purple-600 hover:bg-purple-700 cursor-pointer"
            onClick={handleSave}
          >
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default FormOnboarding;
