import { useState } from "react";
import { Link } from "react-router-dom";
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
import DialogBookingConfirmation from "@/pages/user/DialogBookingConfirmation";

const ConfirmBooking = () => {
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [overview, setOverview] = useState("");
  const [click, setClick] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const steps = [
    { completed: true },
    { completed: !!(startDate && endDate && location) },
    { completed: overview.length > 2 },
    { completed: click },
  ];

  const handleBookNow = () => {
    if (steps.every((step) => step.completed)) {
      setShowDialog(true);
    } else {
      alert("Please complete all steps before booking.");
    }
  };

  return (
    <div>
      {showDialog && (
        <DialogBookingConfirmation onClose={() => setShowDialog(false)} />
      )}

      <ReuseBreadCrum
        items={[
          { label: "Assistants", path: "/" },
          { label: "Esther Howard", path: "/components" },
          { label: "Booking", path: "/booking" },
        ]}
      />

      <MediumTittle
        mediumtittle="Confirm Your Booking"
        description="Fill out the form to confirm  your booking."
      />

      <div className="sm:px-6 lg:px-1 w-full mx-auto mb-20 space-y-9 font-DMsans">
        <div className="flex space-x-10">
          <div className="lg:col-span-1">
            <StepBooking steps={steps} />
          </div>
          <div className="gap-10 w-full">
            <div className="lg:col-span-3 space-y-9">
              {/* Assistant Info */}
              <div>
                <SmallTitle smalltitle="Assistant Information" />
                <hr className="border-b border-[#E5E5E5]" />
              </div>
              <AssistantInfo />

              {/* Booking Info */}
              <section className="mb-6 space-y-4">
                <SmallTitle smalltitle="Booking Information" />
                <hr className="border-b border-[#E5E5E5]" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Start Date
                    </label>
                    <input
                      type="date"
                      className="w-full border px-3 py-2 rounded-lg bg-white"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      End Date
                    </label>
                    <input
                      type="date"
                      className="w-full border px-3 py-2 rounded-lg bg-white"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Time Zone (Working Hours)
                    </label>
                    <select className="w-full border px-3 py-2 rounded-lg bg-white">
                      <option>From 05:30 PM to 05:30 PM (GMT+4)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">
                      Job Type
                    </label>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <label>
                        <input type="radio" name="jobType" /> Remote
                      </label>
                      <label>
                        <input type="radio" name="jobType" defaultChecked /> In
                        Person
                      </label>
                      <label>
                        <input type="radio" name="jobType" /> Either
                      </label>
                    </div>
                  </div>
                  <div className="col-span-1 sm:col-span-2">
                    <label className="block text-sm font-medium mb-1">
                      Location
                    </label>
                    <select
                      className="w-full border px-3 py-2 rounded-lg bg-white"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    >
                      <option value="">Select Location</option>
                      <option value="dubai">Dubai</option>
                      <option value="abu-dhabi">Abu Dhabi</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Task Overview */}
              <section className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Task Overview</h2>
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
                  <h2 className="text-xl font-semibold mb-4">
                    Payment Information
                  </h2>
                  <div className="flex justify-end items-center gap-2">
                    <Select>
                      <SelectTrigger className="w-[68px] h-8 px-2 text-xs">
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
                <hr className="border-b border-[#E5E5E5]" />

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-[20px] mt-3 space-y-6">
                  <div className="font-medium">Total Hours:</div>
                  <div className="col-span-2">118</div>
                  <div className="font-medium">Rate Per Hour:</div>
                  <div className="text-[#8559CA] col-span-2">AED 20.00</div>
                  <div className="font-medium">Total Payable Amount:</div>
                  <div className="text-[#8559CA] col-span-2">AED 2360.00</div>
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
                  <button className="text-[#8559CA] text-[16px] mt-2">
                    + Add New Payment Method
                  </button>
                </div>

                <div className="mt-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      checked={click}
                      onChange={(e) => setClick(e.target.checked)}
                      className="mr-2"
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
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white cursor-pointer">
                  Save Draft
                </button>
                <button
                  className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer"
                  onClick={handleBookNow}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmBooking;
