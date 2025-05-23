import { useState } from "react";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export type Testimonial = {
  name: string;
  position: string;
  text: string;
  avatar: string;
  companyLogo: string;
};

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export default function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  const { name, position, text, avatar, companyLogo } = testimonials[current];

  return (
    <div className="max-w-xl mx-auto px-4 py-10 text-center space-y-6 font-DMsans">
      {/* Stars */}
      <div className="flex justify-center gap-1 text-[#3A1C71]">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className="h-5 w-5" />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="flex justify-center text-[28px] font-medium text-black">
        "{text}"
      </p>

      {/* Footer with Avatar, Name & Company */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <img src={avatar} alt={name} className="w-14 h-14 rounded-full" />
        <div className="text-left">
          <p className="text-[18px] font-DMsans font-semibold text-black">
            {name}
          </p>
          <p className="text-[16px] text-[var(--color-TextSecondary)]">
            {position}
          </p>
        </div>
        <div className="h-10 w-px bg-gray-300 mx-4" />
        <img src={companyLogo} alt="company logo" className="h-6" />
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={prevSlide}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
        >
          <FaArrowLeft />
        </button>

        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === current ? "bg-purple-700" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-2 rounded-full hover:bg-gray-100 text-gray-600"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
