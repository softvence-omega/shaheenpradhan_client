import SmallTitle from "@/components/shared/Title/SmallTitle";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils"; // Update path if necessary
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

// Zod schema
const formSchema = z.object({
  dob: z.date().nullable(),
});

const PersonalInfo = () => {
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
    <div className=" max-w-[780px] mx-auto">
      <div>
        <div className="">
          {/* Section Title */}
          <div className="mb-4 ">
            <SmallTitle smalltitle="Personal Info" />
            <hr className="border-b border-[#E5E5E5]" />
          </div>

          <div className=" space-y-6">
            {/* Full Name & Gender */}
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              {/* Full Name */}
              <div className="w-full">
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                  </div>
                  <div>
                    <Input
                      type="text"
                      id="fullName"
                      placeholder="John Doe"
                      className="bg-white"
                    />
                  </div>
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

            {/* Email & Phone */}
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              {/* Email */}
              <div className="w-full">
                <Label
                  htmlFor="email"
                  className="mb-1 block text-sm font-medium text-[#4D4D4D]"
                >
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  className="bg-white"
                />
              </div>
              {/* Phone */}
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

            {/* Date of Birth & Location */}
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
              {/* Date of Birth */}
              <div className="w-full">
                <Form {...form}>
                  <form className="space-y-8">
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date of Birth</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={cn(
                                    "w-full h-11 text-left font-normal",
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
                <Select>
                  <SelectTrigger className="w-full bg-white pt-6 pb-5">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>North America</SelectLabel>
                      <SelectItem value="est">United States, Canada</SelectItem>
                      <SelectItem value="cst">United States, Mexico</SelectItem>
                      <SelectItem value="mst">United States, Canada</SelectItem>
                      <SelectItem value="pst">United States, Canada</SelectItem>
                      <SelectItem value="akst">United States</SelectItem>
                      <SelectItem value="hst">United States</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-5">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white  cursor-pointer">
          Back
        </button>
        <button className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700  cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
