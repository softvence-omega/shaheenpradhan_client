"use client";

import { useState } from "react";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    bio: "",
    photo: null as File | null,
  });

  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData((prev) => ({ ...prev, photo: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form className="w-full space-y-10" onSubmit={handleSubmit}>
      <div className="flex items-center justify-between md:justify-start mb-4">
        {/* Back arrow – visible only on small devices */}
        <Link to="/user/home" className="block md:hidden">
          <div className="w-[32px] h-[32px] flex items-center mb-3 justify-start  ">
            <IoMdArrowRoundBack className="w-[20px] h-[32px] text-gray-600" />
          </div>
        </Link>

        {/* Title – centered on small, left-aligned on medium and up */}
        <div className="flex-1 text-start md:text-left">
          <TitleAndSubTitle title="Profile" subTitle="" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-20 gap-10">
        {/* Upload Photo */}
        <div className="space-y-6 flex flex-col items-start lg:items-start">
          <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-500 overflow-hidden flex items-center justify-center text-white">
            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              "Profile"
            )}
          </div>

          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center justify-center sm:flex-col sm:items-start sm:space-y-2 space-x-2 sm:space-x-0">
              <label htmlFor="photo">
                <input
                  type="file"
                  id="photo"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
                <button
                  type="button"
                  className="w-[143px] h-[30px] border border-[#E5E5E5] px-4 py-1 rounded-[20px] text-sm text-gray-700 hover:bg-gray-200 hover:text-white flex items-center gap-2 justify-center"
                  onClick={() => document.getElementById("photo")?.click()}
                >
                  Upload a photo
                </button>
              </label>
              <p className="text-sm text-gray-400 block sm:hidden">
                JPG, PNG. Max 2MB
              </p>
            </div>
            <p className="text-sm text-gray-400 hidden sm:block mt-2">
              JPG, PNG. Max 2MB
            </p>
          </div>
        </div>

        <div className="w-full space-y-4">
          {/* Full Name */}
          <div className="w-full lg:w-[630px] space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Full Name"
              className="bg-white"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="w-full lg:w-[630px] space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Example@gmail.com"
              className="bg-white"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Phone Number */}
          <div className="w-full lg:w-[630px] space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <div className="flex items-center border border-[#E7E5E4] rounded-lg overflow-hidden">
              <span className="bg-white px-3 py-2 border-r text-sm flex items-center gap-2">
                🇦🇪 +971
              </span>
              <input
                type="tel"
                name="phone"
                placeholder="(555) 123-4567"
                className="flex-1 px-3 py-2 outline-none bg-white"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Location */}
          <div className="w-full lg:w-[630px] space-y-2">
            <Label htmlFor="location">Location</Label>
            <select
              name="location"
              className="w-full border border-[#E7E5E4] bg-white rounded-lg px-3 py-3 text-sm"
              value={formData.location}
              onChange={handleChange}
            >
              <option value="">Select Location</option>
              <option>Dubai</option>
              <option>Abu Dhabi</option>
              <option>Sharjah</option>
            </select>
          </div>

          {/* Bio */}
          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <textarea
              name="bio"
              className="w-full border border-[#E7E5E4] bg-white rounded-lg px-3 py-2 text-sm resize-none"
              rows={4}
              value={formData.bio}
              onChange={handleChange}
              placeholder="Write a short bio..."
            />
            <p className="text-xs text-gray-400 mt-1">
              {1000 - formData.bio.length} characters left
            </p>
          </div>

          {/* Save Button */}
          <div className="text-right">
            <hr className="border-b border-[#E5E5E5] mb-4" />
            <button
              type="submit"
              className="bg-BorderHighlight hover:bg-BorderHighlight text-white px-6 py-2 rounded-lg font-medium transition duration-200 cursor-pointer"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UserProfile;

/* 

import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const UserProfile = () => {
  return (
    <div className="w-full space-y-15">
    
      <TitleAndSubTitle title="Profile" subTitle="" />

      <div className="flex flex-col md:flex-row  space-x-20">

        <div className=" space-y-6">
          <div className="w-25 h-25 rounded-full bg-gray-500 flex items-center justify-center overflow-hidden ml-5">
            Profile
          </div>
          <div className="space-y-3">
            <button className="w-[143px] h-[30px] border border-[] px-4 py-1 rounded-[20px] text-sm text-gray-700 hover:bg-gray-200 hover:text-white  flex items-center gap-2">
              Upload a photo
            </button>

            <p className="text-sm text-gray-400 ">JPG, PNG. Max 2MB</p>
          </div>
        </div>

        <div className="w-full">
   
          <div className="w-[600px]">
            <div className="mb-4">
              <div className="grid w-full items-center gap-1.5 ">
                <Label htmlFor="email">Full Name</Label>
                <Input
                  type="name"
                  id="name"
                  placeholder="Full Name"
                  className="bg-white "
                />
              </div>
            </div>

         
            <div className="mb-4">
              <div className="grid w-full items-center gap-1.5 ">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="Example@gmail.com"
                  className="bg-white "
                />
              </div>
            </div>

          
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#4D4D4D] mb-1">
                Phone Number
              </label>
              <div className="flex items-center border border-[#E7E5E4] rounded-lg overflow-hidden">
                <span className="bg-white px-3 py-2 border-r text-sm flex items-center gap-2">
                  🇦🇪 +971
                </span>
                <input
                  type="number"
                  placeholder="(555) 123-4567"
                  className="flex-1 px-3 py-2 outline-none bg-white"
                />
              </div>
            </div>

   
            <div className="mb-4">
              <label className="block text-sm font-medium text-[#4D4D4D] mb-1">
                Location
              </label>
              <select className="w-full border border-[#E7E5E4] bg-white rounded-lg px-3  py-3 text-sm">
                <option>Select Location</option>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Sharjah</option>
              </select>
            </div>
          </div>

    
          <div className="mb-3 w-[1200px] ">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-[#4D4D4D] mb-1">
                Bio
              </label>
              <hr className="border-b border-[#E5E5E5]" />
              <textarea
                className="w-full border border-[#E7E5E4] bg-white rounded-lg px-3 py-8 text-sm"
                rows={4}
              />
            </div>

            <p className="text-xs text-gray-400 mt-1">1000 characters left</p>
          </div>

      
          <div className="text-right w-[1200px] space-y-3">
            <hr className="border-b border-[#E5E5E5]" />
            <button className="bg-BorderHighlight hover:bg-BorderHighlight text-white px-6 py-2 rounded-lg font-medium">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
 */
