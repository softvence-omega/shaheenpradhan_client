import Wrapper from "@/components/shared/Wrapper";
import logo from "@/assets/logo/main_logo.png";
import Divider from "@/components/shared/Divider";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Upload } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import FormOnboarding from "@/components/Company_Yourself/FormOnboarding";
const Yourself = () => {
  const [selection, setSelection] = useState("comfortable");
  const [userType, setUserType] = useState("");
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePhoto(file);
    }
  };
  return (
    <div className="mt-10 bg-white">
      <Wrapper>
        <img src={logo} alt="logo" />
        <div className="lg:w-[60%] w-full lg:mx-auto">
          <div className="my-10 lg:text-center ">
            <div className="space-y-3 w-96 mx-auto">
              <h1 className="text-2xl sm:text-4xl font-semibold ">
                Tell Us About Yourself
              </h1>
              <p className="text-xs sm:text-sm leading-[120%] font-light ">
                This information will help us find you best match for you. Skip
                it if you want to do it later
              </p>
            </div>
          </div>
          {/*   */}
          <div>
            <div className="space-y-2">
              <h1>Are you an individual or representing a company?</h1>
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
                className="flex items-center gap-4"
              >
                <RadioGroupItem value="Individual" id="r1" />
                <Label htmlFor="r1">Individual</Label>

                <RadioGroupItem value="comfortable" id="r2" />
                <Label htmlFor="r2">On behalf of a Company</Label>
              </RadioGroup>

              {selection == "Individual" ? (
                <FormOnboarding />
              ) : (
                <div>
                  <div className="space-y-6 py-10 w-[368px]">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Personal Information
                    </h3>

                    <div className="space-y-2">
                      <Label
                        htmlFor="profile-photo"
                        className="text-sm font-medium"
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
                          {profilePhoto
                            ? profilePhoto.name
                            : "No file uploaded"}
                        </span>
                      </div>
                    </div>

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
                    <Button variant="outline" size="lg">
                      Skip
                    </Button>
                    <Button
                      size="lg"
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      Sav e
                    </Button>
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
