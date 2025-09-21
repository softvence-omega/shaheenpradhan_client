
import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

export default function FormOnboarding() {
  const [userType, setUserType] = useState("individual");
  const [profilePhoto, setProfilePhoto] = useState<File | null>(null);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePhoto(file);
    }
  };

  return (
    <div className=" flex items-center justify-center">
      <Card className="w-full max-w-4xl shadow-none border-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 py-5">
          {/* Personal Information Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Personal Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="profile-photo" className="text-sm font-medium">
                Profile Photo
              </Label>
              <div className="flex items-center gap-3 py-1.5">
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

            <div className="space-y-2">
              <Label htmlFor="full-name" className="text-sm font-medium">
                Your Full Name
              </Label>
              <Input id="full-name" placeholder="" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input id="email" type="email" placeholder="Example@gmail.com" />
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

          {/* Company Information Section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Company Information
            </h3>

            <div className="space-y-2">
              <Label htmlFor="company-name" className="text-sm font-medium">
                Company Name
              </Label>
              <Input id="company-name" placeholder="" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="designation" className="text-sm font-medium">
                Your Designation
              </Label>
              <Input id="designation" placeholder="" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company-size" className="text-sm font-medium">
                Company Size
              </Label>
              <Select defaultValue="5-10">
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

            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location
              </Label>
              <Select>
                <SelectTrigger className="w-full  py-[21px]">
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
          <Button className="cursor-pointer" variant="outline" size="lg">
            Skip
          </Button>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 cursor-pointer">
            Save
          </Button>
        </div>
      </Card>
    </div>
  );
}
