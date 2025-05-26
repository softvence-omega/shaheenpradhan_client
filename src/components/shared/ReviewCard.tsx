import RightQuotation from "@/assets/icon/RightQuotation";
import { IReviewCard } from "./ReviewCard.type";
import BottomQuotation from "@/assets/icon/BottomQuotation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";

const ReviewCard = ({ review, value, image, name, objective }: IReviewCard) => {
  return (
    <div className="bg-pink-100 shadow-sm shadow-pink-200 max-w-[400px] w-full p-3 rounded-xl border-[1px] border-BorderHighlight space-y-5">
      <div className="relative bg-pink-100 p-2">
        <RightQuotation className="absolute top-2 left-1 w-4 h-4 text-gray-400" />
        <p className="text-sm text-gray-700 leading-[150%] p-3">
          {review ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas natus dignissimos repudiandae, eos eius architecto dolorem quia vel. Consectetur, ducimus!"}
        </p>
        <BottomQuotation className="absolute bottom-2 right-2 w-4 h-4 text-gray-400" />
      </div>

      {/* AVATAR SECTION */}
      <div className="flex items-center gap-3 justify-baseline">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src={(image && image) || "https://github.com/shadcn.png"}
            alt="image"
            className="object-cover"
          />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>

        {/* NAME + STAR vertically centered */}
        <div className="flex flex-col xl:flex-row items-start space-x-2 w-full">
          <div className="flex flex-col">
            <p className="text-xs sm:text-[15px] font-semibold">
              {name || "Kazi Mehedi Hasan"}
            </p>
            <p className="text-xs sm:text-[15px] font-light">
              {objective || "bachelor."}
            </p>
          </div>
          <div className="flex items-center justify-center space-x-1 mt-1">
            <Star className="w-4 h-4 text-IconHighlight" />
            <Star className="w-4 h-4 text-IconHighlight" />
            <Star className="w-4 h-4 text-IconHighlight" />
            <Star className="w-4 h-4 text-IconHighlight" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
