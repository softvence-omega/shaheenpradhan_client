import { useState, useEffect } from "react";
import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import chat from "@/assets/icons/chat.png";
import { Dialog } from "@/components/ui/dialog";
import DialogDateTimeRangePicker from "@/pages/user/DialogDateTimeRangePicker";

type Review = {
  id: string;
  rating: number;
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

  const handleEditReview = (reviewId: string) => {
    alert(`Edit review clicked for review ID: ${reviewId}`);
  };

  // === MOBILE LAYOUT ===
  if (deviceType === "mobile") {
    return (
      <div className="w-full font-DMsans p-4 space-y-8 text-sm">
        {/* TOP SECTION: Assistant Info and Status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={assistantPhoto}
              alt={assistantName}
              className="w-16 h-16 rounded-full object-cover border border-gray-300 mb-5"
            />
            <div>
              <p className="text-xl font-semibold text-[#3A1C71]">
                {assistantName}
              </p>
              <p className="text-sm text-[#4D4D4D]">{assistantRole}</p>
              <p
                className={`mt-1 text-lg font-medium ${getStatusColor(status)}`}
              >
                Status: {status}
              </p>
              <p className="text-lg text-[#4D4D4D]">Booking ID: {bookingId}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="text-lg font-semibold text-[#4D4D4D]">
                Total Price
              </p>
              <p className="text-[#8559CA] text-base">${totalPrice} USD</p>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Price and Location & Time Left + Extend */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-[#4D4D4D]">Time Left</p>
              <p className="text-[#750000] font-semibold text-base">
                {timeLeft}
              </p>
            </div>
            {status === "Currently working" && (
              <a className="text-purple-600 text-base font-semibold border-b-2 border-purple-600 cursor-pointer hover:text-purple-800 hover:border-purple-800">
                Extend time
              </a>
            )}
          </div>
        </div>

        {/* CHAT / REVIEW */}
        <div className="flex justify-between">
          <div>
            {status === "Completed" && reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className="p-3 mb-3 flex space-x-4">
                  <div>
                    <p className="font-semibold text-[#3A1C71] mb-1">
                      Review Given
                    </p>
                    <div className="flex items-center gap-1 mb-1">
                      <Star
                        className="w-5 h-5 text-yellow-400"
                        fill="#FBBF24"
                      />
                      <span className="text-sm text-gray-700 font-medium">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleEditReview(review.id)}
                    className="text-purple-700 font-semibold text-base cursor-pointer mb-5"
                  >
                    Edit Review
                  </button>
                </div>
              ))
            ) : (
              <div className="flex items-center gap-2 text-[#4D4D4D] font-medium">
                <img src={chat} alt="chat icon" className="w-6 h-6" />
                <p className="text-base">Chat</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-[#4D4D4D] text-base">
            <MapPin className="w-5 h-5" />
            <span>{location}</span>
          </div>
        </div>

        {/* DATE & TIME */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-[#4D4D4D]">Date</p>
              <p className="font-semibold text-base text-[#8559CA]">
                {startDate} To {endDate}
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold text-[#4D4D4D]">Time Zone</p>
              <p className="font-semibold text-base text-[#8559CA]">
                {startTime} To {endTime}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end w-full">
            {status === "Completed" ? (
              <Button className="w-full text-[16px] sm:w-auto md:min-w-[140px] cursor-pointer">
                Rebook
              </Button>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    className="text-red-500 w-[106px] h-[42px] px-[24px] py-[12px] text-[16px] rounded-md gap-[10px] cursor-pointer"
                  >
                    Cancel
                  </Button>

                  <Dialog>
                    <div className="grid gap-4 py-4">
                      <DialogDateTimeRangePicker />
                    </div>
                  </Dialog>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // === MEDIUM DEVICE LAYOUT ===
  if (deviceType === "medium") {
    return (
      <div className="w-full font-DMsans p-4 space-y-8">
        {/* TOP SECTION: Assistant Info and Status */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img
              src={assistantPhoto}
              alt={assistantName}
              className="w-16 h-16 rounded-full object-cover border border-gray-300 mb-5"
            />
            <div>
              <p className="text-xl font-semibold text-[#3A1C71]">
                {assistantName}
              </p>
              <p className="text-sm text-[#4D4D4D]">{assistantRole}</p>
              <p
                className={`mt-1 text-sm font-medium ${getStatusColor(status)}`}
              >
                Status: {status}
              </p>
              <p className="text-sm text-[#4D4D4D]">Booking ID: {bookingId}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mb-8">
            <div>
              <p className="font-semibold text-[#4D4D4D]">Total Price</p>
              <p className="text-[#8559CA] text-lg">${totalPrice} USD</p>
            </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Price and Location & Time Left + Extend */}
        <div className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-semibold text-[#4D4D4D]">Time Left</p>
              <p className="text-[#750000] font-semibold">{timeLeft}</p>
            </div>
            {status === "Currently working" && (
              <a className="text-purple-600 text-base font-semibold border-b-2 border-purple-600 cursor-pointer hover:text-purple-800 hover:border-purple-800">
                Extend time
              </a>
            )}
          </div>
        </div>

        {/* CHAT / REVIEW */}
        <div className="flex justify-between">
          <div>
            {status === "Completed" && reviews.length > 0 ? (
              reviews.map((review) => (
                <div key={review.id} className=" p-3 mb-3">
                  <p className="font-semibold text-[#3A1C71] mb-1">
                    Review Given
                  </p>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-5 h-5 text-yellow-400" fill="#FBBF24" />
                    <span className="text-sm text-gray-700 font-medium">
                      {review.rating}
                    </span>
                  </div>
                  <button
                    onClick={() => handleEditReview(review.id)}
                    className="text-purple-700 font-semibold text-sm cursor-pointer  hover:text hover:text-[#3A1C71] "
                  >
                    Edit Review
                  </button>
                </div>
              ))
            ) : (
              <div className="flex items-center gap-2 text-[#4D4D4D] font-medium">
                <img src={chat} alt="chat icon" className="w-6 h-6" />
                <p>Chat</p>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 text-[#4D4D4D]">
            <MapPin className="w-5 h-5" />
            <span>{location}</span>
          </div>
        </div>

        {/* DATE & TIME */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold text-[#4D4D4D]">Date</p>
              <p className="font-semibold text-[#8559CA]">
                {startDate} To {endDate}
              </p>
            </div>
            <div>
              <p className="font-semibold text-[#4D4D4D]">Time Zone</p>
              <p className="font-semibold text-[#8559CA]">
                {startTime} To {endTime}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end w-full">
            {status === "Completed" ? (
              <Button className="w-full text-[16px] sm:w-auto md:min-w-[140px] cursor-pointer">
                Rebook
              </Button>
            ) : (
              <>
                <div className="flex justify-between items-center">
                  <Button
                    variant="ghost"
                    className="text-red-500 w-[106px] h-[42px] px-[24px] py-[12px] text-lg rounded-md gap-[10px] cursor-pointer"
                  >
                    Cancel
                  </Button>
                  <Dialog>
                    <div className="grid gap-4 py-4">
                      <DialogDateTimeRangePicker />
                    </div>
                  </Dialog>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  // === LARGE DEVICE LAYOUT ===
  return (
    <div className="w-full font-DMsans">
      <div className="w-full mx-auto flex justify-between gap-6 font-DMsans">
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
                <pre className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-[#3A1C71] leading-tight font-DMsans">
                  {assistantName}
                </pre>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4D4D4D]">
                  {assistantRole}
                </p>
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
          <div className="gap-2 text-[#4D4D4D] text-lg space-y-9 w-full max-w-xs">
            <div className="flex justify-between items-center space-x-2">
              <div>
                <p className="text-lg font-semibold text-[#4D4D4D]">
                  Time Left
                </p>
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
                      className="flex justify-between items-center gap-4 p-3 space-x-5"
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
                        className="w-[142px] h-[42px] p-[4px] gap-[10px] text-lg text-[#3A1C71] cursor-pointer font-semibold flex items-center justify-center hover:border hover:border-[#AE72FF] hover:rounded-lg transition-all duration-200"
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
                <Button className="w-full sm:w-auto md:min-w-[140px] px-12 py-5 text-[16px] cursor-pointer">
                  Rebook
                </Button>
              ) : (
                <>
                  <div className="flex items-center">
                    <Button
                      variant="ghost"
                      className="text-red-500 w-[106px] h-[42px] px-[24px] py-[12px] text-[16px] rounded-md gap-[10px] cursor-pointer"
                    >
                      Cancel
                    </Button>
                    <Dialog>
                      <div className="grid gap-4 py-4">
                        <DialogDateTimeRangePicker />
                      </div>
                    </Dialog>
                  </div>
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
