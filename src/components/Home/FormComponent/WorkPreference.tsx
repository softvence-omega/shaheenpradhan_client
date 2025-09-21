// WorkPreference.tsx (Modified)
import TimePicker from "@/components/assistant/TimePicker";
import { WorkPreferance } from "@/components/assistant/WorkPreferance";
import SmallTitle from "@/components/shared/Title/SmallTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState, useEffect } from "react";
import ReactSelect from "react-select";

const languageOptions = [
  { value: "english", label: "English" },
  { value: "spanish", label: "Spanish" },
  { value: "french", label: "French" },
  { value: "german", label: "German" },
];

interface WorkPreferenceProps {
  onNext: () => void;
  onBack: () => void;
  data: any;
  updateData: (data: any) => void;
}

const WorkPreference: React.FC<WorkPreferenceProps> = ({ onNext, onBack, data, updateData }) => {
  const [rateCurrency, setRateCurrency] = useState(data.rateCurrency || "USD");
  const [rateAmount, setRateAmount] = useState(data.rateAmount || "");
  const [selectedLanguages, setSelectedLanguages] = useState(data.languages || []);
  const [availableDays, setAvailableDays] = useState(data.availableDays || ["Sun", "Mon", "Tue", "Wed", "Thu"]);

  const handleNext = () => {
    updateData({
      rateCurrency,
      rateAmount,
      languages: selectedLanguages,
      availableDays,
    });
    onNext();
  };

  const handleDayChange = (day: string, checked: boolean) => {
    if (checked) {
      setAvailableDays(prev => [...prev, day]);
    } else {
      setAvailableDays(prev => prev.filter(d => d !== day));
    }
  };

  return (
    <div className="">
      <div className="mb-4">
        <SmallTitle smalltitle="Work Preference" />
        <hr className="border-b border-[#E5E5E5]" />
      </div>

      <div className="space-y-6">
        {/* Work Style and Language */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          {/* Work Preference */}
          <div className="w-full">
            <WorkPreferance />
          </div>

          {/* Language Spoken */}
          <div className="w-full">
            <div className="space-y-3">
              <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700">
                Language Spoken
              </label>
              <ReactSelect
                value={selectedLanguages}
                onChange={setSelectedLanguages}
                name="languages"
                options={languageOptions}
                isMulti
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </div>
          </div>
        </div>

        {/* Available Hours Per Day */}
        <div className="w-full space-y-3">
          <label className="text-black text-[18px] font-medium">
            Available Hours Per Day
          </label>
          <div className="bg-white w-full md:w-[380px] border border-[#E7E5E4] rounded-lg px-3 py-1 shadow-sm">
            <TimePicker />
          </div>
        </div>

        {/* Available Days */}
        <div className="space-y-3">
          <div>
            <label className="text-black font-medium text-[18px]">
              Available Days{" "}
              <span className="text-gray-500 font-normal text-[16px]">
                (Select All that Apply)
              </span>
            </label>
          </div>
          <div className="flex flex-wrap gap-3">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <label
                key={day}
                className="flex items-center gap-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={availableDays.includes(day)}
                  onChange={(e) => handleDayChange(day, e.target.checked)}
                  className="accent-[#8559CA] w-[18px] h-[18px]"
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        {/* Rate Per Hour */}
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
          <div className="w-full md:max-w-sm space-y-3">
            <Label className="block text-sm font-medium text-black">
              Rate Per Hour
            </Label>
            <div className="flex rounded-md shadow-sm border bg-white border-[#E7E5E4] overflow-hidden focus-within:ring-2 focus-within:ring-primary">
              <Select value={rateCurrency} onValueChange={setRateCurrency}>
                <SelectTrigger className="w-24 rounded-none border-none focus:ring-0 focus:outline-none">
                  <SelectValue placeholder="Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
              <Input
                placeholder="Enter amount"
                className="flex-1 rounded-none border-l border-[#E7E5E4] focus:ring-0 focus:outline-none"
                value={rateAmount}
                onChange={(e) => setRateAmount(e.target.value)}
                type="number"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-6">
        <hr className="border-b border-[#E5E5E5]" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-5">
        <button 
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onBack}
        >
          Back
        </button>
        <button 
          className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WorkPreference;



// import TimePicker from "@/components/assistant/TimePicker";
// import { WorkPreferance } from "@/components/assistant/WorkPreferance";
// import SmallTitle from "@/components/shared/Title/SmallTitle";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useState } from "react";
// import ReactSelect from "react-select";
// import Wrapper from "@/components/shared/Wrapper";

// const languageOptions = [
//   { value: "english", label: "English" },
//   { value: "spanish", label: "Spanish" },
//   { value: "french", label: "French" },
//   { value: "german", label: "German" },
// ];

// const WorkPreference = () => {
//   const [rateCurrency, setRateCurrency] = useState("USD");
//   const [rateAmount, setRateAmount] = useState("");

//   return (
//     <Wrapper>
//       <div className="w-full md:w-3/4 mx-auto">
//         <div className="mb-4">
//           <SmallTitle smalltitle="Work Preference" />
//           <hr className="border-b border-[#E5E5E5]" />
//         </div>

//         <div className="space-y-6">
//           {/* Work Style and Language */}
//           <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
//             {/* Work Preference */}
//             <div className="w-full">
//               <WorkPreferance />
//             </div>

//             {/* Language Spoken */}
//             <div className="w-full">
//               <div className="space-y-3">
//                 <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700">
//                   Language Spoken
//                 </label>
//                 <ReactSelect
//                   defaultValue={languageOptions[0]}
//                   name="languages"
//                   options={languageOptions}
//                   isMulti
//                   className="basic-multi-select"
//                   classNamePrefix="select"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Available Hours Per Day */}
//           <div className="w-full space-y-3">
//             <label className="text-black text-[18px] font-medium">
//               Available Hours Per Day
//             </label>
//             <div className="bg-white w-full md:w-[380px] border border-[#E7E5E4] rounded-lg px-3 py-1 shadow-sm">
//               <TimePicker />
//             </div>
//           </div>

//           {/* Available Days */}
//           <div className="space-y-3">
//             <div>
//               <label className="text-black font-medium text-[18px]">
//                 Available Days{" "}
//                 <span className="text-gray-500 font-normal text-[16px]">
//                   (Select All that Apply)
//                 </span>
//               </label>
//             </div>
//             <div className="flex flex-wrap gap-3">
//               {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
//                 <label
//                   key={day}
//                   className="flex items-center gap-1 cursor-pointer"
//                 >
//                   <input
//                     type="checkbox"
//                     defaultChecked={["Sun", "Mon", "Tue", "Wed", "Thu"].includes(
//                       day
//                     )}
//                     className="accent-[#8559CA] w-[18px] h-[18px]"
//                   />
//                   {day}
//                 </label>
//               ))}
//             </div>
//           </div>

//           {/* Rate Per Hour */}
//           <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
//             <div className="w-full md:max-w-sm space-y-3">
//               <Label className="block text-sm font-medium text-black">
//                 Rate Per Hour
//               </Label>
//               <div className="flex rounded-md shadow-sm border bg-white border-[#E7E5E4] overflow-hidden focus-within:ring-2 focus-within:ring-primary">
//                 <Select value={rateCurrency} onValueChange={setRateCurrency}>
//                   <SelectTrigger className="w-24 rounded-none border-none focus:ring-0 focus:outline-none">
//                     <SelectValue placeholder="Currency" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="USD">USD</SelectItem>
//                     <SelectItem value="EUR">EUR</SelectItem>
//                     <SelectItem value="GBP">GBP</SelectItem>
//                   </SelectContent>
//                 </Select>
//                 <Input
//                   placeholder="Enter amount"
//                   className="flex-1 rounded-none border-l border-[#E7E5E4] focus:ring-0 focus:outline-none"
//                   value={rateAmount}
//                   onChange={(e) => setRateAmount(e.target.value)}
//                   type="number"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="mt-6">
//           <hr className="border-b border-[#E5E5E5]" />
//         </div>

//         {/* Buttons */}
//         <div className="flex flex-col sm:flex-row justify-end gap-4 mt-5">
//           <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white  cursor-pointer">
//             Back
//           </button>
//           <button className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700  cursor-pointer">
//             Next
//           </button>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default WorkPreference;
