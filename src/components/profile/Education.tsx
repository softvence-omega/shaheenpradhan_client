import { Calendar } from "lucide-react";
import React from "react";

const Education = () => {
  return (
    <div className="p-6 sm:py-5 px-12">
      <p className="bg-white  text-sm sm:text-[15px] px-3  uppercase border-[1px] border-gary-900/80 rounded-xl w-fit">
        Education
      </p>
      <div className="py-4 space-y-3">
        <h1 className="w-1/2 sm:w-[25%]  font-semibold text-sm sm:text-lg">
          Core Competencies and Areas of Expertise
        </h1>
        <div className="flex flex-col xl:flex-row space-y-3 xl:space-y-0 items-start justify-between bg-pink-100 p-4 rounded-t-xl border-b-[1px] border-gray-900/30 ">
          <div>
            <h1 className="text-sm sm:text-lg font-semibold">
              Executive Assistant
            </h1>
            <p className="text-xs sm:text-[15px] font-light">
              {" "}
              Emirates Group". "Abu Dhabi
            </p>
          </div>
          <div className="flex items-start xl:items-center  space-x-2">
            <Calendar className="w-4 h-4" />
            <p className="text-sm sm:text-[15px] leading-[150%] font-light">
              "June 2024 – December 2024"
            </p>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm sm:text-[15px] leading-[150%] font-normal text-gray-900/70 [&::marker]:text-gray-900/70 [&::marker]:text-xs ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo neque
          tempore earum eaque, explicabo sed, perferendis sunt laboriosam
          commodi quos quisquam ipsam asperiores. Vel, officia laboriosam nobis
          soluta eius labore nam doloribus quis blanditiis molestias impedit
          ipsam ad facilis magni. Ipsum eius ullam, earum voluptatibus unde
          quisquam? Asperiores minus ut quas a officia. Voluptate, ullam
          doloribus. Reiciendis mollitia culpa provident, suscipit repellat
          voluptatibus cum optio molestiae beatae alias repudiandae minus dolor
          nihil laboriosam et quae. Accusamus temporibus reiciendis, porro dolor
          minus reprehenderit accusantium quis nemo consequuntur blanditiis a,
          eligendi cumque eum ex ullam ipsa quam veniam officia atque aliquam
          quas?
        </p>
      </div>
    </div>
  );
};

export default Education;
