import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Love from "@/assets/icon/Love";

interface BookingCardFindProps {
  item: {
    name: string;
    title: string;
    avatar: string;
    rating: number;
    outOf: number;
    available: boolean;
    availabilityType: string;
    skills: string[];
    languages: string[];
    rate: number;
    currency: string;
  };
}

const BookingCardFind: React.FC<BookingCardFindProps> = ({ item }) => {
  return (
    <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10 hover:shadow-md transition">
      {/* Top Section */}
      <div className="flex items-center justify-between space-y-3">
        <div className="flex sm:items-center justify-between space-x-4">
          {/* Avatar */}
          <div className="relative w-fit">
            <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
              <AvatarImage src={item?.avatar} alt={item?.name} />
              <AvatarFallback>{item?.name}</AvatarFallback>
            </Avatar>
            {/* Rating */}
            <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
              <Star className="w-3 h-3 text-yellow-500" />
              <p className="text-xs font-medium">{item?.rating}</p>
              <p className="text-xs font-medium">({item?.outOf})</p>
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-sm sm:text-[15px]">
              {item?.name}
            </h1>
            <p className="text-sm sm:text-[15px] font-light">{item?.title}</p>
          </div>
        </div>
        <Love className="w-8 h-8 rounded-full p-2 bg-[#E6DDF8]" />
      </div>

      {/* Availability */}
      <h1
        className={`font-DMsans text-[16px] ${
          item?.available ? "text-[#16CC71]" : "text-red-500"
        }`}
      >
        {item?.available ? "Available Now" : "Not Available"}
      </h1>

      {/* Availability Type */}
      <div className="flex items-center justify-between my-4">
        <h1 className="text-xs sm:text-[15px] font-semibold">Availability :</h1>
        <p className="flex items-center text-ButtonBGPrimary space-x-0.5">
          <Check className="w-4 h-4" />
          <span className="text-xs sm:text-[15px]">
            {item?.availabilityType}
          </span>
        </p>
      </div>

      {/* Skills */}
      <div className="flex items-center flex-wrap gap-3">
        <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
        {item?.skills?.slice(0, 2).map((skill, index) => (
          <p
            key={index}
            className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light"
          >
            {skill}
          </p>
        ))}
      </div>

      {/* Languages */}
      <div className="flex items-center justify-between my-4">
        <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
        <p className="flex items-center gap-2">
          {item?.languages?.map((lang, index) => (
            <span
              key={index}
              className="text-xs sm:text-[15px] font-light"
            >
              {lang}
            </span>
          ))}
        </p>
      </div>

      {/* Rate */}
      <div className="flex items-center justify-between my-4">
        <h1 className="text-xs sm:text-[15px] font-semibold">Rate:</h1>
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[70px] h-[10px] px-2 py-0 text-sm border rounded-md border-gray-900/10">
              <SelectValue placeholder={item?.currency} />
            </SelectTrigger>
            <SelectContent className="w-[60px] text-xs border-gray-900/10">
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

      <div className="w-full h-[1px] bg-gray-900/10" />

      {/* Buttons */}
      <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
        <Link to="/user/assistant-request-confirm">
          <Button className="w-[156px] h-[37px] text-sm font-normal bg-ButtonBorder hover:bg-ButtonBorder cursor-pointer">
            Request Interview
          </Button>
        </Link>
        <Link to="/user/profile-summery">
          <Button className="text-sm font-normal bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer">
            Book Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookingCardFind;
