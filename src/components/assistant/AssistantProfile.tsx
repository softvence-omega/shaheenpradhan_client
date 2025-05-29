import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const FormSchema = z.object({
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
});

import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import assistantprofile from "@/assets/images/assistantprofile.png";
import SmallTitle from "../shared/Title/SmallTitle";
import { WorkPreferance } from "./WorkPreferance";

import Select from "react-select";
import TimePicker from "./TimePicker";
import ProfileForm from "./ProfileForm";

const languageOptions = [
  { value: "english", label: "English" },
  { value: "arabic", label: "Arabic" },
  { value: "hindi", label: "Hindi" },
  { value: "bangla", label: "Bangla" },
];

const AssistantProfile = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

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
          <div className="w-[1200px] space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <div className="w-full">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    className="bg-white"
                  />
                </div>
              </div>
              {/* Gender */}
              <div className="w-full">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Gendder
                  </label>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <label>
                      <input type="radio" name="jobType" /> Male
                    </label>
                    <label>
                      <input type="radio" name="jobType" defaultChecked />{" "}
                      Female
                    </label>
                    <label>
                      <input type="radio" name="jobType" /> Others
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              <div className="w-full ">
                <Label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-[#4D4D4D]"
                >
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  className="flex-1 px-3 py-2 border-0 outline-none bg-white"
                />
              </div>
              {/* Gender */}
              <div className="w-full">
                <Label
                  htmlFor="phone"
                  className="mb-1 block text-sm font-medium text-[#4D4D4D]"
                >
                  Phone Number
                </Label>
                <div className="flex items-center border border-[#E7E5E4] rounded-lg overflow-hidden">
                  <span className="bg-white px-3 py-2 border-r text-sm flex items-center gap-2">
                    🇦🇪 +971
                  </span>
                  <Input
                    type="tel"
                    id="phone"
                    placeholder="(555) 123-4567"
                    className="flex-1 px-3 py-2 border-0 outline-none bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Date Of Birth And Location  */}
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              {/* Date Of Birth */}
              <div>
                <Form {...form}>
                  <form className="space-y-8">
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-[588px] h-11 text-left font-normal",
                                    !field.value && "text-muted-foreground"
                                  )}
                                >
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Pick a date</span>
                                  )}
                                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent
                              className="w-auto p-0"
                              align="start"
                            >
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) =>
                                  date > new Date() ||
                                  date < new Date("1900-01-01")
                                }
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>

                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </form>
                </Form>
              </div>

              {/* Location */}
              <div className="w-full">
                <Label
                  htmlFor="location"
                  className="mb-1 block text-sm font-medium text-[#4D4D4D]"
                >
                  Location
                </Label>
                <select
                  id="location"
                  className="w-full h-11 border border-[#E7E5E4] bg-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Select Location</option>
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                </select>
              </div>
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

          <div className="mb-4 w-[1200px]">
            <SmallTitle smalltitle="Personal Info" />
            <hr className="border-b border-[#E5E5E5]" />
          </div>

          <div className="w-[1200px] space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              {/* Work Styl And Language */}
              <div className="w-full">
                <WorkPreferance />
              </div>
              {/* Gender */}
              <div className="w-full">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Language Spoken
                  </label>
                  <Select
                    defaultValue={[languageOptions[0], languageOptions[3]]} // Default: English, Bangla
                    isMulti
                    name="languages"
                    options={languageOptions}
                    className="basic-multi-select"
                    classNamePrefix="select"
                  />
                </div>
              </div>
            </div>
            {/* TIme */}
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              {/* Set Recurring */}
              <div className="w-full">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Set Recurring Availability
                  </label>
                  <TimePicker />
                </div>
              </div>
            </div>
          </div>

          {/* MOre Code */}

          <div className="w-[1200px] space-y-6">
            <ProfileForm />
          </div>

          {/* Save Button */}
          <div className="text-right w-[1200px] space-y-3 mt-10 mb-5 ">
            <hr className="border-b border-[#E5E5E5]" />
            <button className="bg-BorderHighlight hover:bg-BorderHighlight text-white px-6 py-2 rounded-lg font-medium cursor-pointer">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantProfile;
