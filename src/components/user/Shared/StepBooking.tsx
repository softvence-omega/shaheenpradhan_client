/* import { motion } from "framer-motion";
import { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";

const steps = [1, 2, 3, 4];

export default function StepBooking() {
  const [currentStep, setCurrentStep] = useState(0);

  const stepComponents = [
    <StepOne key={0} />,
    <StepTwo key={1} />,
    <StepThree key={2} />,
    <StepFour key={3} />,
  ];

  const isLastStep = currentStep === steps.length - 1;
  const isFirstStep = currentStep === 0;

  return (
    <div className="w-full max-w-4xl px-4 flex flex-col md:flex-row gap-10">
   
      <div className="relative flex flex-col items-start min-w-[60px]">

        <div className="absolute top-4 left-[15px] w-[1px] h-full bg-cyan-100 z-0" />

        <motion.div
          className="absolute top-4 left-[15px] w-[1px] bg-black z-10"
          initial={{ height: 0 }}
          animate={{
            height: `${(currentStep / (steps.length - 1)) * 100}%`,
          }}
          transition={{ duration: 0.4 }}
        />

     
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
                  ? "border-purple-600 text-purple-500"
                  : index === currentStep
                  ? "border-purple-600 text-black"
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


      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
      
        {stepComponents
          .slice(0, currentStep + 1)
          .map((StepComponent, index) => (
            <div key={index} className="mb-8">
              {StepComponent}
            </div>
          ))}


        <div className="flex justify-start items-center gap-x-5 mt-6">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={isFirstStep}
            className={cn(
              "px-8 py-2 font-light bg-gray-300 text-black rounded disabled:opacity-50",
              isFirstStep && "cursor-not-allowed"
            )}
          >
            Save Draft
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
 */

// components/shared/UserBooking/StepBooking.tsx

import { FaRegCircleCheck } from "react-icons/fa6";

interface StepBookingProps {
  steps: { completed: boolean }[];
  mobile?: boolean;
}

const StepBooking = ({ steps, mobile = false }: StepBookingProps) => {
  if (mobile) {
    return (
      <div className="flex justify-between items-center relative px-4 mb-6">
        {/* Horizontal line connecting the steps */}
        <div className="absolute top-4 left-0 right-0 mx-auto w-[calc(100%-80px)] h-0.5 bg-gray-300 z-0" />

        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center">
            {/* Circle or Tick icon */}
            {step.completed ? (
              <FaRegCircleCheck className="text-[#8559CA] w-[32px] h-[32px] rounded-full border-[0.7273px] bg-white" />
            ) : (
              <div className="relative w-[32px] h-[32px] rounded-full border-[0.7273px] border-gray-400 bg-white">
                {!step.completed && (
                  <span className="absolute inset-0 flex items-center justify-center text-gray-700 font-semibold text-lg select-none">
                    {index + 1}
                  </span>
                )}
              </div>
            )}
            {/* Step label - optional if you want to add text below each step */}
            {/* <span className="text-xs mt-2">Step {index + 1}</span> */}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center relative mt-6">
      {/* Vertical line connecting the steps */}
      <div className="absolute top-4 bottom-4 transform -translate-x-1/2 w-0.5 bg-gray-300 z-0" />

      {steps.map((step, index) => (
        <div
          key={index}
          className={`relative z-10 flex flex-col items-center  ${
            index !== steps.length - 1 ? "mb-[256px]" : ""
          }`}
        >
          {/* Circle or Tick icon */}
          {step.completed ? (
            <FaRegCircleCheck className="text-[#8559CA] w-[32px] h-[32px] rounded-full border-[0.7273px] bg-white" />
          ) : (
            <div className="w-[32px] h-[32px] rounded-full border-[0.7273px] border-gray-400 bg-white" />
          )}

          {/* Show number under the circle only if not completed */}
          {!step.completed && (
            <span className="text-gray-700 font-semibold text-lg select-none -mt-7">
              {index + 1}
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepBooking;
