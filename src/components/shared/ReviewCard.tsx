import RightQuotation from "@/assets/icon/RightQuotation";
import BottomQuotation from "@/assets/icon/BottomQuotation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Star } from "lucide-react";

const ReviewCard = ({
  value,
}: {
  value: {
    review: string;
    rating: number;
    image: string;
    name: string;
    objective: string;
  }[];
}) => {
  return (
    <>
      {value?.map((reviews, index) => {
        return (
          <div
            key={index}
            className="bg-pink-100 shadow-sm shadow-pink-200 max-w-[400px] w-full p-3 rounded-xl border-[1px] border-BorderHighlight space-y-5"
          >
            <div className="relative bg-pink-100 p-2">
              <RightQuotation className="absolute top-2 left-1 w-4 h-4 text-gray-400" />
              <p className="text-sm text-gray-700 leading-[150%] p-3">
                {reviews?.review}
              </p>
              <BottomQuotation className="absolute bottom-2 right-2 w-4 h-4 text-gray-400" />
            </div>

            {/* AVATAR SECTION */}
            <div className="inline-flex flex-wrap lg:flex-nowrap lg:flex-row lg:items-center lg:justify-between gap-3 ">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={reviews?.image}
                  alt="image"
                  className="object-cover"
                />
                <AvatarFallback>{reviews?.name}</AvatarFallback>
              </Avatar>

              {/* NAME + STAR vertically centered */}
              <div className="flex flex-col xl:flex-row items-start space-x-2 w-full">
                <div className="inline-flex flex-col ">
                  <p className="text-xs sm:text-[15px] font-semibold">
                    {reviews?.name}
                  </p>
                  <p className="text-xs sm:text-[15px] font-light">
                    {reviews?.objective}
                  </p>
                </div>
                <div className="inline-flex items-center justify-center space-x-1 mt-1">
                  {Array.from({ length: reviews?.rating }).map((_, index) => (
                    <Star key={index} className="w-4 h-4 text-IconHighlight" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ReviewCard;
