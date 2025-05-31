import SmallTitle from "@/components/shared/Title/SmallTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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

const formSchema = z.object({
  dob: z.date().nullable(),
});

const Education = () => {
  const [click, setClick] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      dob: null,
    },
  });

  return (
    <div className="space-y-10 max-w-[780px] mx-auto px-4">
      {/* Education */}
      <section>
        <div className="mb-4">
          <SmallTitle smalltitle="Education" />
          <hr className="border-b border-[#E5E5E5]" />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label>Higher Degree</Label>
              <Select>
                <SelectTrigger className="w-full bg-white pt-6 pb-5">
                  <SelectValue placeholder="Select Your Degree" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Degree</SelectLabel>
                    <SelectItem value="cse">BSc in CSE</SelectItem>
                    <SelectItem value="bba">BBA</SelectItem>
                    <SelectItem value="mba">MBA</SelectItem>
                    <SelectItem value="msc">MSC</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-3">
              <Label>Institution Name</Label>
              <Input type="text" className="bg-white" />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Graduation Years</Label>
            <Select>
              <SelectTrigger className="w-full bg-white pt-6 pb-5">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Years</SelectLabel>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <button className="mt-2 text-[#8559CA] hover:underline text-sm">
            + Add Another Degree
          </button>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <div className="mb-4">
          <SmallTitle smalltitle="Certifications" />
          <hr className="border-b border-[#E5E5E5]" />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label>Full Name</Label>
              <Input type="text" placeholder="John Doe" className="bg-white" />
            </div>

            <div className="space-y-3">
              <Label>Institution Name</Label>
              <Input type="text" className="bg-white" />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Graduation Year</Label>
            <Select>
              <SelectTrigger className="w-full bg-white pt-6 pb-5">
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Years</SelectLabel>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <button className="mt-2 text-[#8559CA] hover:underline text-sm">
            + Add Another Degree
          </button>
        </div>
      </section>

      {/* Agreement */}
      <section className="space-y-3">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={click}
            onChange={(e) => setClick(e.target.checked)}
            className="mr-2 text-[#8559CA]"
          />
          I agree to the{" "}
          <a href="#" className="text-[#4D4D4D] underline">
            Terms & Conditions
          </a>
        </label>
        <hr className="border-b border-[#E5E5E5]" />
      </section>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4">
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white cursor-pointer">
          Back
        </button>
        <button className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer">
          Next
        </button>
      </div>
    </div>
  );
};

export default Education;
