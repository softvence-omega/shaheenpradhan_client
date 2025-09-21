
// PersonalInfo.tsx (Modified)
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState, useEffect } from "react";

const formSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  dob: z.date().nullable(),
  location: z.string().min(1, "Location is required"),
});

interface PersonalInfoProps {
  onNext: () => void;
  onBack: () => void;
  data: any;
  updateData: (data: any) => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onNext, onBack, data, updateData }) => {
  const [profilePhoto, setProfilePhoto] = useState<File | null>(data.profilePhoto);

  const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setProfilePhoto(file);
      updateData({ profilePhoto: file });
    }
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: data.fullName || "",
      email: data.email || "",
      phone: data.phone || "",
      dob: data.dob || null,
      location: data.location || "",
    },
  });

  const onSubmit = (formValues: z.infer<typeof formSchema>) => {
    updateData({ ...formValues, profilePhoto });
    onNext();
  };

  return (
    <div className="">
      {/* Section Title */}
      <div className="mb-4 space-y-4">
        <SmallTitle smalltitle="Personal Info" />
        <hr className="border-b border-[#E5E5E5]" />
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Full Name & Profile Photo */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            {/* Full Name */}
            <div className="w-full">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="John Doe"
                        className="bg-white mt-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Profile Photo */}
            <div className="w-full">
              <Label className="block text-sm font-medium mb-3">
                Profile Photo
              </Label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="relative"
                  type="button"
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
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="example@gmail.com"
                        className="bg-white mt-2"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Phone */}
            <div className="w-full">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <div className="flex items-center border border-[#E7E5E4] rounded-lg mt-2">
                        <span className="bg-white px-3 border-r text-sm flex items-center gap-2">
                          🇦🇪 +971
                        </span>
                        <Input
                          {...field}
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="flex-1 px-3 border-none outline-none bg-white"
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Date of Birth & Location */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            {/* Date of Birth */}
            <div className="w-full">
              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of Birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <div className="relative flex w-full cursor-pointer">
                          <Input
                            value={field.value ? format(field.value, "PPP") : ""}
                            readOnly
                            placeholder="Pick a date"
                            className="bg-background pr-10"
                          />
                          <CalendarIcon className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 opacity-50" />
                        </div>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 z-50" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ?? undefined}
                          onSelect={(date) => field.onChange(date)}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Location */}
            <div className="w-full">
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full bg-white pt-6 pb-5">
                          <SelectValue placeholder="Select Location" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>North America</SelectLabel>
                          <SelectItem value="us-canada">
                            United States, Canada
                          </SelectItem>
                          <SelectItem value="us-mexico">
                            United States, Mexico
                          </SelectItem>
                          <SelectItem value="canada">
                            Canada Only
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-4 mt-5">
            <button
              type="button"
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
              onClick={onBack}
              disabled={true}
              style={{ opacity: 0.5 }}
            >
              Back
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer"
            >
              Next
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default PersonalInfo;



// import SmallTitle from "@/components/shared/Title/SmallTitle";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { CalendarIcon, Upload } from "lucide-react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { format } from "date-fns";
// import { cn } from "@/lib/utils"; // Update path if necessary
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import React, { useState } from "react";
// import FormNav from "./FormNav";
// import Wrapper from "@/components/shared/Wrapper";
// import TittleBig from "@/components/shared/Title/TittleBig";


// // Zod schema
// const formSchema = z.object({
//   dob: z.date().nullable(),
// });

// const PersonalInfo = () => {
//   const [profilePhoto, setProfilePhoto] = useState<File | null>(null);
//   const [open, setOpen] = useState(false);

//   const handlePhotoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const file = event.target.files?.[0];
//     if (file) {
//       setProfilePhoto(file);
//     }
//   };

//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       dob: null,
//     },
//   });

//   const onSubmit = (data: z.infer<typeof formSchema>) => {
//     console.log("Submitted:", { ...data, profilePhoto });
//   };

//   return (
//     <Wrapper>
//       <FormNav />
//       <div className="w-full md:w-3/4 mx-auto">
//         <div className="w-full flex justify-center mx-auto text-center mb-10 md:mb-14">
//           <TittleBig bigtittle="Join the Adminity Assistant network" />
//         </div>
//         <div className="">
//           {/* Section Title */}
//           <div className="mb-4 space-y-4">
//             <SmallTitle smalltitle="Personal Info" />
//             <hr className="border-b border-[#E5E5E5]" />
//           </div>

