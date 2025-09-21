
// Education.tsx (Modified)
import SmallTitle from "@/components/shared/Title/SmallTitle";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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

interface EducationProps {
  onBack: () => void;
  onSave: () => void;
  onSkip: () => void;
  data: any;
  updateData: (data: any) => void;
}

const Education: React.FC<EducationProps> = ({ onBack, onSave, onSkip, data, updateData }) => {
  const [higherDegree, setHigherDegree] = useState(data.higherDegree || "");
  const [institutionName, setInstitutionName] = useState(data.institutionName || "");
  const [graduationYear, setGraduationYear] = useState(data.graduationYear || "");
  const [certificationName, setCertificationName] = useState("");
  const [certificationInstitution, setCertificationInstitution] = useState("");
  const [certificationYear, setCertificationYear] = useState("");
  const [certifications, setCertifications] = useState(data.certifications || []);
  const [termsAccepted, setTermsAccepted] = useState(data.termsAccepted || false);

  const handleSave = () => {
    // Update final data before saving
    updateData({
      higherDegree,
      institutionName,
      graduationYear,
      certifications,
      termsAccepted,
    });
    onSave();
  };

  const addCertification = () => {
    if (certificationName && certificationInstitution && certificationYear) {
      setCertifications(prev => [...prev, {
        name: certificationName,
        institution: certificationInstitution,
        year: certificationYear,
      }]);
      setCertificationName("");
      setCertificationInstitution("");
      setCertificationYear("");
    }
  };

  return (
    <div className="">
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
              <Select value={higherDegree} onValueChange={setHigherDegree}>
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
              <Input 
                type="text" 
                className="bg-white" 
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Graduation Years</Label>
            <Select value={graduationYear} onValueChange={setGraduationYear}>
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
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
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
      <section className="mt-8">
        <div className="mb-4">
          <SmallTitle smalltitle="Certifications" />
          <hr className="border-b border-[#E5E5E5]" />
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <Label>Certification Name</Label>
              <Input 
                type="text" 
                placeholder="Enter certification name" 
                className="bg-white" 
                value={certificationName}
                onChange={(e) => setCertificationName(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Label>Institution Name</Label>
              <Input 
                type="text" 
                className="bg-white" 
                value={certificationInstitution}
                onChange={(e) => setCertificationInstitution(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label>Certification Year</Label>
            <Select value={certificationYear} onValueChange={setCertificationYear}>
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
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2020">2020</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <button 
            onClick={addCertification}
            className="mt-2 text-[#8559CA] hover:underline text-sm"
          >
            + Add Certification
          </button>

          {/* Display added certifications */}
          {certifications.length > 0 && (
            <div className="mt-4">
              <Label>Added Certifications:</Label>
              <div className="space-y-2 mt-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg">
                    <p className="font-medium">{cert.name}</p>
                    <p className="text-sm text-gray-600">{cert.institution} - {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Agreement */}
      <section className="space-y-3 mt-8">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            className="mr-2 text-[#8559CA]"
          />
          I agree to the{" "}
          <a href="#" className="text-[#4D4D4D] underline ml-1">
            Terms & Conditions
          </a>
        </label>
        <hr className="border-b border-[#E5E5E5]" />
      </section>

      {/* Navigation Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
        <button
          className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 cursor-pointer"
          onClick={onBack}
        >
          Back
        </button>
        <button
          className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 cursor-pointer"
          onClick={onSkip}
        >
          Skip
        </button>
        <button
          className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer"
          onClick={handleSave}
          disabled={!termsAccepted}
          style={{ opacity: termsAccepted ? 1 : 0.5 }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Education;

// import SmallTitle from "@/components/shared/Title/SmallTitle";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectLabel,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";

// import { useState } from "react";
// import Wrapper from "@/components/shared/Wrapper";

// const formSchema = z.object({
//   dob: z.date().nullable(),
// });

// const Education = () => {
//   const [click, setClick] = useState(false);
//   const form = useForm<z.infer<typeof formSchema>>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       dob: null,
//     },
//   });

//   return (
//     <Wrapper>
//       <div className="w-full md:w-3/4 mx-auto">
//         {/* Education */}
//         <section>
//           <div className="mb-4">
//             <SmallTitle smalltitle="Education" />
//             <hr className="border-b border-[#E5E5E5]" />
//           </div>

//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-3">
//                 <Label>Higher Degree</Label>
//                 <Select>
//                   <SelectTrigger className="w-full bg-white pt-6 pb-5">
//                     <SelectValue placeholder="Select Your Degree" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectGroup>
//                       <SelectLabel>Degree</SelectLabel>
//                       <SelectItem value="cse">BSc in CSE</SelectItem>
//                       <SelectItem value="bba">BBA</SelectItem>
//                       <SelectItem value="mba">MBA</SelectItem>
//                       <SelectItem value="msc">MSC</SelectItem>
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-3">
//                 <Label>Institution Name</Label>
//                 <Input type="text" className="bg-white" />
//               </div>
//             </div>

//             <div className="space-y-3">
//               <Label>Graduation Years</Label>
//               <Select>
//                 <SelectTrigger className="w-full bg-white pt-6 pb-5">
//                   <SelectValue placeholder="Select Year" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Years</SelectLabel>
//                     <SelectItem value="2025">2025</SelectItem>
//                     <SelectItem value="2024">2024</SelectItem>
//                     <SelectItem value="2023">2023</SelectItem>
//                     <SelectItem value="2022">2022</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             </div>

//             <button className="mt-2 text-[#8559CA] hover:underline text-sm">
//               + Add Another Degree
//             </button>
//           </div>
//         </section>

//         {/* Certifications */}
//         <section>
//           <div className="mb-4">
//             <SmallTitle smalltitle="Certifications" />
//             <hr className="border-b border-[#E5E5E5]" />
//           </div>

//           <div className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="space-y-3">
//                 <Label>Full Name</Label>
//                 <Input type="text" placeholder="John Doe" className="bg-white" />
//               </div>

//               <div className="space-y-3">
//                 <Label>Institution Name</Label>
//                 <Input type="text" className="bg-white" />
//               </div>
//             </div>

//             <div className="space-y-3">
//               <Label>Graduation Year</Label>
//               <Select>
//                 <SelectTrigger className="w-full bg-white pt-6 pb-5">
//                   <SelectValue placeholder="Select Year" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     <SelectLabel>Years</SelectLabel>
//                     <SelectItem value="2025">2025</SelectItem>
//                     <SelectItem value="2024">2024</SelectItem>
//                     <SelectItem value="2023">2023</SelectItem>
//                     <SelectItem value="2022">2022</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             </div>

//             <button className="mt-2 text-[#8559CA] hover:underline text-sm">
//               + Add Another Degree
//             </button>
//           </div>
//         </section>

//         {/* Agreement */}
//         <section className="space-y-3">
//           <label className="inline-flex items-center">
//             <input
//               type="checkbox"
//               checked={click}
//               onChange={(e) => setClick(e.target.checked)}
//               className="mr-2 text-[#8559CA]"
//             />
//             I agree to the{" "}
//             <a href="#" className="text-[#4D4D4D] underline">
//               Terms & Conditions
//             </a>
//           </label>
//           <hr className="border-b border-[#E5E5E5]" />
//         </section>

//         {/* Navigation Buttons */}
//         <div className="flex flex-col sm:flex-row justify-end gap-4">
//           <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-white cursor-pointer">
//             Back
//           </button>
//           <button className="px-4 py-2 bg-[#B655DA] text-white rounded-lg hover:bg-purple-700 cursor-pointer">
//             Next
//           </button>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// export default Education;
