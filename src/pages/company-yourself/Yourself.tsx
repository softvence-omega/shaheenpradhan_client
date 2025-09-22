import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "@/components/shared/Wrapper";
import Divider from "@/components/shared/Divider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import FormNav from "@/components/Home/FormComponent/FormNav";
import TittleBig from "@/components/shared/Title/TittleBig";
import FormOnboarding from "@/components/Company_Yourself/FormOnboarding";

const Yourself = () => {
  const [selection, setSelection] = useState("Individual");
  const [uploadedFileName, setUploadedFileName] = useState<string>(""); // file name state
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  // Handle file upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name); // set name
    }
    e.target.value = ""; // reset so same file can be re-uploaded
  };

  // Handle company save (just log values)
  const handleCompanySave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      uploadedFile: formData.get("uploadedFile"),
      fullName: formData.get("fullName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
    };

    console.log("Company form data:", data);
    navigate("/assistant/home");
  };

  return (
    <div className="bg-white">
      <Wrapper>
        <FormNav />
        <div className="md:w-3/4 w-full md:mx-auto">
          <div className="flex justify-center md:w-3/4 mx-auto text-center mb-10 md:mb-14">
            <TittleBig
              bigtittle="Tell Us About Yourself"
              description="This information will help us find you best match for you. Skip it if you want to do it later"
            />
          </div>

          <h1 className="text-sm md:text-base">
            Are you an individual or representing a company?
          </h1>
          <Divider />

          <div className="pt-5">
            {/* Selection */}
            <RadioGroup
              value={selection}
              onValueChange={setSelection}
              className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
            >
              <div className="flex items-center gap-2">
                <RadioGroupItem className="cursor-pointer" value="Individual" id="r1" />
                <Label htmlFor="r1">Individual</Label>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroupItem className="cursor-pointer" value="Company" id="r2" />
                <Label htmlFor="r2">On behalf of a Company</Label>
              </div>
            </RadioGroup>

            {/* Individual Form */}
            {selection === "Individual" ? (
              <FormOnboarding
                onSave={(data) => {
                  console.log("Individual form data:", data);
                  navigate("/assistant/home");
                }}
                onSkip={() => navigate("/")}
              />
            ) : (
              // Company Form
              <form
                onSubmit={handleCompanySave}
                className="py-10 w-[368px] space-y-6"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h3>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label>Upload Photo</Label>
                  <div className="flex items-center gap-3">
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="uploadedFile"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      className="cursor-pointer"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <Upload className="w-4 h-4 mr-2" />
                      Upload a document
                    </Button>
                    <span className="text-sm text-gray-500">
                      {uploadedFileName || "No file uploaded"}
                    </span>
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <Label>Your Full Name</Label>
                  <Input name="fullName" />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input name="email" type="email" placeholder="Example@gmail.com" />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <Label>Phone Number</Label>
                  <div className="flex">
                    <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                      <span className="text-sm">🇦🇪</span>
                      <span className="ml-2 text-sm">+971</span>
                    </div>
                    <Input name="phone" className="rounded-l-none border-l-0" />
                  </div>
                </div>

                <Divider />
                <div className="flex justify-end gap-3 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="cursor-pointer"
                    onClick={() => navigate("/")}
                  >
                    Skip
                  </Button>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-purple-600 hover:bg-purple-700 cursor-pointer"
                  >
                    Save
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Yourself;
