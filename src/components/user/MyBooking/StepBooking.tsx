import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

// Just using an array of 4 elements for the steps
const steps = [1, 2, 3, 4];

export default function StepBooking() {
  const [currentStep, setCurrentStep] = useState(0);
  const stepComponents = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
  ];

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <div className="w-full max-w-4xl px-4 flex flex-col md:flex-row gap-10">
      {/* Step Progress Column */}
      <div className="relative flex flex-col items-start min-w-[60px]">
        {/* Vertical Background Line */}
        <div className="absolute top-4 left-[15px] w-[1px] h-full bg-cyan-100 z-0" />

        {/* Animated Progress Line */}
        <motion.div
          className="absolute top-4 left-[15px] w-[1px] bg-black z-10"
          initial={{ height: 0 }}
          animate={{
            height: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Step Circles Only */}
        {steps.map((_, index) => (
          <div
            key={index}
            className="relative z-20 flex items-start gap-3 mb-8 cursor-pointer"
            onClick={() => setCurrentStep(index)}
          >
            <div
              className={cn(
                "w-[32px] h-[32px] flex items-center justify-center rounded-full border box-border",
                index < currentStep
                  ? " border-purple-600 text-purple-500"
                  : index === currentStep
                  ? " border-purple-600 text-black"
                  : "bg-white border-purple-500 text-purple-500"
              )}
              style={{
                fontFamily: "Roboto, sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {index < currentStep ? <Check size={16} /> : index + 1}
            </div>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        {stepComponents[currentStep]}

        {/* Navigation Buttons */}
        <div className="flex justify-start items-center gap-x-5 mt-6">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={isFirstStep}
            className={cn(
              "px-8 py-2 font-light bg-gray-200 text-white rounded disabled:opacity-50",
              isFirstStep && "cursor-not-allowed"
            )}
          >
            Back
          </button>

          {!isLastStep ? (
            <button
              onClick={() =>
                setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))
              }
              className="px-8 py-2 font-light bg-[#B655DA] text-white rounded hover:bg-green-700 transition"
            >
              Next
            </button>
          ) : (
            <button
              onClick={() => alert("Booking Completed!")}
              className="px-8 py-2 font-light bg-[#B655DA] text-white rounded hover:bg-[#884e9d] transition"
            >
              Book Now
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
