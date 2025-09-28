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

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-DMsans pb-5">
        {assistants.slice(0, visibleCards).map((assistant) => (
          <div
            key={assistant.id}
            className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10"
          >
            <div className="flex item-center justify-between space-y-3">
              <div className="flex sm:item-center justify-between space-x-4">
                <div className="relative w-fit">
                  <Link to="/user/profile-summery">
                    <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
                      <AvatarImage src={assistant.avatar} alt={assistant.name} />
                      <AvatarFallback>
                        {assistant.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </Link>

                  <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
                    <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
                    <p className="text-xs font-medium">{assistant.rating}</p>
                    <p className="text-xs font-medium">{assistant.maxRating}</p>
                  </div>
                </div>

                <div className="">
                  <Link to="/user/profile-summery" className="group">
                    <h1 className="font-semibold text-[20px] transition-colors duration-300 ease-in-out hover:text-BorderHighlight relative">
                      {assistant.name}
                      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-BorderHighlight transition-all duration-300 ease-in-out group-hover:w-full"></span>
                    </h1>
                  </Link>

                  <p className="text-sm sm:text-[16px] font-light">
                    {assistant.role}
                  </p>
                </div>
              </div>
              <Love className="w-8 h-8 rounded-full p-2 bg-[#E6DDF8]" />
            </div>

            <h1 className="text-[#16CC71]">Available Now</h1>
            <div className="flex items-center justify-between my-4">
              <h1 className="text-sm sm:text-[16px] font-semibold">
                Availability :
              </h1>
              <p className="flex items-center text-[#8559CA] space-x-0.5">
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
              <h1 className="text-sm sm:text-[16px] font-semibold">
                Language:
              </h1>
              <p className="flex items-center gap-1">
                {assistant.languages.map((language, index) => (
                  <span
                    key={index}
                    className="text-xs sm:text-[15px] font-light"
                  >
                    {language}
                    {index < assistant.languages.length - 1 && ","}
                  </span>
                ))}
              </p>
            </div>

            <div className="flex items-center justify-between my-4">
              <h1 className="text-sm sm:text-[16px] font-semibold">Rate:</h1>
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
                  <span className="font-medium text-[16px] text-muted-foreground ml-1">
                    /hours
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full h-[1px] bg-gray-900/10" />

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
        ))}
      </div>

      <div className="flex flex-col items-center justify-center mt-3 mb-4 md:mt-6 md:mb-10">
        <Link to="/assistant-books">
          <Button className="w-[134px] h-[46px] px-[24px] py-2 sm:py-[14px] gap-[10px] font-semibold text-[16px] sm:text-lg bg-transparent hover:bg-transparent border border-TextSecondary cursor-pointer text-black rounded-sm font-DMsans flex items-center justify-center">
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookingCard;