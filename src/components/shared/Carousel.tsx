import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import TitleAndSubTitle from "./TitleAndSubTitle";
import ReviewCard from "./ReviewCard";
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
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  useEffect(() => {
    addAnimation();
  }, []);
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <Wrapper>
      <div className="pt-20">
        <TitleAndSubTitle
          title="Trusted By 1000+ CEOs"
          subTitle="Hear from clients and executive assistants who trust Adminity to connect, collaborate, and succeed."
        />
        <div
          ref={containerRef}
          className={cn(
            "scroller relative z-20 pt-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
            className
          )}
        >
          <ul
            ref={scrollerRef}
            className={cn(
              "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
              start && "animate-scroll",
              pauseOnHover && "hover:[animation-play-state:paused]"
            )}
          >
            {value?.map((item, idx) => (
              <ReviewCard value={[...value]} />
            ))}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