//           {/* ✅ Only ONE Form wrapper */}
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               {/* Full Name & Profile Photo */}
//               <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
//                 {/* Full Name */}
//                 <div className="w-full">
//                   <Label htmlFor="fullName">Full Name</Label>
//                   <Input
//                     type="text"
//                     id="fullName"
//                     placeholder="John Doe"
//                     className="bg-white mt-2"
//                   />
//                 </div>

//                 {/* Profile Photo */}
//                 <div className="w-full">
//                   <Label
//                     htmlFor="profile-photo"
//                     className="block text-sm font-medium mb-3"
//                   >
//                     Profile Photo
//                   </Label>
//                   <div className="flex items-center gap-3">
//                     <Button
//                       variant="outline"
//                       size="sm"
//                       className="relative"
//                       type="button"
//                       onClick={() =>
//                         document.getElementById("photo-upload")?.click()
//                       }
//                     >
//                       <Upload className="w-4 h-4 mr-2" />
//                       Upload a photo
//                       <input
//                         id="photo-upload"
//                         type="file"
//                         accept="image/*"
//                         className="absolute inset-0 opacity-0 cursor-pointer"
//                         onChange={handlePhotoUpload}
//                       />
//                     </Button>
//                     <span className="text-sm text-gray-500">
//                       {profilePhoto ? profilePhoto.name : "No file uploaded"}
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               {/* Email & Phone */}
//               <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
//                 {/* Email */}
//                 <div className="w-full">
//                   <Label htmlFor="email">Email Address</Label>
//                   <Input
//                     type="email"
//                     id="email"
//                     placeholder="example@gmail.com"
//                     className="bg-white mt-2"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div className="w-full">
//                   <Label htmlFor="phone">Phone Number</Label>
//                   <div className="flex items-center border border-[#E7E5E4] rounded-lg  mt-2">
//                     <span className="bg-white px-3 border-r text-sm flex items-center gap-2">
//                       🇦🇪 +971
//                     </span>
//                     <Input
//                       type="tel"
//                       id="phone"
//                       placeholder="(555) 123-4567"
//                       className="flex-1 px-3 border-none outline-none bg-white"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Date of Birth & Location */}
//               <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center">
//                 {/* ✅ Date of Birth */}

//                 <div className="w-full">
//                   <FormField
//                     control={form.control}
//                     name="dob"
//                     render={({ field }) => (
//                       <FormItem className="flex flex-col ">
//                         <FormLabel>Date of Birth</FormLabel>
//                         <Popover>
//                           <PopoverTrigger asChild>
//                             <div
//                               className="relative flex w-full cursor-pointer"
//                             >
//                               <Input
//                                 value={field.value ? format(field.value, "PPP") : ""}
//                                 readOnly
//                                 placeholder="Pick a date"
//                                 className="bg-background pr-10"
//                               />
//                               <CalendarIcon className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 opacity-50" />
//                             </div>
//                           </PopoverTrigger>

//                           <PopoverContent className="w-auto p-0 z-50" align="start">
//                             <Calendar
//                               mode="single"
//                               selected={field.value ?? undefined}
//                               onSelect={(date) => {
//                                 field.onChange(date)
//                               }}
//                               disabled={(date) =>
//                                 date > new Date() || date < new Date("1900-01-01")
//                               }
//                               initialFocus
//                             />
//                           </PopoverContent>
//                         </Popover>
//                         <FormMessage />
//                       </FormItem>
//                     )}
//                   />

//                 </div>

//                 {/* Location */}
//                 <div className="w-full">
//                   <Label className="mb-2" htmlFor="location">Location</Label>
//                   <Select>
//                     <SelectTrigger className="w-full bg-white pt-6 pb-5">
//                       <SelectValue placeholder="Select Location" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       <SelectGroup>
//                         <SelectLabel>North America</SelectLabel>
//                         <SelectItem value="us-canada">
//                           United States, Canada
//                         </SelectItem>
//                         <SelectItem value="us-mexico">
//                           United States, Mexico
//                         </SelectItem>
//                         <SelectItem value="canada">
//                           Canada Only
//                         </SelectItem>
//                       </SelectGroup>
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex flex-col sm:flex-row justify-end gap-4 mt-5">
//                 <button
//                   type="button"
//                   className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
//                 >
//                   Back
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer"
//                 >
//                   Next
//                 </button>
//               </div>
//             </form>
//           </Form>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };


// export default PersonalInfo;