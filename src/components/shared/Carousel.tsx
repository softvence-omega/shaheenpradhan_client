import { cn } from "@/lib/utils";
import React, { useState } from "react";
import Wrapper from "./Wrapper";
import TitleAndSubTitle from "./TitleAndSubTitle";
import ReviewCard from "./ReviewCard";
import NextBtn from "@/assets/icon/nextbtn.svg";
import PrevBtn from "@/assets/icon/prevbtn.svg";

const value = [
  {
    review: "This service exceeded my expectations. Very professional!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    name: "Sarah Johnson",
    objective: "Marketing Manager",
  },
  {
    review: "Quick, efficient, and hassle-free. Highly recommended.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    name: "David Lee",
    objective: "Startup Founder",
  },
  {
    review: "Booking was easy and the assistant was well-trained.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    name: "Emily Watson",
    objective: "Product Designer",
  },
  {
    review: "Support was responsive and solved my issue fast.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Michael Brown",
    objective: "Freelancer",
  },
  {
    review: "Great experience overall. Will use it again.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Laura Davis",
    objective: "Business Consultant",
  },
  {
    review: "Good service but took slightly longer than expected.",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Chris Evans",
    objective: "Operations Lead",
  },
  {
    review: "Smooth process and reliable results every time.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Angela White",
    objective: "Sales Executive",
  },
  {
    review: "Decent experience, could improve in communication.",
    rating: 3,
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Tom Harris",
    objective: "Tech Recruiter",
  },
  {
    review: "Fantastic service! Definitely helped boost our productivity.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    name: "Jessica Miller",
    objective: "Team Lead",
  },
  {
    review: "Reliable and consistent. A solid choice.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    name: "Robert Smith",
    objective: "HR Specialist",
  },
];

export const Carousel = ({
  pauseOnHover = true,
  className,
}: {
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const itemsPerPage = 3;
  const totalPages = Math.ceil(value.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  // Get the reviews to display for current page
  const currentItems = value.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const goPrev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <Wrapper>
      <div className="pt-20">
        <TitleAndSubTitle
          title="Trusted By 1000+ CEOs"
          subTitle="Hear from clients and executive assistants who trust Adminity to connect, collaborate, and succeed."
        />

        <div
          className={cn(
            "scroller relative z-20 pt-5 overflow-hidden",
            className
          )}
        >
          <ul
            className={cn(
              "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {currentItems.map((item, idx) => (
              <ReviewCard key={item.name} value={[item]} />
            ))}
          </ul>

          {/* Pagination Controls */}
          <div className="flex gap-56 justify-center mt-2">
            <button onClick={goPrev} className=" cursor-pointer ">
              <img src={PrevBtn} alt="Ai-SearchIcon" className="w-6 h-6 p-1 rounded-full border-[1px] border-TextSecondary/10" />
            </button>

            <button onClick={goNext} className=" cursor-pointer ">
              <img src={NextBtn} alt="Ai-SearchIcon" className="w-6 h-6 p-1 rounded-full border-[1px] border-TextSecondary/10" />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
