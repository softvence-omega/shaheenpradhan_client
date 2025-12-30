import { Calendar } from "lucide-react";
import React from "react";

const Education = () => {
  return (
    <div className="px-4 py-6 md:py-5 md:px-8">
      <div className="space-y-3">
        <p className="bg-white text-sm sm:text-[15px] px-3 uppercase border border-gray-900/30 rounded-xl w-fit">
          Education
        </p>
        <h1 className="font-semibold text-sm sm:text-lg">
          Educational Experience and Qualifications
        </h1>
      </div>

      <div className="py-4 space-y-0">
        <div className="bg-pink-100 border border-blue-400 rounded-t-xl p-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <div>
              <h1 className="text-sm sm:text-base font-semibold">
                Bachelor of Business Administration (BBA)
              </h1>
              <p className="text-xs sm:text-sm font-light">
                June 2016 • American University in Dubai
              </p>
            </div>
          </div>
        </div>

        <div className="border border-blue-400 border-t-0 rounded-b-xl p-4">
          <p className="text-sm sm:text-[15px] leading-[150%] font-normal text-gray-900/70">
            A comprehensive four-year degree focused on core business disciplines including
            management, marketing, finance, and organizational behavior. Developed strong
            analytical, communication, and problem-solving skills, with coursework emphasizing
            leadership, business ethics, and operational strategy. Completed capstone projects
            on workflow optimization and cross-functional team collaboration, laying a strong
            foundation for executive-level support roles.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
