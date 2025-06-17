import Star from "@/assets/icon/Star";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Love from "@/assets/icon/Love";
import { Check } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Link } from "react-router-dom";

const assistants = [
  {
    id: 1,
    name: "Neha Mayumi",
    role: "Event Specialist",
    rating: "4.9",
    maxRating: "5",
    skills: ["ui/ux", "accounting", "communication", "+5"],
    languages: ["English", "Arabic", "Hindi"],
    rate: "20",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 2,
    name: "John Doe",
    role: "Marketing Specialist",
    rating: "4.7",
    maxRating: "5",
    skills: ["marketing", "social media", "content creation", "+3"],
    languages: ["English", "Spanish"],
    rate: "25",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 3,
    name: "Sarah Smith",
    role: "Graphic Designer",
    rating: "4.8",
    maxRating: "5",
    skills: ["photoshop", "illustrator", "branding", "+4"],
    languages: ["English", "French"],
    rate: "30",
    available: true,
    availabilityType: "On-site",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 4,
    name: "Michael Johnson",
    role: "Web Developer",
    rating: "4.9",
    maxRating: "5",
    skills: ["javascript", "react", "node.js", "+6"],
    languages: ["English", "German"],
    rate: "35",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 5,
    name: "Emily Wilson",
    role: "Content Writer",
    rating: "4.6",
    maxRating: "5",
    skills: ["copywriting", "editing", "SEO", "+2"],
    languages: ["English", "Italian"],
    rate: "22",
    available: true,
    availabilityType: "Hybrid",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 6,
    name: "David Brown",
    role: "Data Analyst",
    rating: "4.8",
    maxRating: "5",
    skills: ["python", "sql", "data visualization", "+5"],
    languages: ["English", "Mandarin"],
    rate: "28",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 7,
    name: "Jessica Lee",
    role: "Project Manager",
    rating: "4.7",
    maxRating: "5",
    skills: ["agile", "scrum", "team leadership", "+4"],
    languages: ["English", "Korean"],
    rate: "32",
    available: true,
    availabilityType: "Hybrid",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 8,
    name: "Robert Chen",
    role: "UX Designer",
    rating: "4.9",
    maxRating: "5",
    skills: ["wireframing", "user research", "prototyping", "+3"],
    languages: ["English", "Mandarin"],
    rate: "38",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 9,
    name: "Sophia Martinez",
    role: "SEO Specialist",
    rating: "4.5",
    maxRating: "5",
    skills: ["keyword research", "analytics", "link building", "+2"],
    languages: ["English", "Spanish"],
    rate: "26",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 10,
    name: "Daniel Wilson",
    role: "Mobile Developer",
    rating: "4.8",
    maxRating: "5",
    skills: ["flutter", "dart", "firebase", "+4"],
    languages: ["English", "Portuguese"],
    rate: "34",
    available: true,
    availabilityType: "Hybrid",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 11,
    name: "Olivia Thompson",
    role: "HR Consultant",
    rating: "4.7",
    maxRating: "5",
    skills: ["recruitment", "training", "employee relations", "+3"],
    languages: ["English", "French"],
    rate: "29",
    available: true,
    availabilityType: "On-site",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 12,
    name: "James Rodriguez",
    role: "DevOps Engineer",
    rating: "4.9",
    maxRating: "5",
    skills: ["docker", "kubernetes", "aws", "+5"],
    languages: ["English", "Spanish"],
    rate: "42",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 13,
    name: "Emma Garcia",
    role: "Social Media Manager",
    rating: "4.6",
    maxRating: "5",
    skills: ["content strategy", " management", "analytics", "+3"],
    languages: ["English", "Spanish"],
    rate: "27",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 14,
    name: "William Kim",
    role: "Financial Analyst",
    rating: "4.8",
    maxRating: "5",
    skills: ["financial modeling", "excel", "data analysis", "+4"],
    languages: ["English", "Korean"],
    rate: "36",
    available: true,
    availabilityType: "Hybrid",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 15,
    name: "Ava Patel",
    role: "Customer Support",
    rating: "4.7",
    maxRating: "5",
    skills: ["zendesk", "troubleshooting", "communication", "+2"],
    languages: ["English", "Hindi"],
    rate: "23",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
  {
    id: 16,
    name: "Lucas Müller",
    role: "Backend Developer",
    rating: "4.9",
    maxRating: "5",
    skills: ["java", "spring boot", "microservices", "+5"],
    languages: ["English", "German"],
    rate: "40",
    available: true,
    availabilityType: "Remote",
    avatar: "https://github.com/shadcn.png",
  },
];

const BookingCardFind = () => {
  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 font-DMsans pb-5">
        {assistants.map((assistant) => (
          <div
            key={assistant.id}
            className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10"
          >
            <div className="flex item-center justify-between space-y-3">
              <div className="flex sm:item-center justify-between space-x-4">
                <div className="relative w-fit">
                  <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
                    <AvatarImage src={assistant.avatar} alt={assistant.name} />
                    <AvatarFallback>
                      {assistant.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
                    <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
                    <p className="text-xs font-medium">{assistant.rating}</p>
                    <p className="text-xs font-medium">{assistant.maxRating}</p>
                  </div>
                </div>

                <div className="">
                  <h1 className="font-semibold text-sm sm:text-[15px]">
                    {assistant.name}
                  </h1>
                  <p className="text-sm sm:text-[15px] font-light">
                    {assistant.role}
                  </p>
                </div>
              </div>
              <Love className="w-8 h-8 rounded-full p-2 bg-[#E6DDF8]" />
            </div>

            <h1 className="text-[#16CC71]">Available Now</h1>
            <div className="flex items-center justify-between my-4">
              <h1 className="text-xs sm:text-[15px] font-semibold">
                Availability :
              </h1>
              <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
                <Check className="w-4 h-4" />
                <span className="text-xs sm:text-[15px]">
                  {assistant.availabilityType}
                </span>
              </p>
            </div>

            {/* SKILLS SECTION */}
            <div className="flex items-center flex-wrap gap-3">
              <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
              {assistant.skills.map((skill, index) => (
                <p
                  key={index}
                  className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light"
                >
                  {skill}
                </p>
              ))}
            </div>

            {/* LANGUAGE SECTION */}
            <div className="flex items-center justify-between my-4">
              <h1 className="text-xs sm:text-[15px] font-semibold">
                Language:
              </h1>
              <p className="flex items-center gap-2">
                {assistant.languages.map((language, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-[15px] font-light"
                  >
                    {language}
                  </span>
                ))}
              </p>
            </div>

            {/* RATE SECTION */}
            <div className="flex items-center justify-between my-4">
              <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10 focus:ring-1 focus:ring-primary focus:border-gray-900/10">
                    <SelectValue placeholder="AED" />
                  </SelectTrigger>
                  <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
                    <SelectGroup>
                      <SelectItem value="usd">USD</SelectItem>
                      <SelectItem value="eur">EUR</SelectItem>
                      <SelectItem value="aed">AED</SelectItem>
                      <SelectItem value="gbp">GBP</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <div className="flex items-baseline">
                  <span className="font-bold text-[20px]">
                    {assistant.rate}
                  </span>
                  <span className="font-medium text-xs text-muted-foreground ml-1">
                    /hours
                  </span>
                </div>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="w-full h-[1px] bg-gray-900/10" />

            {/* BUTTON SECTION */}
            <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
              <Link to="/user/assistant-request-confirm">
                <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
                  Request Interview
                </Button>
              </Link>
              <Link to="/user/assistant-booking">
                <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCardFind;

// import React from "react";
// import Star from "@/assets/icon/Star";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import Love from "@/assets/icon/Love";
// import { Check } from "lucide-react";
// import { Button } from "../ui/button";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "../ui/select";
// import { Link } from "react-router-dom";

// const BookingCardFind = () => {
//   return (
//     <div className="py-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 font-DMsans pb-5">
//         <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10">
//           <div className="flex item-center justify-between space-y-3">
//             <div className="flex sm:item-center justify-between space-x-4">
//               {/* Avatar section with relative container for positioning */}
//               <div className="relative w-fit">
//                 <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>

//                 {/* Star Rating Badge */}
//                 <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                   <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                   <p className="text-xs font-medium">4.9</p>
//                   <p className="text-xs font-medium">5</p>
//                 </div>
//               </div>

//               <div className="">
//                 <h1 className="font-semibold text-sm sm:text-[15px]">
//                   Neha Mayumi
//                 </h1>
//                 <p className="text-sm sm:text-[15px] font-light">
//                   Event Specialist
//                 </p>
//               </div>
//             </div>
//             <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
//           </div>

//           <h1>Available Now</h1>
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">
//               Availability :
//             </h1>
//             <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
//               <Check className="w-4 h-4 " />{" "}
//               <span className="text-xs sm:text-[15px]">Remote</span>
//             </p>
//           </div>

//           {/* SKILLS SECTION */}
//           <div className="flex items-center flex-wrap gap-3">
//             <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               ui/ux
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               accounting
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               communication
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               +5
//             </p>
//           </div>

//           {/* LANGUAGE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
//             <p className="flex items-center gap-2">
//               <span className="text-xs sm:text-[15px] font-light">English</span>
//               <span className="text-xs sm:text-[15px] font-light">Arabic</span>
//               <span className="text-xs sm:text-[15px] font-light">Hindi</span>
//             </p>
//           </div>

//           {/* RATING SECTION */}
//           {/* RATE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
//             <div className="flex items-center gap-2">
//               <Select>
//                 <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                   <SelectValue placeholder="AED" />
//                 </SelectTrigger>
//                 <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                   <SelectGroup>
//                     <SelectItem value="usd">USD</SelectItem>
//                     <SelectItem value="eur">EUR</SelectItem>
//                     <SelectItem value="aed">AED</SelectItem>
//                     <SelectItem value="gbp">GBP</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               <div className="flex items-baseline">
//                 <span className="font-bold text-[20px]">20</span>
//                 <span className="font-medium text-xs text-muted-foreground ml-1">
//                   /hours
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gray-900/10" />

//           {/* BUTTON SECTION */}
//           <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
//             <Link to="/user/assistant-request-confirm">
//               <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
//                 Request Interview
//               </Button>
//             </Link>
//             <Link to="/user/assistant-booking">
//               <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                 Book Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10">
//           <div className="flex item-center justify-between space-y-3">
//             <div className="flex sm:item-center justify-between space-x-4">
//               {/* Avatar section with relative container for positioning */}
//               <div className="relative w-fit">
//                 <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>

//                 {/* Star Rating Badge */}
//                 <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                   <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                   <p className="text-xs font-medium">4.9</p>
//                   <p className="text-xs font-medium">5</p>
//                 </div>
//               </div>

//               <div className="">
//                 <h1 className="font-semibold text-sm sm:text-[15px]">
//                   Neha Mayumi
//                 </h1>
//                 <p className="text-sm sm:text-[15px] font-light">
//                   Event Specialist
//                 </p>
//               </div>
//             </div>
//             <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
//           </div>

//           <h1>Available Now</h1>
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">
//               Availability :
//             </h1>
//             <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
//               <Check className="w-4 h-4 " />{" "}
//               <span className="text-xs sm:text-[15px]">Remote</span>
//             </p>
//           </div>

//           {/* SKILLS SECTION */}
//           <div className="flex items-center flex-wrap gap-3">
//             <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               ui/ux
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               accounting
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               communication
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               +5
//             </p>
//           </div>

//           {/* LANGUAGE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
//             <p className="flex items-center gap-2">
//               <span className="text-xs sm:text-[15px] font-light">English</span>
//               <span className="text-xs sm:text-[15px] font-light">Arabic</span>
//               <span className="text-xs sm:text-[15px] font-light">Hindi</span>
//             </p>
//           </div>

//           {/* RATING SECTION */}
//           {/* RATE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
//             <div className="flex items-center gap-2">
//               <Select>
//                 <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                   <SelectValue placeholder="AED" />
//                 </SelectTrigger>
//                 <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                   <SelectGroup>
//                     <SelectItem value="usd">USD</SelectItem>
//                     <SelectItem value="eur">EUR</SelectItem>
//                     <SelectItem value="aed">AED</SelectItem>
//                     <SelectItem value="gbp">GBP</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               <div className="flex items-baseline">
//                 <span className="font-bold text-[20px]">20</span>
//                 <span className="font-medium text-xs text-muted-foreground ml-1">
//                   /hours
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gray-900/10" />

//           {/* BUTTON SECTION */}
//           <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
//             <Link to="/user/assistant-request-confirm">
//               <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
//                 Request Interview
//               </Button>
//             </Link>
//             <Link to="/user/assistant-booking">
//               <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                 Book Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10">
//           <div className="flex item-center justify-between space-y-3">
//             <div className="flex sm:item-center justify-between space-x-4">
//               {/* Avatar section with relative container for positioning */}
//               <div className="relative w-fit">
//                 <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>

//                 {/* Star Rating Badge */}
//                 <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                   <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                   <p className="text-xs font-medium">4.9</p>
//                   <p className="text-xs font-medium">5</p>
//                 </div>
//               </div>

//               <div className="">
//                 <h1 className="font-semibold text-sm sm:text-[15px]">
//                   Neha Mayumi
//                 </h1>
//                 <p className="text-sm sm:text-[15px] font-light">
//                   Event Specialist
//                 </p>
//               </div>
//             </div>
//             <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
//           </div>

//           <h1>Available Now</h1>
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">
//               Availability :
//             </h1>
//             <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
//               <Check className="w-4 h-4 " />{" "}
//               <span className="text-xs sm:text-[15px]">Remote</span>
//             </p>
//           </div>

//           {/* SKILLS SECTION */}
//           <div className="flex items-center flex-wrap gap-3">
//             <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               ui/ux
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               accounting
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               communication
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               +5
//             </p>
//           </div>

//           {/* LANGUAGE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
//             <p className="flex items-center gap-2">
//               <span className="text-xs sm:text-[15px] font-light">English</span>
//               <span className="text-xs sm:text-[15px] font-light">Arabic</span>
//               <span className="text-xs sm:text-[15px] font-light">Hindi</span>
//             </p>
//           </div>

//           {/* RATING SECTION */}
//           {/* RATE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
//             <div className="flex items-center gap-2">
//               <Select>
//                 <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                   <SelectValue placeholder="AED" />
//                 </SelectTrigger>
//                 <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                   <SelectGroup>
//                     <SelectItem value="usd">USD</SelectItem>
//                     <SelectItem value="eur">EUR</SelectItem>
//                     <SelectItem value="aed">AED</SelectItem>
//                     <SelectItem value="gbp">GBP</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               <div className="flex items-baseline">
//                 <span className="font-bold text-[20px]">20</span>
//                 <span className="font-medium text-xs text-muted-foreground ml-1">
//                   /hours
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gray-900/10" />

//           {/* BUTTON SECTION */}
//           <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
//             <Link to="/user/assistant-request-confirm">
//               <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
//                 Request Interview
//               </Button>
//             </Link>
//             <Link to="/user/assistant-booking">
//               <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                 Book Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10">
//           <div className="flex item-center justify-between space-y-3">
//             <div className="flex sm:item-center justify-between space-x-4">
//               {/* Avatar section with relative container for positioning */}
//               <div className="relative w-fit">
//                 <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>

//                 {/* Star Rating Badge */}
//                 <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                   <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                   <p className="text-xs font-medium">4.9</p>
//                   <p className="text-xs font-medium">5</p>
//                 </div>
//               </div>

//               <div className="">
//                 <h1 className="font-semibold text-sm sm:text-[15px]">
//                   Neha Mayumi
//                 </h1>
//                 <p className="text-sm sm:text-[15px] font-light">
//                   Event Specialist
//                 </p>
//               </div>
//             </div>
//             <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
//           </div>

//           <h1>Available Now</h1>
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">
//               Availability :
//             </h1>
//             <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
//               <Check className="w-4 h-4 " />{" "}
//               <span className="text-xs sm:text-[15px]">Remote</span>
//             </p>
//           </div>

//           {/* SKILLS SECTION */}
//           <div className="flex items-center flex-wrap gap-3">
//             <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               ui/ux
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               accounting
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               communication
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               +5
//             </p>
//           </div>

//           {/* LANGUAGE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
//             <p className="flex items-center gap-2">
//               <span className="text-xs sm:text-[15px] font-light">English</span>
//               <span className="text-xs sm:text-[15px] font-light">Arabic</span>
//               <span className="text-xs sm:text-[15px] font-light">Hindi</span>
//             </p>
//           </div>

//           {/* RATING SECTION */}
//           {/* RATE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
//             <div className="flex items-center gap-2">
//               <Select>
//                 <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                   <SelectValue placeholder="AED" />
//                 </SelectTrigger>
//                 <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                   <SelectGroup>
//                     <SelectItem value="usd">USD</SelectItem>
//                     <SelectItem value="eur">EUR</SelectItem>
//                     <SelectItem value="aed">AED</SelectItem>
//                     <SelectItem value="gbp">GBP</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               <div className="flex items-baseline">
//                 <span className="font-bold text-[20px]">20</span>
//                 <span className="font-medium text-xs text-muted-foreground ml-1">
//                   /hour
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gray-900/10" />

//           {/* BUTTON SECTION */}
//           <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
//             <Link to="/user/assistant-request-confirm">
//               <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
//                 Request Interview
//               </Button>
//             </Link>
//             <Link to="/user/assistant-booking">
//               <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                 Book Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10">
//           <div className="flex item-center justify-between space-y-3">
//             <div className="flex sm:item-center justify-between space-x-4">
//               {/* Avatar section with relative container for positioning */}
//               <div className="relative w-fit">
//                 <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>

//                 {/* Star Rating Badge */}
//                 <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                   <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                   <p className="text-xs font-medium">4.9</p>
//                   <p className="text-xs font-medium">5</p>
//                 </div>
//               </div>

//               <div className="">
//                 <h1 className="font-semibold text-sm sm:text-[15px]">
//                   Neha Mayumi
//                 </h1>
//                 <p className="text-sm sm:text-[15px] font-light">
//                   Event Specialist
//                 </p>
//               </div>
//             </div>
//             <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
//           </div>

//           <h1>Available Now</h1>
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">
//               Availability :
//             </h1>
//             <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
//               <Check className="w-4 h-4 " />{" "}
//               <span className="text-xs sm:text-[15px]">Remote</span>
//             </p>
//           </div>

//           {/* SKILLS SECTION */}
//           <div className="flex items-center flex-wrap gap-3">
//             <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               ui/ux
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               accounting
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               communication
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               +5
//             </p>
//           </div>

//           {/* LANGUAGE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
//             <p className="flex items-center gap-2">
//               <span className="text-xs sm:text-[15px] font-light">English</span>
//               <span className="text-xs sm:text-[15px] font-light">Arabic</span>
//               <span className="text-xs sm:text-[15px] font-light">Hindi</span>
//             </p>
//           </div>

//           {/* RATING SECTION */}
//           {/* RATE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
//             <div className="flex items-center gap-2">
//               <Select>
//                 <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                   <SelectValue placeholder="AED" />
//                 </SelectTrigger>
//                 <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                   <SelectGroup>
//                     <SelectItem value="usd">USD</SelectItem>
//                     <SelectItem value="eur">EUR</SelectItem>
//                     <SelectItem value="aed">AED</SelectItem>
//                     <SelectItem value="gbp">GBP</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               <div className="flex items-baseline">
//                 <span className="font-bold text-[20px]">20</span>
//                 <span className="font-medium text-xs text-muted-foreground ml-1">
//                   /hours
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gray-900/10" />

//           {/* BUTTON SECTION */}
//           <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
//             <Link to="/user/assistant-request-confirm">
//               <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
//                 Request Interview
//               </Button>
//             </Link>
//             <Link to="/user/assistant-booking">
//               <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                 Book Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10">
//           <div className="flex item-center justify-between space-y-3">
//             <div className="flex sm:item-center justify-between space-x-4">
//               {/* Avatar section with relative container for positioning */}
//               <div className="relative w-fit">
//                 <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>

//                 {/* Star Rating Badge */}
//                 <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                   <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                   <p className="text-xs font-medium">4.9</p>
//                   <p className="text-xs font-medium">5</p>
//                 </div>
//               </div>

//               <div className="">
//                 <h1 className="font-semibold text-sm sm:text-[15px]">
//                   Neha Mayumi
//                 </h1>
//                 <p className="text-sm sm:text-[15px] font-light">
//                   Event Specialist
//                 </p>
//               </div>
//             </div>
//             <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
//           </div>

//           <h1>Available Now</h1>
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">
//               Availability :
//             </h1>
//             <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
//               <Check className="w-4 h-4 " />{" "}
//               <span className="text-xs sm:text-[15px]">Remote</span>
//             </p>
//           </div>

//           {/* SKILLS SECTION */}
//           <div className="flex items-center flex-wrap gap-3">
//             <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               ui/ux
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               accounting
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               communication
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               +5
//             </p>
//           </div>

//           {/* LANGUAGE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
//             <p className="flex items-center gap-2">
//               <span className="text-xs sm:text-[15px] font-light">English</span>
//               <span className="text-xs sm:text-[15px] font-light">Arabic</span>
//               <span className="text-xs sm:text-[15px] font-light">Hindi</span>
//             </p>
//           </div>

//           {/* RATING SECTION */}
//           {/* RATE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
//             <div className="flex items-center gap-2">
//               <Select>
//                 <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                   <SelectValue placeholder="AED" />
//                 </SelectTrigger>
//                 <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                   <SelectGroup>
//                     <SelectItem value="usd">USD</SelectItem>
//                     <SelectItem value="eur">EUR</SelectItem>
//                     <SelectItem value="aed">AED</SelectItem>
//                     <SelectItem value="gbp">GBP</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               <div className="flex items-baseline">
//                 <span className="font-bold text-[20px]">20</span>
//                 <span className="font-medium text-xs text-muted-foreground ml-1">
//                   /hours
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gray-900/10" />

//           {/* BUTTON SECTION */}
//           <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
//             <Link to="/user/assistant-request-confirm">
//               <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
//                 Request Interview
//               </Button>
//             </Link>
//             <Link to="/user/assistant-booking">
//               <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                 Book Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10">
//           <div className="flex item-center justify-between space-y-3">
//             <div className="flex sm:item-center justify-between space-x-4">
//               {/* Avatar section with relative container for positioning */}
//               <div className="relative w-fit">
//                 <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>

//                 {/* Star Rating Badge */}
//                 <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                   <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                   <p className="text-xs font-medium">4.9</p>
//                   <p className="text-xs font-medium">5</p>
//                 </div>
//               </div>

//               <div className="">
//                 <h1 className="font-semibold text-sm sm:text-[15px]">
//                   Neha Mayumi
//                 </h1>
//                 <p className="text-sm sm:text-[15px] font-light">
//                   Event Specialist
//                 </p>
//               </div>
//             </div>
//             <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
//           </div>

//           <h1>Available Now</h1>
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">
//               Availability :
//             </h1>
//             <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
//               <Check className="w-4 h-4 " />{" "}
//               <span className="text-xs sm:text-[15px]">Remote</span>
//             </p>
//           </div>

//           {/* SKILLS SECTION */}
//           <div className="flex items-center flex-wrap gap-3">
//             <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               ui/ux
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               accounting
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               communication
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               +5
//             </p>
//           </div>

//           {/* LANGUAGE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
//             <p className="flex items-center gap-2">
//               <span className="text-xs sm:text-[15px] font-light">English</span>
//               <span className="text-xs sm:text-[15px] font-light">Arabic</span>
//               <span className="text-xs sm:text-[15px] font-light">Hindi</span>
//             </p>
//           </div>

//           {/* RATING SECTION */}
//           {/* RATE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
//             <div className="flex items-center gap-2">
//               <Select>
//                 <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                   <SelectValue placeholder="AED" />
//                 </SelectTrigger>
//                 <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                   <SelectGroup>
//                     <SelectItem value="usd">USD</SelectItem>
//                     <SelectItem value="eur">EUR</SelectItem>
//                     <SelectItem value="aed">AED</SelectItem>
//                     <SelectItem value="gbp">GBP</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               <div className="flex items-baseline">
//                 <span className="font-bold text-[20px]">20</span>
//                 <span className="font-medium text-xs text-muted-foreground ml-1">
//                   /hours
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gray-900/10" />

//           {/* BUTTON SECTION */}
//           <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
//             <Link to="/user/assistant-request-confirm">
//               <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
//                 Request Interview
//               </Button>
//             </Link>
//             <Link to="/user/assistant-booking">
//               <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                 Book Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//         <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10">
//           <div className="flex item-center justify-between space-y-3">
//             <div className="flex sm:item-center justify-between space-x-4">
//               {/* Avatar section with relative container for positioning */}
//               <div className="relative w-fit">
//                 <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                   <AvatarImage
//                     src="https://github.com/shadcn.png"
//                     alt="@shadcn"
//                   />
//                   <AvatarFallback>CN</AvatarFallback>
//                 </Avatar>

//                 {/* Star Rating Badge */}
//                 <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                   <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                   <p className="text-xs font-medium">4.9</p>
//                   <p className="text-xs font-medium">5</p>
//                 </div>
//               </div>

//               <div className="">
//                 <h1 className="font-semibold text-sm sm:text-[15px]">
//                   Neha Mayumi
//                 </h1>
//                 <p className="text-sm sm:text-[15px] font-light">
//                   Event Specialist
//                 </p>
//               </div>
//             </div>
//             <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
//           </div>

//           <h1>Available Now</h1>
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">
//               Availability :
//             </h1>
//             <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
//               <Check className="w-4 h-4 " />{" "}
//               <span className="text-xs sm:text-[15px]">Remote</span>
//             </p>
//           </div>

//           {/* SKILLS SECTION */}
//           <div className="flex items-center flex-wrap gap-3">
//             <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               ui/ux
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               accounting
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               communication
//             </p>
//             <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//               +5
//             </p>
//           </div>

//           {/* LANGUAGE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
//             <p className="flex items-center gap-2">
//               <span className="text-xs sm:text-[15px] font-light">English</span>
//               <span className="text-xs sm:text-[15px] font-light">Arabic</span>
//               <span className="text-xs sm:text-[15px] font-light">Hindi</span>
//             </p>
//           </div>

//           {/* RATING SECTION */}
//           {/* RATE SECTION */}
//           <div className="flex items-center justify-between my-4">
//             <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
//             <div className="flex items-center gap-2">
//               <Select>
//                 <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                   <SelectValue placeholder="AED" />
//                 </SelectTrigger>
//                 <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                   <SelectGroup>
//                     <SelectItem value="usd">USD</SelectItem>
//                     <SelectItem value="eur">EUR</SelectItem>
//                     <SelectItem value="aed">AED</SelectItem>
//                     <SelectItem value="gbp">GBP</SelectItem>
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>

//               <div className="flex items-baseline">
//                 <span className="font-bold text-[20px]">20</span>
//                 <span className="font-medium text-xs text-muted-foreground ml-1">
//                   /hours
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* DIVIDER */}
//           <div className="w-full h-[1px] bg-gray-900/10" />

//           {/* BUTTON SECTION */}
//           <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
//             <Link to="/user/assistant-request-confirm">
//               <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
//                 Request Interview
//               </Button>
//             </Link>
//             <Link to="/user/assistant-booking">
//               <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                 Book Now
//               </Button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BookingCardFind;
