// components/shared/BookingCard.tsx
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
import { useState } from "react";
import { Assistant } from "./Filter/types/assistant";

interface BookingCardProps {
  assistants: Assistant[];
}

const BookingCard = ({ assistants }: BookingCardProps) => {
  const [visibleCards, setVisibleCards] = useState(3);

  const loadMore = () => {
    setVisibleCards((prev) => prev + 3);
  };

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-DMsans pb-5">
        {assistants.slice(0, visibleCards).map((assistant) => (
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
              <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
            </div>

            <h1>Available Now</h1>
            <div className="flex items-center justify-between my-4">
              <h1 className="text-xs sm:text-[15px] font-semibold">
                Availability :
              </h1>
              <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
                <Check className="w-4 h-4 " />{" "}
                <span className="text-xs sm:text-[15px]">
                  {assistant.remote ? "Remote" : "On-site"}
                </span>
              </p>
            </div>

            <div className="flex items-center flex-wrap gap-3">
              <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
              {assistant.skills.slice(0, 3).map((skill, index) => (
                <p
                  key={index}
                  className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light"
                >
                  {skill}
                </p>
              ))}
              {assistant.skills.length > 3 && (
                <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
                  +{assistant.skills.length - 3}
                </p>
              )}
            </div>

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

            <div className="flex items-center justify-between my-4">
              <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
              <div className="flex items-center gap-2">
                <Select>
                  <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
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

            <div className="w-full h-[1px] bg-gray-900/10" />

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

      {visibleCards < assistants.length && (
        <div className="flex flex-col items-center justify-center">
          <Button
            variant="outline"
            className="text-xs sm:text-[14px] font-normal bg-transparent hover:bg-transparent border-[1px] border-TextSecondary cursor-pointer w-fit"
            onClick={loadMore}
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default BookingCard;

// import Star from "@/assets/icon/Star";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import Wrapper from "./Wrapper";
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
// import { useState } from "react";

// interface Assistant {
//   id: number;
//   name: string;
//   role: string;
//   avatar: string;
//   rating: number;
//   maxRating: number;
//   skills: string[];
//   languages: string[];
//   rate: number;
//   available: boolean;
//   remote: boolean;
// }

// const BookingCard = () => {
//   // Sample data array
//   const assistants: Assistant[] = [
//     {
//       id: 1,
//       name: "Neha Mayumi",
//       role: "Event Specialist",
//       avatar: "https://github.com/shadcn.png",
//       rating: 4.9,
//       maxRating: 5,
//       skills: ["ui/ux", "accounting", "communication"],
//       languages: ["English", "Arabic", "Hindi"],
//       rate: 20,
//       available: true,
//       remote: true,
//     },
//     {
//       id: 2,
//       name: "John Smith",
//       role: "Marketing Expert",
//       avatar: "https://github.com/shadcn.png",
//       rating: 4.7,
//       maxRating: 5,
//       skills: ["marketing", "social media", "content creation"],
//       languages: ["English", "French"],
//       rate: 25,
//       available: true,
//       remote: false,
//     },
//     {
//       id: 3,
//       name: "Sarah Johnson",
//       role: "Graphic Designer",
//       avatar: "https://github.com/shadcn.png",
//       rating: 4.8,
//       maxRating: 5,
//       skills: ["graphic design", "illustration", "branding"],
//       languages: ["English", "Spanish"],
//       rate: 30,
//       available: true,
//       remote: true,
//     },
//     {
//       id: 4,
//       name: "Michael Brown",
//       role: "Web Developer",
//       avatar: "https://github.com/shadcn.png",
//       rating: 4.9,
//       maxRating: 5,
//       skills: ["JavaScript", "React", "Node.js"],
//       languages: ["English", "German"],
//       rate: 35,
//       available: true,
//       remote: true,
//     },
//     {
//       id: 5,
//       name: "Emily Davis",
//       role: "Content Writer",
//       avatar: "https://github.com/shadcn.png",
//       rating: 4.6,
//       maxRating: 5,
//       skills: ["copywriting", "editing", "SEO"],
//       languages: ["English", "Italian"],
//       rate: 22,
//       available: true,
//       remote: true,
//     },
//     {
//       id: 6,
//       name: "Liam Johnson",
//       role: "UI/UX Designer",
//       avatar: "https://randomuser.me/api/portraits/men/32.jpg",
//       rating: 4.8,
//       maxRating: 5,
//       skills: ["Figma", "Sketch", "Prototyping"],
//       languages: ["English", "Spanish"],
//       rate: 30,
//       available: false,
//       remote: true,
//     },
//   ];

//   const [visibleCards, setVisibleCards] = useState(3);

//   const loadMore = () => {
//     setVisibleCards((prev) => prev + 3);
//   };

//   return (
//     <div className="py-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-DMsans pb-5">
//         {assistants.slice(0, visibleCards).map((assistant) => (
//           <div
//             key={assistant.id}
//             className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10"
//           >
//             <div className="flex item-center justify-between space-y-3">
//               <div className="flex sm:item-center justify-between space-x-4">
//                 {/* Avatar section with relative container for positioning */}
//                 <div className="relative w-fit">
//                   <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
//                     <AvatarImage src={assistant.avatar} alt={assistant.name} />
//                     <AvatarFallback>
//                       {assistant.name
//                         .split(" ")
//                         .map((n) => n[0])
//                         .join("")}
//                     </AvatarFallback>
//                   </Avatar>

//                   {/* Star Rating Badge */}
//                   <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
//                     <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
//                     <p className="text-xs font-medium">{assistant.rating}</p>
//                     <p className="text-xs font-medium">{assistant.maxRating}</p>
//                   </div>
//                 </div>

//                 <div className="">
//                   <h1 className="font-semibold text-sm sm:text-[15px]">
//                     {assistant.name}
//                   </h1>
//                   <p className="text-sm sm:text-[15px] font-light">
//                     {assistant.role}
//                   </p>
//                 </div>
//               </div>
//               <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
//             </div>

//             <h1>Available Now</h1>
//             <div className="flex items-center justify-between my-4">
//               <h1 className="text-xs sm:text-[15px] font-semibold">
//                 Availability :
//               </h1>
//               <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
//                 <Check className="w-4 h-4 " />{" "}
//                 <span className="text-xs sm:text-[15px]">
//                   {assistant.remote ? "Remote" : "On-site"}
//                 </span>
//               </p>
//             </div>

//             {/* SKILLS SECTION */}
//             <div className="flex items-center flex-wrap gap-3">
//               <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
//               {assistant.skills.slice(0, 3).map((skill, index) => (
//                 <p
//                   key={index}
//                   className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light"
//                 >
//                   {skill}
//                 </p>
//               ))}
//               {assistant.skills.length > 3 && (
//                 <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
//                   +{assistant.skills.length - 3}
//                 </p>
//               )}
//             </div>

//             {/* LANGUAGE SECTION */}
//             <div className="flex items-center justify-between my-4">
//               <h1 className="text-xs sm:text-[15px] font-semibold">
//                 Language:
//               </h1>
//               <p className="flex items-center gap-2">
//                 {assistant.languages.map((language, index) => (
//                   <span
//                     key={index}
//                     className="text-xs sm:text-[15px] font-light"
//                   >
//                     {language}
//                   </span>
//                 ))}
//               </p>
//             </div>

//             {/* RATE SECTION */}
//             <div className="flex items-center justify-between my-4">
//               <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
//               <div className="flex items-center gap-2">
//                 <Select>
//                   <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10  focus:ring-1 focus:ring-primary focus:border-gray-900/10">
//                     <SelectValue placeholder="AED" />
//                   </SelectTrigger>
//                   <SelectContent className="w-[60px] text-xs border-gray-900/10 border-[1px]">
//                     <SelectGroup>
//                       <SelectItem value="usd">USD</SelectItem>
//                       <SelectItem value="eur">EUR</SelectItem>
//                       <SelectItem value="aed">AED</SelectItem>
//                       <SelectItem value="gbp">GBP</SelectItem>
//                     </SelectGroup>
//                   </SelectContent>
//                 </Select>

//                 <div className="flex items-baseline">
//                   <span className="font-bold text-[20px]">
//                     {assistant.rate}
//                   </span>
//                   <span className="font-medium text-xs text-muted-foreground ml-1">
//                     /hours
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* DIVIDER */}
//             <div className="w-full h-[1px] bg-gray-900/10" />

//             {/* BUTTON SECTION */}
//             <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
//               <Link to="/user/assistant-request-confirm">
//                 <Button className="text-xs sm:text-[14px] font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer w-fit sm:w-full">
//                   Request Interview
//                 </Button>
//               </Link>
//               <Link to="/user/assistant-booking">
//                 <Button className="text-xs sm:text-[14px] font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
//                   Book Now
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>

//       {visibleCards < assistants.length && (
//         <div className="flex flex-col items-center justify-center">
//           <Button
//             variant="outline"
//             className="text-xs sm:text-[14px] font-normal bg-transparent hover:bg-transparent border-[1px] border-TextSecondary cursor-pointer w-fit"
//             onClick={loadMore}
//           >
//             Load More
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BookingCard;

// import Star from "@/assets/icon/Star";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import Wrapper from "./Wrapper";
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

// const BookingCard = () => {
//   return (
//     <div className="py-6">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-DMsans pb-5">
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

//       <Link to="" className="flex flex-col items-center justify-center ">
//         <Button
//           variant="outline"
//           className="text-xs sm:text-[14px] font-normal bg-transparent hover:bg-transparent border-[1px] border-TextSecondary cursor-pointer w-fit "
//         >
//           Load More
//         </Button>
//       </Link>
//     </div>
//   );
// };

// export default BookingCard;
