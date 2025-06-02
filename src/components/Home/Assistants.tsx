import BookingCard from "@/components/shared/BookingCard";
import Filtering from "@/components/shared/Filter/Filtering";
import TitleAndSubTitle from "@/components/shared/TitleAndSubTitle";
import Wrapper from "@/components/shared/Wrapper";
import { X } from "lucide-react";

const Assistants = () => {
  return (
    <div className="pt-16">
      <Wrapper>
        <div className="space-y-8">
          <TitleAndSubTitle
            title="Top Assistants for Your Tasks"
            subTitle="Find your assistant with advance filter"
          />
          <Filtering />
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div className="bg-pink-200 inline-flex py-2 px-4 items-center gap-2 rounded">
                <p className="text-sm sm:text-[15px] font-normal text-TextSecondary">Tag</p>
                <X className="w-4 h-4 text-sm sm:text-[15px] font-medium text-TextSecondary" />
              </div>
              <p className="text-sm sm:text-[15px] font-medium text-TextSecondary leading-[120%]">
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
