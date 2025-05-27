import BookingCard from "@/components/shared/BookingCard";
import Filtering from "@/components/shared/Filter/Filtering";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { X } from "lucide-react";

const Assistants = () => {
  return (
    <div className="bg-pink-100/80  pt-16">
      <Wrapper>
        <div className="space-y-8">
          <TitleAndSubTitle
            title="Top Assistants for Your Tasks"
            subTitle="Find your assistant with advance filter"
          />
          <Filtering />
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between px-5 xl:px-0">
              <div className="bg-pink-200 inline-flex p-1 items-center gap-2 rounded">
                <p className="text-xs sm:text-sm font-light">Tag</p>
                <X className="w-4 h-4" />
              </div>
              <p className="text-xs sm:text-[15px] font-light">
                Showing 0 of 100
              </p>
            </div>
            {/* CARDS */}
            <BookingCard />
          </div>
        </div>
      </Wrapper>{" "}
    </div>
  );
};

export default Assistants;
