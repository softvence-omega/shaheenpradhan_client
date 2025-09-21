import { useEffect, useState } from "react";
import Love from "@/assets/icon/Love";
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
import { data } from "@/lib/matchCardData";

const MatchBookingCard = () => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [loading, setLoading] = useState(false);

  // detect screen size for initial limit
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(4); // mobile
      } else {
        setVisibleCount(9); // desktop
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 6);
      setLoading(false);
    }, 800); // simulate loader
  };

  const visibleData = data.slice(0, visibleCount);

  return (
    <div className="space-y-8 mb-10">
      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleData.map((item, index) => (
          <div key={index} className="min-w-[30%] space-y-4 h-full">
            {/* Match progress */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs sm:text-sm font-semibold">Match</p>
                <p className="text-xs sm:text-sm font-semibold">{item?.match}%</p>
              </div>
              <ProgressDemo progressLevel={item?.match} />
            </div>

            {/* Card */}
            <div className="bg-white p-6 rounded-xl border-[1px] border-gray-900/10">
              <div className="flex items-center justify-between space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="relative w-fit">
                    <Avatar className="w-14 h-14 sm:w-16 sm:h-16">
                      <AvatarImage src={item?.avatar} alt={item?.name} />
                      <AvatarFallback>{item?.name}</AvatarFallback>
                    </Avatar>

                    {/* Rating Badge */}
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
                    <p className="text-sm sm:text-[15px] font-light">
                      {item?.title}
                    </p>
                  </div>
                </div>
                <Love className="w-8 h-8 rounded-full p-2 bg-[#E6DDF8]" />
              </div>

              <h1>{item?.available ? "Available Now" : "Unavailable"} </h1>

              <div className="flex items-center justify-between my-4">
                <h1 className="text-xs sm:text-[15px] font-semibold">
                  Availability :
                </h1>
                <p className="flex items-center text-ButtonBGPrimary">
                  <Check className="w-4 h-4 " />
                  <span className="text-xs sm:text-[15px]">
                    {item?.availabilityType}
                  </span>
                </p>
              </div>

              {/* Skills */}
              <div className="flex items-center flex-wrap gap-3">
                <p className="text-xs sm:text-[15px] font-semibold">Skills :</p>
                {item?.skills?.slice(0, 2).map((skill, i) => (
                  <p
                    key={i}
                    className="text-xs sm:text-[15px] px-3 py-[1px] bg-gray-900/5 rounded-lg border border-gray-900/10 font-light"
                  >
                    {skill}
                  </p>
                ))}
              </div>

              {/* Languages */}
              <div className="flex items-center justify-between my-4">
                <h1 className="text-xs sm:text-[15px] font-semibold">Language:</h1>
                <p className="flex items-center gap-2">
                  {item?.languages?.map((lang, i) => (
                    <span key={i} className="text-xs sm:text-[15px] font-light">
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
                    <SelectTrigger className="w-[70px] h-[10px] px-2 text-sm border rounded-md border-gray-900/10 focus:ring-1 focus:ring-primary">
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
                      /hour
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gray-900/10" />

              {/* Buttons */}
              <div className="flex flex-row items-center justify-between gap-2 flex-wrap mt-4 w-full">
                <Link to="/user/assistant-request-confirm">
                  <Button className="w-[156px] h-[37px] px-6 py-2 rounded-[6px] text-sm font-normal bg-ButtonBorder hover:bg-ButtonBorder">
                    Request Interview
                  </Button>
                </Link>
                <Link to="/user/assistant-booking">
                  <Button className="text-sm font-normal bg-BorderHighlight hover:bg-BorderHighlight">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button with Loader Inside */}
      {visibleCount < data.length && (
        <div className="flex justify-center">
          <Button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-6 py-2 rounded-md bg-primary text-white hover:bg-primary/90 flex items-center justify-center gap-2 min-w-[120px] cursor-pointer"
          >
            {loading ? (
              <>
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Loading...
              </>
            ) : (
              "See More"
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default MatchBookingCard;
