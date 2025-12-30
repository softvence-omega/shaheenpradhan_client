import { useState, useEffect } from "react";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import chat from "@/assets/icons/chat.png";

type Review = {
  id: string;
  rating: number; // out of 5
};

type TaskInfoProps = {
  assistantName: string;
  assistantRole: string;
  status: "Currently working" | "Upcoming" | "Pending" | "Completed";
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

const AssistTaskInformation = ({
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
  const [deviceType, setDeviceType] = useState<"mobile" | "medium" | "large">(
    "large"
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setDeviceType("mobile");
      } else if (width <= 1024) {
        setDeviceType("medium");
      } else {
        setDeviceType("large");
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getStatusColor = (status: TaskInfoProps["status"]) => {
    switch (status) {
      case "Currently working":
        return "text-[#08D274]";
      case "Upcoming":
        return "text-[#FBAC1A]";
      case "Pending":
        return "text-[#808080]";
      case "Completed":
        return "text-[#4099FF]";
      default:
        return "text-gray-500";
    }
  };

  const handleEditReview = (reviewId: string) => {
    alert(`Edit review clicked for review ID: ${reviewId}`);
  };

  const renderTimeLeft = () => {
    return status === "Completed"
      ? "Completed"
      : status === "Upcoming" || status === "Pending"
      ? "Not Started"
      : timeLeft;
  };

  // === MOBILE LAYOUT ===
  if (deviceType === "mobile") {
    return (
      <div className="w-full font-DMsans p-4 space-y-6 text-sm">
        {/* TOP SECTION: Assistant Info and Status */}
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div>
              <p className="text-lg font-semibold text-[#3A1C71]">
                {assistantName}
              </p>
              <p className="text-base text-[#4D4D4D]">{assistantRole}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex justify-center items-center space-x-1">
              <p className="text-lg font-semibold text-[#4D4D4D]">Status:</p>
              <span
                className={`text-base font-medium ${getStatusColor(status)}`}
              >
                {status}
              </span>
            </div>
            <div className="flex justify-center items-center space-x-1">
              <p className="text-lg font-semibold text-[#4D4D4D]">
                Booking ID:
              </p>
              <span className="text-base ">{bookingId}</span>
            </div>
          </div>
        </div>

        {/* PRICE SECTION */}
        <div className="flex justify-between items-center ">
          <p className="text-lg font-semibold text-[#4D4D4D]">Total Price</p>
          <p className="text-[#8559CA] text-base">${totalPrice} USD</p>
        </div>

        {/* TIME LEFT AND LOCATION */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg  font-semibold text-[#4D4D4D]">Time Left</p>
            <p
              className={
                status === "Completed" ||
                status === "Upcoming" ||
                status === "Pending"
                  ? "text-[#808080]"
                  : "text-[#750000]"
              }
            >
              {renderTimeLeft()}
            </p>
          </div>
          <div className="flex items-center gap-1 text-base text-[#4D4D4D]">
            <MapPin className="w-3 h-3" />
            <span>{location}</span>
          </div>
        </div>

        {/* DATE & TIME */}
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg  font-semibold text-[#4D4D4D]">Date</p>
              <p className="text-base text-[#8559CA]">
                {startDate} - {endDate}
              </p>
            </div>
            <div>
              <p className="text-lg  font-semibold text-[#4D4D4D]">Time</p>
              <p className="text-base text-[#8559CA]">
                {startTime} - {endTime}
              </p>
            </div>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="pt-4 space-y-3">
          {status === "Completed" && reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="p-2 bg-gray-50 rounded-lg">
                <p className="font-semibold text-[#3A1C71] text-sm mb-1">
                  Review Given
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                    <span className="text-xs text-gray-700 font-medium">
                      {review.rating}
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : status === "Pending" ? (
            <Button className="w-full cursor-pointer text-[16px]">
              Accept
            </Button>
          ) : status === "Upcoming" ? (
            <Button
              variant="outline"
              className="w-full text-black border-black"
            >
              Ask Reschedule
            </Button>
          ) : (
            <div className="flex items-center justify-center gap-2 text-[#4D4D4D] font-medium py-2 cursor-pointer">
              <img src={chat} alt="chat icon" className="w-5 h-5" />
              <p>Chat</p>
            </div>
          )}

          <div className="pt-2">
            {status === "Completed" ? (
              <Button
                variant="ghost"
                className="w-full text-gray-400 cursor-pointer text-[16px]"
                disabled
              >
                Cancel
              </Button>
            ) : status === "Pending" ? (
              <Button
                variant="ghost"
                className="w-full text-red-500 cursor-pointer text-[16px]"
              >
                Cancel
              </Button>
            ) : (
              <Button
                variant="ghost"
                className="w-full text-red-500 cursor-pointer text-[16px]"
              >
                Request Cancel
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // === MEDIUM DEVICE LAYOUT ===
  if (deviceType === "medium") {
    return (
      <div className="w-full font-DMsans p-6 space-y-6">
        {/* TOP SECTION: Assistant Info and Status */}
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-4">
            <div>
              <p className="text-lg font-semibold text-[#3A1C71]">
                {assistantName}
              </p>
              <p className="text-base text-[#4D4D4D]">{assistantRole}</p>
              <p
                className={`mt-1 text-base font-medium ${getStatusColor(
                  status
                )}`}
              >
                Status: {status}
              </p>
              <p className="text-base text-[#4D4D4D]">
                Booking ID: {bookingId}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-[#4D4D4D]">Total Price</p>
            <p className="text-[#8559CA] text-base">${totalPrice} USD</p>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-[#4D4D4D]">Time Left</p>
              <p
                className={
                  status === "Completed" ||
                  status === "Upcoming" ||
                  status === "Pending"
                    ? "text-[#808080]"
                    : "text-[#750000] font-semibold text-base"
                }
              >
                {renderTimeLeft()}
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#4D4D4D]">
              <MapPin className="w-4 h-4" />
              <span className="text-base">{location}</span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-[#4D4D4D]">Date</p>
              <p className="text-[#8559CA] font-medium">
                {startDate} - {endDate}
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-[#4D4D4D]">Time</p>
              <p className="text-[#8559CA] text-base">
                {startTime} - {endTime}
              </p>
            </div>
          </div>
        </div>

        {/* ACTION SECTION */}
        <div className="pt-4">
          {status === "Completed" && reviews.length > 0 ? (
            reviews.map((review) => (
              <div key={review.id} className="p-3 bg-gray-50 rounded-lg mb-3">
                <p className="font-semibold text-[#3A1C71] mb-1">
                  Review Given
                </p>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400" fill="#FBBF24" />
                  <span className="text-sm text-gray-700 font-medium">
                    {review.rating}
                  </span>
                </div>
              </div>
            ))
          ) : status === "Pending" ? (
            <div className="flex gap-3">
              <Button className="flex-1">Accept</Button>
              <Button
                variant="ghost"
                className="flex-1 text-red-500 cursor-pointer"
              >
                Cancel
              </Button>
            </div>
          ) : status === "Upcoming" ? (
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1 text-black border-black cursor-pointer"
              >
                Ask Reschedule
              </Button>
              <Button
                variant="ghost"
                className="flex-1 text-red-500 cursor-pointer"
              >
                Request Cancel
              </Button>
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-[#4D4D4D] font-medium cursor-pointer">
                <img src={chat} alt="chat icon" className="w-6 h-6" />
                <p>Chat</p>
              </div>
              <Button variant="ghost" className="text-red-500 cursor-pointer">
                Request Cancel
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // === LARGE DEVICE LAYOUT ===
  return (
    <div className="w-full font-DMsans">
      <div className="w-full mx-auto flex  justify-between  gap-6 font-DMsans   ">
        {/* Profile Section */}
        <div className="flex justify-center items-center">
          <div className="space-y-7">
            <div className="flex items-center space-x-3">
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

        <div className="flex justify-between items-center ">
          <div className="gap-2 text-[#4D4D4D] text-lg space-y-9 w-full max-w-xs">
            <div className="flex justify-between items-center">
              <div>
                <p>Time Left</p>
                <p
                  className={
                    status === "Completed" ||
                    status === "Upcoming" ||
                    status === "Pending"
                      ? "text-[#808080]"
                      : "text-[#750000]"
                  }
                >
                  {status === "Completed"
                    ? "Completed"
                    : status === "Upcoming" || status === "Pending"
                    ? "Not Started"
                    : timeLeft}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>

            {/* Chat / Accept / Ask Reschedule / Reviews */}
            <div>
              {status === "Completed" && reviews.length > 0 ? (
                <div className="space-y-2">
                  {reviews.map((review) => (
                    <div
                      key={review.id}
                      className="flex justify-between items-center gap-4 p-3"
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
                    </div>
                  ))}
                </div>
              ) : status === "Pending" ? (
                <Button className="cursor-pointer">Accept</Button>
              ) : status === "Upcoming" ? (
                <Button
                  variant="outline"
                  className="text-black border-black cursor-pointer"
                >
                  Ask Reschedule
                </Button>
              ) : (
                <div className="flex items-center gap-2 cursor-pointer">
                  <img src={chat} alt="chat icon" className="w-8 h-8" />
                  <p className="font-medium">Chat</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mr-20 ">
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

            {/* Footer Buttons */}
            <div className="space-x-3">
              {status === "Completed" ? (
                <button className="text-[#BDBCBE]">Cancel</button>
              ) : status === "Pending" ? (
                <Button variant="ghost" className="text-red-500 cursor-pointer">
                  Cancel
                </Button>
              ) : status === "Upcoming" ? (
                <Button variant="ghost" className="text-red-500 cursor-pointer">
                  Request Cancel
                </Button>
              ) : (
                <Button variant="ghost" className="text-red-500 cursor-pointer">
                  Request Cancel
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistTaskInformation;