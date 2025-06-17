import Love from "@/assets/icon/Love";
import BookingCard from "../shared/BookingCard";
import ProgressDemo from "../shared/ProgressBar";
import { Check } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Star from "@/assets/icon/Star";
import { Link } from "react-router-dom";

const MatchBookingCard = () => {
  const data = [
    {
      name: "Neha Mayumi",
      title: "Event Specialist",
      rating: 4.9,
      outOf: 5,
      available: true,
      availabilityType: "Remote",
      skills: ["ui/ux", "accounting", "communication", "+5"],
      languages: ["English", "Arabic", "Hindi"],
      rate: 20,
      currency: "AED",
      match: 50,
      avatar: "https://github.com/shadcn.png",
    },
    {
      name: "Junaid Ali",
      title: "UI/UX Designer",
      rating: 4.7,
      outOf: 5,
      available: true,
      availabilityType: "Hybrid",
      skills: ["figma", "sketch", "accessibility"],
      languages: ["English", "Urdu"],
      rate: 35,
      currency: "USD",
      match: 70,
      avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    },
    {
      name: "Aisha Rahman",
      title: "Marketing Expert",
      rating: 4.5,
      outOf: 5,
      available: true,
      availabilityType: "Remote",
      skills: ["seo", "ads", "copywriting", "+3"],
      languages: ["English", "French"],
      rate: 30,
      currency: "GBP",
      match: 82,
      avatar: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      name: "Carlos Mendes",
      title: "Financial Analyst",
      rating: 4.8,
      outOf: 5,
      available: false,
      availabilityType: "On-site",
      skills: ["finance", "excel", "data modeling"],
      languages: ["English", "Portuguese"],
      rate: 45,
      currency: "EUR",
      match: 64,
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      name: "Emily Zhang",
      title: "Project Manager",
      rating: 4.9,
      outOf: 5,
      available: true,
      availabilityType: "Remote",
      skills: ["agile", "scrum", "jira"],
      languages: ["English", "Mandarin"],
      rate: 50,
      currency: "USD",
      match: 88,
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      name: "Ravi Kumar",
      title: "Software Engineer",
      rating: 4.6,
      outOf: 5,
      available: false,
      availabilityType: "Remote",
      skills: ["javascript", "react", "nodejs", "+2"],
      languages: ["English", "Hindi"],
      rate: 40,
      currency: "USD",
      match: 76,
      avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      name: "Fatima Noor",
      title: "Content Writer",
      rating: 4.4,
      outOf: 5,
      available: true,
      availabilityType: "Hybrid",
      skills: ["blogging", "editing", "seo"],
      languages: ["English", "Arabic"],
      rate: 25,
      currency: "USD",
      match: 59,
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      name: "Leo Andersen",
      title: "DevOps Engineer",
      rating: 4.7,
      outOf: 5,
      available: true,
      availabilityType: "Remote",
      skills: ["docker", "aws", "kubernetes", "+1"],
      languages: ["English", "Danish"],
      rate: 55,
      currency: "EUR",
      match: 92,
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      name: "Sophia Grace",
      title: "Graphic Designer",
      rating: 4.8,
      outOf: 5,
      available: true,
      availabilityType: "Remote",
      skills: ["illustrator", "photoshop", "branding"],
      languages: ["English"],
      rate: 38,
      currency: "GBP",
      match: 74,
      avatar: "https://randomuser.me/api/portraits/women/19.jpg",
    },
    {
      name: "Ahmed Youssef",
      title: "Full Stack Developer",
      rating: 4.9,
      outOf: 5,
      available: false,
      availabilityType: "On-site",
      skills: ["react", "nextjs", "express", "+4"],
      languages: ["English", "Arabic"],
      rate: 60,
      currency: "USD",
      match: 84,
      avatar: "https://randomuser.me/api/portraits/men/30.jpg",
    },
    {
      name: "Lina Torres",
      title: "HR Specialist",
      rating: 4.5,
      outOf: 5,
      available: true,
      availabilityType: "Remote",
      skills: ["recruiting", "compliance", "onboarding"],
      languages: ["English", "Spanish"],
      rate: 28,
      currency: "USD",
      match: 63,
      avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      name: "Oscar Lee",
      title: "QA Engineer",
      rating: 4.6,
      outOf: 5,
      available: true,
      availabilityType: "Remote",
      skills: ["testing", "cypress", "automation"],
      languages: ["English", "Korean"],
      rate: 33,
      currency: "USD",
      match: 71,
      avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      name: "Mia Bakshi",
      title: "Legal Consultant",
      rating: 4.3,
      outOf: 5,
      available: false,
      availabilityType: "Hybrid",
      skills: ["contracts", "compliance", "advice"],
      languages: ["English", "Hindi"],
      rate: 45,
      currency: "GBP",
      match: 67,
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      name: "Nathan Brooks",
      title: "Copywriter",
      rating: 4.2,
      outOf: 5,
      available: true,
      availabilityType: "Remote",
      skills: ["sales copy", "ads", "emails"],
      languages: ["English"],
      rate: 32,
      currency: "USD",
      match: 60,
      avatar: "https://randomuser.me/api/portraits/men/24.jpg",
    },
    {
      name: "Aya Chen",
      title: "Data Scientist",
      rating: 5.0,
      outOf: 5,
      available: true,
      availabilityType: "Remote",
      skills: ["python", "ml", "data analysis"],
      languages: ["English", "Mandarin"],
      rate: 75,
      currency: "USD",
      match: 96,
      avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
      {data?.map((item) => {
        return (
          <div className="min-w-[30%] space-y-4 h-full">
            <div className=" space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs sm:text-sm font-semibold">Match</p>
                <p className="text-xs sm:text-sm font-semibold">
                  {item?.match}%
                </p>
              </div>
              <ProgressDemo progressLevel={item?.match} />
            </div>

            <div className="bg-white p-5 rounded-xl border-[1px]  border-gray-900/10">
              <div className="flex item-center justify-between space-y-3">
                <div className="flex sm:item-center justify-between space-x-4">
                  {/* Avatar section with relative container for positioning */}
                  <div className="relative w-fit">
                    <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
                      <AvatarImage src={item?.avatar} alt="@shadcn" />
                      <AvatarFallback>{item?.name}</AvatarFallback>
                    </Avatar>

                    {/* Star Rating Badge */}
                    <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
                      <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
                      <p className="text-xs font-medium">{item?.rating}</p>
                      <p className="text-xs font-medium">({item?.outOf})</p>
                    </div>
                  </div>

                  <div className="">
                    <h1 className="font-semibold text-sm sm:text-[15px]">
                      {item?.name}
                    </h1>
                    <p className="text-sm sm:text-[15px] font-light">
                      {item?.title}
                    </p>
                  </div>
                </div>
                <Love className="w-8 h-8 rounded-full p-2 bg-[#E6DDF8]" />
              </div>

              <h1>{item?.available ? "Available Now" : "Available Now"} </h1>
              <div className="flex items-center justify-between my-4">
                <h1 className="text-xs sm:text-[15px] font-semibold">
                  Availability :
                </h1>
                <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
                  <Check className="w-4 h-4 " />{" "}
                  <span className="text-xs sm:text-[15px]">
                    {item?.availabilityType}
                  </span>
                </p>
              </div>

              {/* SKILLS SECTION */}
              <div className="flex items-center flex-wrap gap-3">
                <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
                {item?.skills?.slice(0, 2).map((items) => {
                  return (
                    <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
                      {items}
                    </p>
                  );
                })}
              </div>

              {/* LANGUAGE SECTION */}
              <div className="flex items-center justify-between my-4">
                <h1 className="text-xs sm:text-[15px] font-semibold">
                  Language:
                </h1>
                <p className="flex items-center gap-2">
                  {item?.languages?.map((items) => {
                    return (
                      <span className="text-xs sm:text-[15px] font-light">
                        {items}
                      </span>
                    );
                  })}
                </p>
              </div>

              {/* RATING SECTION */}
              {/* RATE SECTION */}
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
                    <span className="font-bold text-[20px]">{item?.rate}</span>
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
                  <Button className="w-[156px] h-[37px] px-6 py-2 rounded-[6px] gap-[10px] text-sm font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer">
                    Request Interview
                  </Button>
                </Link>
                <Link to="/user/assistant-booking">
                  <Button className="text-sm font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer w-fit sm:w-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MatchBookingCard;
