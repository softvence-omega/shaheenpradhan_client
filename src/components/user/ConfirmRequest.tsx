import { useState } from "react";
import MediumTittle from "@/components/shared/Title/MediumTittle";
import ReuseBreadCrum from "@/components/shared/Title/ReuseBreadCrum";
import AssistantInfo from "@/components/shared/UserBooking/AssistantInfo";
import SmallTitle from "../shared/Title/SmallTitle";
import StepBooking from "./Shared/StepBooking";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { RiVisaFill } from "react-icons/ri";

const ConfirmRequest = () => {
  const [startDate, setStartDate] = useState("");
  const [overview, setOverview] = useState("");
  const [click, setClick] = useState(false);
  const [preferTime, setPreferTime] = useState("");

  const steps = [
    { completed: true }, // Step 1 - Assistant Info
    { completed: !!(startDate && preferTime) }, // Step 2 - Booking Info
    { completed: overview.length > 2 }, // Step 3 - Task Overview
    { completed: click },
  ];

  return (
    <div>
      <ReuseBreadCrum
        items={[
          { label: "Assistants", path: "/" },
          { label: "Esther Howard", path: "/components" },
          { label: "Interview Request", path: "/booking" },
        ]}
      />

      <MediumTittle
        mediumtittle="Book An Interview"
        description="Fill out the form to confirm  your booking"
      />

      <div className="sm:px-6 lg:px-1 w-full mx-auto font-sans mb-20 space-y-9">
        {/* Mobile StepBooking - shown only on small screens */}
        <div className="lg:hidden mb-8 mt-8">
          <StepBooking steps={steps} mobile />
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-10 mt-[37px]">
          {/* Desktop StepBooking - shown only on large screens */}
          <div className="hidden lg:block lg:col-span-1">
            <StepBooking steps={steps} />
          </div>

          <div className="gap-10 w-full">
            {/* Right Side - Booking Form */}
            <div className="lg:col-span-3 space-y-9">
              <div className="space-y-4">
                <SmallTitle smalltitle="Assistant Information" />
                <hr className="border-b border-[#E5E5E5]" />
              </div>
              <AssistantInfo />

              <section className="mb-6 space-y-4">
                <SmallTitle smalltitle="Interview Time Information" />
                <hr className="border-b border-[#E5E5E5]" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Pick a Date
                    </label>
                    <input
                      type="date"
                      className="w-full border px-3 py-2 rounded-lg bg-white text-ButtonBGPrimary cursor-pointer"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Prefer Time
                    </label>
                    <input
                      type="time"
                      className="w-full border px-3 py-2 rounded-lg bg-white text-ButtonBGPrimary cursor-pointer"
                      value={preferTime}
                      onChange={(e) => setPreferTime(e.target.value)}
                    />
                  </div>
                </div>
              </section>

              {/* Task Overview */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4 text-black">
                  Overview <span className="text-[#4D4D4D] ">(Optional)</span>
                </h2>
                <textarea
                  rows={4}
                  maxLength={1000}
                  className="w-full border px-3 py-2 rounded-lg bg-[#FAF8FD]"
                  placeholder="Type your message..."
                  value={overview}
                  onChange={(e) => setOverview(e.target.value)}
                />
                <p className="text-sm text-gray-500 text-right">
                  {1000 - overview.length} characters left
                </p>
              </section>

              {/* Payment Info */}
              <section className="mb-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">
                      Payment Information
                    </h2>
                  </div>
                  <div>
                    <div className="flex justify-end items-center gap-2 cursor-pointer">
                      <Select>
                        <SelectTrigger className="w-[68px] h-8 px-2 text-xs mb-2">
                          <SelectValue placeholder="AED" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="AED">AED</SelectItem>
                          <SelectItem value="USD">USD</SelectItem>
                          <SelectItem value="EUR">EUR</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <hr className="border-b border-[#E5E5E5]" />

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-[20px] mt-3 space-y-6">
                  <h4 className="font-medium">Total Hours:</h4>
                  <p className="col-span-1 sm:col-span-2">118</p>
                  <h4 className="font-medium">Rate Per Hour:</h4>
                  <p className="text-[#8559CA] col-span-1 sm:col-span-2">
                    AED 20.00
                  </p>

                  <h4 className="font-medium">Total Payable Amount:</h4>
                  <p className="text-[#8559CA]  col-span-1 sm:col-span-2">
                    AED 2360.00
                  </p>
                </div>

                <div className="mt-4">
                  <p className="font-medium mb-2 text-xl">Payment Method</p>
                  <div className="flex items-center gap-3">
                    <input type="radio" name="paymentMethod" defaultChecked />
                    <div className="flex items-center gap-2">
                      <RiVisaFill />
                      <span> ••• ••• ••• 1234</span>
                    </div>
                  </div>
                  <button className="text-[#8559CA] text-[16px] mt-2 cursor-pointer">
                    + Add New Payment Method
                  </button>
                </div>

                <div className="mt-4">
                  <label className="inline-flex items-center ">
                    <input
                      type="checkbox"
                      checked={click}
                      onChange={(e) => setClick(e.target.checked)}
                      className="mr-2 cursor-pointer"
                    />
                    I agree to the{" "}
                    <a href="#" className="text-[#4D4D4D] underline">
                      Terms & Conditions
                    </a>
                  </label>
                </div>
              </section>
              <hr className="border-b border-[#E5E5E5]" />
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row justify-end gap-4">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white">
                  Save Draft
                </button>
                <button className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700">
                  Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRequest;
