import Love from "@/assets/icon/Love";
import Wrapper from "./Wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Star from "@/assets/icon/Star";
import { Check, MapPin } from "lucide-react";
import { Button } from "../ui/button";

const ProfileCard = () => {
  return (
    <div>
      <Wrapper>
        {/* PROFILE CARD START */}
        <div className="relative rounded-xl border border-BorderHighlight w-80 bg-white">
          {/* Top right heart icon */}
          <div className="flex justify-end p-3">
            <Love className="w-8 h-8 rounded-full p-2 bg-Pink-500" />
          </div>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-BorderHighlight my-6" />

          {/* Avatar section */}
          <div className="flex flex-col items-center space-y-2 -mt-14">
            <div className="relative w-fit">
              <Avatar className="w-16 h-16">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>

              {/* Star Badge */}
              <div className="absolute -bottom-2 inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
                <Star className="w-3 h-3 text-yellow-500" />
                <p className="text-xs font-medium">4.9</p>
                <p className="text-xs font-medium text-gray-400">(5)</p>
              </div>
            </div>

            {/* Name and Role */}
            <div className="text-center mt-2">
              <h1 className="text-sm font-semibold">Jessamine Mumtaz</h1>
              <p className="text-xs text-gray-500">Event Specialist</p>
            </div>
          </div>

          {/* Divider line */}
          <div className="w-full h-[1px] bg-BorderHighlight mt-8" />

          <div className="flex items-center  justify-between p-4">
            <div className="flex items-center space-x-1">
              {" "}
              <MapPin className="w-4 h-4" />{" "}
              <p className="text-xs sm:text-[15px]">Dubai, UAE</p>
            </div>
            <p className="text-xs sm:text-[15px]">Available Now</p>
          </div>

          {/* GENDER, LANGUAGE */}
          <div className="px-4 space-y-2">
            <div className="flex items-center justify-between">
              <h1>Gender </h1>
              <p>Availability</p>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-xs sm:text-[15px] text-BorderHighlight">
                Female
              </h1>
              <p className="flex items-center text-ButtonBGPrimary space-x-0.5 font-light">
                <Check className="w-4 h-4 text-ButtonBGPrimary" />{" "}
                <span className="text-xs sm:text-[15px]">Remote</span>
              </p>
            </div>
          </div>

          <div className="space-y-3 mt-5">
            {/*  */}
            <div className="px-4 text-xs sm:text-[15px] space-y-1">
              <h1 className="text-xs sm:text-[15px]">Experience</h1>
              <p className="text-xs sm:text-[15px] font-light text-BorderHighlight">
                6+ years
              </p>
            </div>
            {/* LANGUAGE */}
            <div className="px-4 space-y-1">
              <h1 className="text-xs sm:text-[15px]">Language</h1>
              <p className="text-xs sm:text-[15px] font-light text-BorderHighlight">
                English, Arabic, French
              </p>
            </div>
            <div className="w-[90%] mx-auto h-[1px] bg-gray-900/15 mt-5 " />
          </div>
          {/* Divider line */}
          <div className="flex items-baseline px-4 py-2">
            <span className="font-bold text-[20px]">$20</span>
            <span className="font-medium text-xs text-muted-foreground ml-1">
              /hours
            </span>
          </div>

          {/* BUTTON SECTION */}
          <div className="flex flex-col gap-3 p-4">
            <Button
              variant="outline"
              className="text-xs sm:text-[15px] px-4 hover:bg-white cursor-pointer font-light"
            >
              Request Video Interview
            </Button>
            <Button className="text-xs sm:text-[15px] px-4 hover:bg-BorderHighlight bg-BorderHighlight cursor-pointer font-light">
              Book Now
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProfileCard;
