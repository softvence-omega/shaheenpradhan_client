import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import assistantprofile from "@/assets/images/assistantprofile.png";
import SmallTitle from "../shared/Title/SmallTitle";

const AssistantProfile = () => {
  return (
    <div className="w-full space-y-15">
      <TitleAndSubTitle title="Profile" subTitle="" />

      <div className="flex flex-col md:flex-row  space-x-20">
        {/* Upload Photo */}
        <div className=" space-y-6">
          <div className="w-25 h-25 rounded-full bg-gray-500 flex items-center justify-center overflow-hidden ml-5">
            <img src={assistantprofile} alt="" />
          </div>
          <div className="space-y-3">
            <button className="w-[143px] h-[30px] border border-[] px-4 py-1 rounded-[20px] text-sm text-gray-700 hover:bg-gray-200 hover:text-white  flex items-center gap-2">
              Upload a photo
            </button>

            <p className="text-sm text-gray-400 ">JPG, PNG. Max 2MB</p>
          </div>
        </div>

        <div className="w-full">
          {/* part-2 */}
          {/*  */}
          <div className="mb-4 w-[1200px]">
            <SmallTitle smalltitle="Personal Info" />
            <hr className="border-b border-[#E5E5E5]" />
          </div>
          {/* Full Name */}
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

            {/* Email */}
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

            {/* Phone Number */}
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

            {/* Location */}
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

          {/* Bio */}
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

          {/* Save Button */}
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

export default AssistantProfile;
