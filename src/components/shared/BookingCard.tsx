import Star from "@/assets/icon/Star";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Wrapper from "./Wrapper";
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

const BookingCard = () => {
  return (
    <Wrapper>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-4 xl:p-0 font-DMsans">
        <div className="bg-white p-5 rounded-xl border-[1px] border-gray-900/10">
          <div className="flex item-center justify-between space-y-3">
            <div className="flex item-center justify-between space-x-4">
              {/* Avatar section with relative container for positioning */}
              <div className="relative w-fit">
                <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                {/* Star Rating Badge */}
                <div className="absolute top-[40px] -right-[2px] sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
                  <Star className="w-3 h-3 sm:w-3 sm:h-3 text-yellow-500" />
                  <p className="text-xs font-medium">4.9</p>
                  <p className="text-xs font-medium">5</p>
                </div>
              </div>

              <div className="">
                <h1 className="font-semibold text-sm sm:text-[15px]">
                  Neha Mayumi
                </h1>
                <p className="text-sm sm:text-[15px] font-light">
                  Event Specialist
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
              <span className="text-xs sm:text-[15px]">Remote</span>
            </p>
          </div>

          {/* SKILLS SECTION */}
          <div className="flex items-center flex-wrap gap-3">
            <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
            <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
              ui/ux
            </p>
            <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
              accounting
            </p>
            <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
              communication
            </p>
            <p className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border-[1px] border-gray-900/10 font-light">
              +5
            </p>
          </div>

          {/* LANGUAGE SECTION */}
          <div className="flex items-center justify-between my-4">
            <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
            <p className="flex items-center gap-2">
              <span className="text-xs sm:text-[15px] font-light">English</span>
              <span className="text-xs sm:text-[15px] font-light">Arabic</span>
              <span className="text-xs sm:text-[15px] font-light">Hindi</span>
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
                <span className="font-bold text-[20px]">20</span>
                <span className="font-medium text-xs text-muted-foreground ml-1">
                  /hours
                </span>
              </div>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="w-full h-[1px] bg-gray-900/10" />

          {/* BUTTON SECTION */}
          <div className="flex items-center justify-between mt-4">
            <Button className="text-xs sm:text-[15px] font-light cursor-pointer">
              Request Interview
            </Button>
            <Button className="text-xs sm:text-[15px] font-light bg-BorderHighlight hover:bg-BorderHighlight cursor-pointer">
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default BookingCard;
