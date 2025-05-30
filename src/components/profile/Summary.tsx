import React from "react";

const Summary = () => {
  return (
    <div className="space-y-3 p-6 sm:py-8 px-12">
      <p className="bg-white text-sm sm:text-[15px] px-3 py-0.5 uppercase border-[1px] border-gary-900/40 w-fit">
        Summary
      </p>
      <div className="space-y-2 sm:w-[70%] leading-[130%] w-full">
        <h1 className="font-medium text-2xl sm:text-3xl ">
          Senior Executive Assistant | Bilingual (Arabic/English) | Calendar,
          Travel & Admin Expert
        </h1>
        <p className="text-xs sm:text-sm font-light">
          With over 7 years of experience supporting C-level executives in
          fast-paced corporate environments, I specialize in optimizing
          workflows, managing tight schedules, and coordinating logistics with
          precision. I bring strong communication skills, confidentiality, and
          an eye for detail to every engagement. I'm passionate about enabling
          executives to operate at their highest level.
        </p>
      </div>
    </div>
  );
};

export default Summary;
