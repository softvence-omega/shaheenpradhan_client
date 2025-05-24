import { MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import chat from "@/assets/icons/chat.png"; // Make sure this path is correct

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
        return "text-[#08D274]";
      case "Upcoming":
        return "text-[#FBBF24]";
      case "Pending Assistant Approval":
        return "text-[#EF4444]";
      case "Completed":
        return "text-[#3B82F6]";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="w-full ">
      <div className="w-full mx-auto  flex flex-col sm:flex-row gap-6 font-DMsans space-x-0 sm:space-x-20">
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

            <div className="space-y-3">
              <div>
                <p className="flex text-[18px] text-[#4D4D4D]">
                  <span className="font-semibold">Status:</span>
                  <pre className={`ml-1 ${getStatusColor(status)}`}>
                    {status}
                  </pre>
                </p>
                <p className="text-[18px] text-[#4D4D4D]">
                  <span className="font-semibold">Booking ID:</span> {bookingId}
                </p>
              </div>
              <div className="font-semibold text-[18px]">
                <p className="text-[#4D4D4D]">Total Price</p>
                <p className="text-[#8559CA]">${totalPrice} USD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="flex justify-between items-center space-x-0 sm:space-x-20 w-full">
          <div className="gap-2 text-[#4D4D4D] text-lg space-y-6 w-full max-w-xs">
            <div className="flex justify-between items-center">
              <div>
                <p>Time Left</p>
                <p className="text-[#8559CA]">{timeLeft}</p>
              </div>
              {status === "Currently working" && (
                <Button
                  variant="outline"
                  className="text-sm text-[#08D274] border-[#08D274]"
                >
                  Extend time
                </Button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>

            {/* Chat or Review */}
            {status === "Completed" && reviews.length > 0 ? (
              <div className="space-y-2">
                {reviews.map((review) => (
                  <div key={review.id}>
                    <p className="text-sm text-[#333] mb-1 font-semibold">
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
                ))}
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <img src={chat} alt="chat icon" className="w-8 h-8" />
                <p className="font-medium">Chat</p>
              </div>
            )}
          </div>

          {/* Date/Time Section */}
          <div className="text-[16px] space-y-6">
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
              <Button variant="ghost" className="text-red-500">
                Cancel
              </Button>
              <Button>Reschedule</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInformation;
