import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import chat from "@/assets/icons/chat.png"; // Make sure this path is correct
import { useState } from "react";
import DialogDateTimeRangePicker from "@/pages/user/DialogDateTimeRangePicker";

type Review = {
  id: string;
  rating: number; // out of 5
};

type TaskInfoProps = {
  assistantPhoto: string;
  assistantName: string;
  assistantRole: string;
  status:
    | "Currently working"
    | "Upcoming"
    | "Pending Assistant Approval"
    | "Completed";
  bookingId: string;
  totalPrice: number;
  location: string;
  timeLeft: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  reviews?: Review[];
};

const TaskInformation = ({
  assistantPhoto,
  assistantName,
  assistantRole,
  status,
  bookingId,
  totalPrice,
  location,
  timeLeft,
  startDate,
  endDate,
  startTime,
  endTime,
  reviews = [],
}: TaskInfoProps) => {
  const getStatusColor = (status: TaskInfoProps["status"]) => {
    switch (status) {
      case "Currently working":
        return "text-[#0AD274]";
      case "Upcoming":
        return "text-[#FF4040]";
      case "Pending Assistant Approval":
        return "text-[#FBAF1A]";
      case "Completed":
        return "text-[#4099FF]";
      default:
        return "text-gray-500";
    }
  };

  // Optional: you can extend to open a modal or navigate to edit page
  const handleEditReview = (reviewId: string) => {
    alert(`Edit review clicked for review ID: ${reviewId}`);
    // TODO: Implement your edit review logic here (modal, page redirect, etc.)
  };

  return (
    /* User Book */
    <div className="w-full font-DMsans">
      <div className="w-full mx-auto flex  justify-between  gap-6 font-DMsans  ">
        {/* Profile Section */}
        <div className="flex justify-center items-center">
          <div className="space-y-7">
            <div className="flex items-center space-x-3">
              <img
                src={assistantPhoto}
                alt={assistantName}
                className="w-[60px] h-[60px] rounded-full object-cover border border-gray-300"
              />
              <div className="flex flex-col justify-center">
                <pre className="text-[18px] font-semibold text-[#3A1C71] leading-tight font-DMsans">
                  {assistantName}
                </pre>
                <p className="text-[15px] text-[#4D4D4D]">{assistantRole}</p>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <p className="flex text-[18px] text-[#4D4D4D]">
                  <pre className={` ${getStatusColor(status)}`}>
                    <span className="font-semibold text-[#4D4D4D]">
                      Status:
                    </span>{" "}
                    {status}
                  </pre>
                </p>
                <pre className="text-[18px] text-[#4D4D4D]">
                  <span className="font-semibold">Booking ID:</span> {bookingId}
                </pre>
              </div>
              <div className="font-semibold text-[18px]">
                <p className="text-[#4D4D4D]">Total Price</p>
                <p className="text-[#8559CA]">${totalPrice} USD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex justify-between items-center">
          <div className="gap-2 text-[#4D4D4D] text-lg space-y-9 w-full max-w-xs ">
            <div className="flex justify-between items-center">
              <div>
                <p>Time Left</p>
                <p className="text-[#750000]">{timeLeft}</p>
              </div>
              {status === "Currently working" && (
                <a className="mt-6 ml-2 inline-block text-[18px] font-medium leading-[18px] text-[#8559CA] border-b-2 border-[#8559CA] hover:text-[#6b41b3] hover:border-[#6b41b3] transition duration-200 cursor-pointer">
                  Extend time
                </a>
              )}
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>

            {/* Chat or Review */}
            <div>
              {status === "Completed" && reviews.length > 0 ? (
                <div className="space-y-2">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex justify-between items-center gap-4  p-3 "
                    >
                      <div>
                        <p className="text-lg text-[#333] mb-1 font-semibold">
                          Review Given
                        </p>
                        <div className="flex items-center gap-1">
                          <Star
                            className="w-4 h-4 text-yellow-400"
                            fill="#FBBF24"
                          />
                          <span className="text-sm text-gray-600 font-medium">
                            {review.rating}
                          </span>
                        </div>
                      </div>
                      <a
                        onClick={() => handleEditReview(review.id)}
                        className="w-[142px] h-[42px]  p-[4px] gap-[10px] text-lg text-[#3A1C71] cursor-pointer font-semibold"
                      >
                        Edit Review
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <img src={chat} alt="chat icon" className="w-8 h-8" />
                  <p className="font-medium">Chat</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mr-20">
          {/* Date/Time Section */}
          <div className="text-[16px] space-y-8">
            <div>
              <p className="text-[#4D4D4D] font-semibold">Date</p>
              <p className="font-medium">
                <span className="text-[#8559CA]">{startDate}</span> To{" "}
                <span className="text-[#8559CA] ml-1">{endDate}</span>
              </p>
            </div>
            <div>
              <p className="text-[#4D4D4D] font-semibold">Time Zone</p>
              <p className="font-medium">
                <span className="text-[#8559CA]">{startTime}</span> To{" "}
                <span className="text-[#8559CA] ml-1">{endTime}</span>
              </p>
            </div>

            <div className="space-x-3">
              {status === "Completed" ? (
                <Button>Rebook</Button>
              ) : (
                <>
                  <Button variant="ghost" className="text-red-500">
                    Cancel
                  </Button>
                  {/* <Button className="cursor-pointer">Reschedule</Button> */}
                  <DialogDateTimeRangePicker />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInformation;
