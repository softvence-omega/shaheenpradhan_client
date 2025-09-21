import Wrapper from "@/components/shared/Wrapper";
import Divider from "@/components/shared/Divider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";
import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormOnboarding from "@/components/Company_Yourself/FormOnboarding";
import { Link } from "react-router-dom";
import FormNav from "@/components/Home/FormComponent/FormNav";
import TittleBig from "@/components/shared/Title/TittleBig";

const Yourself = () => {
  const [selection, setSelection] = useState("Individual");
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  // 🔑 Ref for hidden input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePhoto(file);
      console.log("File uploaded:", file.name);
    }
    // reset value so same file can be uploaded again
    event.target.value = "";
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

          <div>
            <div className="space-y-2">
              <h1 className="text-sm md:text-base">
                Are you an individual or representing a company?
              </h1>
              <Divider />
            </div>

            {/* RADIO BUTTON */}
            <div className="pt-5">
              <RadioGroup
                value={selection}
                onValueChange={(value) => {
                  setSelection(value);
                  console.log("User selected:", value);
                }}
                className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    className="cursor-pointer"
                    value="Individual"
                    id="r1"
                  />
                  <Label htmlFor="r1">Individual</Label>
                </div>

                <div className="flex items-center gap-2">
                  <RadioGroupItem
                    className="cursor-pointer"
                    value="Company"
                    id="r2"
                  />
                  <Label htmlFor="r2">On behalf of a Company</Label>
                </div>
              </RadioGroup>

              {selection === "Individual" ? (
                <FormOnboarding />
              ) : (
                <div>
                  <div className="space-y-6 py-10 w-[368px]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Personal Information
                    </h3>

                    {/* ✅ Fixed Image Upload Field */}
                    <div className="space-y-2">
                      <Label className="text-sm font-medium">
                        Profile Photo
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
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={handleUploadClick}
                        >
                          <Upload className="w-4 h-4 mr-2" />
                          Upload a photo
                        </Button>
                        <span className="text-sm text-gray-500">
                          {profilePhoto
                            ? profilePhoto.name
                            : "No file uploaded"}
                        </span>
                      </div>
                    </div>

                    {/* Other Inputs */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="full-name"
                        className="text-sm font-medium"
                      >
                        Your Full Name
                      </Label>
                      <Input id="full-name" placeholder="" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Example@gmail.com"
                      />
                    </div>

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
                          className="rounded-l-none border-l-0"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>

                  <Divider />
                  {/* Action Buttons */}
                  <div className="flex justify-end gap-3 pt-6">
                    <Button
                      type="button"
                      className="cursor-pointer"
                      variant="outline"
                      size="lg"
                    >
                      Skip
                    </Button>
                    <Link to="/assistant/home">
                      <Button
                        type="button"
                        size="lg"
                        className="bg-purple-600 hover:bg-purple-700 cursor-pointer"
                      >
                        Save
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Yourself;
