import Star from "@/assets/icon/Star";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Wrapper from "./Wrapper";
import Love from "@/assets/icon/Love";

const BookingCard = () => {
  return (
    <Wrapper>
      <div className="bg-white p-5 w-1/4">
        <div className="flex item-center justify-between">
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
              <div className="absolute -top-1 -right-2 sm:top-[50px] sm:right-[2px] inline-flex items-center space-x-1 bg-yellow-50 px-2 py-0.5 rounded-lg shadow-sm">
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
          <Love className="w-6 h-6 rounded-full p-1 " />
        </div>
      </div>
    </Wrapper>
  );
};

export default BookingCard;
