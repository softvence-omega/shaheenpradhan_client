import { useState, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RightQuotation from "@/assets/icon/RightQuotation";
import BottomQuotation from "@/assets/icon/BottomQuotation";
import TitleAndSubTitle from "../shared/TitleAndSubTitle";
import Wrapper from "../shared/Wrapper";

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  img: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I couldn't be happier with the service  br I received! The team went above and beyond to help me find my dream home",
    name: "Emmett Torphy",
    role: "Direct Operations Producer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 2,
    text: "I couldn't be happier with the service I received! The team went above and beyond to help me find my dream home",
    name: "John Doe",
    role: "Project Manager",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 3,
    text: "I couldn't be happier with the service I received! The team went above and beyond to help me find my dream home",
    name: "Jane Smith",
    role: "Marketing Specialist",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 4,
    text: "I couldn't be happier with the service I received! The team went above and beyond to help me find my dream home",
    name: "Alex Brown",
    role: "Software Engineer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 5,
    text: "I couldn't be happier with the service I received! The team went above and beyond to help me find my dream home",
    name: "Lara Kent",
    role: "UI/UX Designer",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    id: 6,
    text: "I couldn't be happier with the service I received! The team went above and beyond to help me find my dream home.",
    name: "Max Green",
    role: "Product Owner",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

const VISIBLE_CARDS = 3;
const CARD_WIDTH = 600;
const GAP = 80;

export default function CarouselCard() {
  const [activeIndex, setActiveIndex] = useState(0);

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < testimonials.length - VISIBLE_CARDS;

  const handlePrev = useCallback(() => {
    if (canGoPrev) setActiveIndex((i) => i - 1);
  }, [canGoPrev]);

  const handleNext = useCallback(() => {
    if (canGoNext) setActiveIndex((i) => i + 1);
  }, [canGoNext]);

  const translateX = -(activeIndex * (CARD_WIDTH + GAP));

  return (
    <section
      aria-label="Client Testimonials Carousel"
      className="max-w-[1960px] h-[600px] mx-auto px-6 select-none  "
    >
      <div className="mb-[80px]">
        <Wrapper>
          <TitleAndSubTitle
            title="Trusted by leadership  and C-suite"
            subTitle="Hear from clients and executive assistants who trust our service to connect, collaborate, and succeed."
          />
        </Wrapper>
      </div>

      {/* Carousel for large screens */}
      <div className="relative overflow-hidden w-full px-0 hidden md:block">
        <div
          className="flex transition-transform duration-500 ease-in-out will-change-transform"
          style={{
            width: `${testimonials.length * (CARD_WIDTH + GAP)}px`,
            transform: `translateX(${translateX - 35}px)`,
            gap: `${GAP}px`,
          }}
          role="list"
        >
          {testimonials.map(({ id, text, name, role, img }, index) => {
            const isVisible =
              index >= activeIndex && index < activeIndex + VISIBLE_CARDS;
            const isCenterCard = index === activeIndex + 1;

            return (
              <Card
                key={id}
                role="listitem"
                className={`flex-shrink-0 w-[600px] h-[337px] rounded-2xl border border-[#A44DCA] p-8 shadow-md bg-[#F7F5FA]
              ${
                isVisible
                  ? isCenterCard
                    ? "opacity-100 scale-100"
                    : "opacity-60 scale-95"
                  : "opacity-0 scale-90 pointer-events-none"
              }
              transition-all duration-300 ease-in-out`}
                aria-current={isCenterCard ? "true" : undefined}
                tabIndex={isCenterCard ? 0 : -1}
              >
                <CardContent className="flex flex-col h-full justify-between">
                  <div className="w-full h-[168px] mb-6 relative p-6">
                    <RightQuotation className="absolute top-8 left-1 w-4 h-4 text-gray-400 " />
                    <div className="absolute right-4 pt-55">
                      <BottomQuotation className="absolute bottom-2 right-2 w-4 h-4 text-gray-400 mb-12" />
                    </div>
                    <p className="font-DMsans text-[26px] text-gray-800 leading-relaxed relative z-10">
                      {text}
                    </p>
                  </div>
                  <div className="flex justify-between items-center mt-8">
                    <div className="flex items-center gap-5">
                      <img
                        src={img}
                        alt={`${name} profile`}
                        className="w-14 h-14 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold text-lg text-gray-900">
                          {name}
                        </p>
                        <p className="text-gray-500 text-sm">{role}</p>
                      </div>
                    </div>
                    <div
                      className="text-[#3A1C71] text-[16px] mb-8"
                      aria-label="Rating"
                    >
                      ★★★★★
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Controls for large devices only */}
      <div className="hidden md:flex justify-center gap-6 mt-8 space-x-[700px] ">
        <Button
          aria-label="Previous testimonials"
          onClick={handlePrev}
          disabled={!canGoPrev}
          className="w-10 h-10 rounded-full bg-white text-gray-700 hover:text-white shadow-md flex items-center justify-center transition-colors border-[1px] border-TextSecondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </Button>
        <Button
          aria-label="Next testimonials"
          onClick={handleNext}
          disabled={!canGoNext}
          className="w-10 h-10 rounded-full bg-white text-gray-700 hover:text-white shadow-md flex items-center justify-center transition-colors border-[1px] border-TextSecondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Button>
      </div>

      {/* Mobile stacked cards layout */}
      <div className="block md:hidden space-y-6 mt-8">
        {testimonials.slice(0, 3).map(({ id, text, name, role, img }) => (
          <Card
            key={id}
            className="w-full border border-[#A44DCA] p-6 rounded-2xl bg-[#F7F5FA] shadow-sm"
          >
            <CardContent className="flex flex-col gap-4">
              <p className="text-gray-800 text-[18px] relative">
                <RightQuotation className="inline-block w-4 h-4 mr-1 text-gray-400" />
                {text}
                <BottomQuotation className="inline-block w-4 h-4 ml-1 text-gray-400" />
              </p>
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-4">
                  <img
                    src={img}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{name}</p>
                    <p className="text-sm text-gray-500">{role}</p>
                  </div>
                </div>
                <div className="text-[#3A1C71] text-sm" aria-label="Rating">
                  ★★★★★
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
