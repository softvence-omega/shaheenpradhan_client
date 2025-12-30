import assistphoto from "@/assets/images/taskphoto.png";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReviewEdit = () => {
  return (
    <div className="w-full">
      <div className="mx-auto bg-white rounded-[24px] shadow-sm p-4 lg:p-6 flex flex-col lg:flex-row gap-6 lg:gap-20 font-DMsans">
        {/* MOBILE LAYOUT */}
        <div className="flex flex-col w-full lg:hidden">
          {/* Profile top row */}
          <div className="flex items-center gap-4">
            <img
              src={assistphoto}
              alt="Sarah Malik"
              className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
            />
            <div className="flex flex-col flex-1">
              <h2 className="text-[18px] font-semibold text-[#3A1C71]">
                Sarah Malik
              </h2>
              <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
              <div className="mt-1">
                <p className="text-sm font-medium text-gray-700">Task</p>
                <p className="text-sm text-gray-600">
                  Calendar management, travel coordination
                </p>
              </div>
            </div>
          </div>

          {/* Duration and Review */}
          <div className=" flex space-x-10 mt-4 space-y-3 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-800">Duration</p>
              <p className="text-[#8559CA]">8 Hours</p>
            </div>

            <div className="items-center gap-2">
              <span className="font-semibold">Review Given</span>
              <div className="flex items-center gap-[6px] w-fit h-[25px] rounded-full px-[8px] py-[2px] bg-white text-[#F9A825]">
                <FaStar className="w-4 h-4 text-[#F9A825]" />
                <p className="text-sm leading-none">5</p>
              </div>
            </div>
          </div>

          {/* Buttons stacked */}
          <div className="mt-6 flex flex-col gap-4">
            <Link to="/user/past-booking">
              <Button
                variant="outline"
                className="w-full cursor-pointer hidden md:flex items-center gap-4 mt-2"
              >
                View Full Details
              </Button>
            </Link>
            <Button
              variant="ghost"
              className="text-[#B655DA] w-full cursor-pointer"
            >
              Edit Review
            </Button>
            <Button className="w-full cursor-pointer text-[16px]">
              Rebook
            </Button>
          </div>
        </div>

        {/* DESKTOP LAYOUT (unchanged) */}
        <div className="hidden lg:flex flex-col lg:flex-row items-center lg:items-start gap-4 flex-1">
          {/* Profile Section */}
          <img
            src={assistphoto}
            alt="Sarah Malik"
            className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
          />
          <div className="text-center lg:text-left space-y-2 flex-1">
            <h2 className="text-[18px] font-semibold text-[#3A1C71]">
              Sarah Malik
            </h2>
            <p className="text-[15px] text-[#4D4D4D]">Event Specialist</p>
            <div className="mt-2 space-y-1">
              <p className="text-sm font-medium text-gray-700">Task</p>
              <p className="text-sm text-gray-600">
                Calendar management, travel coordination
              </p>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6 flex-1">
          {/* Time & Location */}
          <div className="space-y-4 text-sm text-gray-700">
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <div>
                <p className="font-medium text-gray-800">Duration</p>
                <p className="text-[#8559CA]">8 Hours</p>
              </div>
            </div>
            <div className="items-center gap-2 text-gray-600">
              <span className="font-semibold">Review Given</span>
              <div className="flex items-center gap-[6px] w-fit h-[25px] rounded-full px-[8px] py-[2px] bg-white text-[#F9A825]">
                <FaStar className="w-4 h-4 text-[#F9A825]" />
                <p className="text-sm leading-none">5</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-4 text-sm w-full lg:w-auto space-y-5">
            <div className="flex justify-end sm:flex-row items-start sm:items-center gap-4">
              <Link to="/user/past-booking">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto cursor-pointer"
                >
                  View Full Details
                </Button>
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="ghost"
                className="text-[#B655DA] w-full sm:w-auto cursor-pointer"
              >
                Edit Review
              </Button>
              <Button className="w-full text-[16px] sm:w-auto cursor-pointer">
                Rebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewEdit;
