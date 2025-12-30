import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import ReviewCard from "./ReviewCard";
import TitleAndSubTitle from "./TitleAndSubTitle";
import { DivType } from "@tsparticles/engine";

const testimonials = [
  {
    review: "I couldn't be happier with the service I received! The team went above and beyond to help me find my dream home.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Nevia Barry",
    objective: "CEO, Software",
  },
  {
    review: "I couldn't be happier with the service, my assistant was on-boarded quick with an NDA ready and hit the ground running.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Nevia Barry",
    objective: "CEO, Software",
  },
  {
    review: "I couldn't be happier with the service I received! The team went above and beyond to help me find my dream home.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Nevia Barry",
    objective: "CEO, Software",
  },
  {
    review: "Exceptional service from start to finish. The team was professional and attentive to all our needs.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Alex Johnson",
    objective: "CTO, Tech Solutions",
  },
  {
    review: "The onboarding process was seamless and the support has been outstanding throughout our partnership.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    name: "Sarah Williams",
    objective: "Director, Marketing",
  },
];

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const getVisibleCards = () => {
    const cards = [];
    const total = testimonials.length;
    
    // Previous card
    cards.push((currentIndex - 1 + total) % total);
    // Current card
    cards.push(currentIndex);
    // Next card
    cards.push((currentIndex + 1) % total);
    
    return cards;
  };

  const visibleCards = getVisibleCards();
  // Trusted By 1000+ CEOs
  // Hear from clients and executive assistants who trust our service to connect, collaborate, and succeed.
  return (
    <div className="w-full max-w-7xl mx-auto md:py-20">
     
        <TitleAndSubTitle title="Trusted By 1000+ CEOs" subTitle="Hear from clients and executive assistants who trust our service to connect, collaborate, and succeed."/>
    

      <div className="relative">
        <div className="flex items-center justify-center gap-4 md:gap-8">
          {visibleCards.map((cardIndex, position) => {
            const isMiddle = position === 1;
            const scale = isMiddle ? 1 : 0.9;
            const opacity = isMiddle ? 1 : 0.8;
            const zIndex = isMiddle ? 10 : 0;
            const brightness = isMiddle ? "brightness-100" : "brightness-75";
            const shadow = isMiddle ? "shadow-sm shadow-pink-200" : "shadow-lg";
            
            return (
              <motion.div
                key={`${testimonials[cardIndex].name}-${position}`}
                initial={{ scale: 0.9, opacity: 0.8 }}
                animate={{
                  scale,
                  opacity,
                  x: position === 0 ? -40 : position === 2 ? 40 : 0,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                  "w-full max-w-[400px] flex-shrink-0 rounded-xl bg-pink-100 p-3 transition-all duration-300 filter border-[1px] border-BorderHighlight",
                  shadow,
                  brightness,
                  isMiddle ? "z-10" : "z-0"
                )}
                style={{
                  transform: `scale(${scale})`,
                  opacity,
                  zIndex,
                }}
              >
                <ReviewCard value={[testimonials[cardIndex]]} />
              </motion.div>
            );
          })}
        </div>

        {/* Navigation buttons at bottom */}
        <div className="flex justify-around items-center mt-12">
          <button
            onClick={prevTestimonial}
            className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center  border-[1px] border-TextSecondary"
            aria-label="Previous testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700"
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
          </button>


          <button
            onClick={nextTestimonial}
            className="w-6 h-6 rounded-full bg-white shadow-md flex items-center justify-center transition-colors  border-[1px] border-TextSecondary"
            aria-label="Next testimonial"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-700"
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
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;