import { Diamond } from "lucide-react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";

const NotificationModal = () => {
  const notifications = [
    {
      id: 1,
      title: "Booking Confirmed: #BK123",
      description: "Assistant Jane Smith confirmed for May 10th",
      timestamp: "1 hour ago",
      type: "success",
    },
    {
      id: 2,
      title: "Urgent: Task Update Required",
      description: "Assistant Michael B. needs more info for booking #BK120",
      timestamp: "1 hour ago",
      type: "urgent",
    },
    {
      id: 3,
      title: "New Message from Support",
      description:
        "We've responded to your recent inquiry about billing. Check your support tickets.",
      timestamp: "1 hour ago",
      type: "info",
    },
  ];

  const getNotificationColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-blue-600";
      case "urgent":
        return "text-red-500";
      case "info":
        return "text-yellow-600";
      default:
        return "text-gray-900";
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Header bar */}
      <div className="bg-gray-700 text-white px-4 py-2 flex items-center gap-2 text-sm">
        <Diamond className="w-4 h-4" />
        <span>Notifications</span>
      </div>

      {/* Modal content */}
      <Card className="shadow-lg border-0 rounded-t-none">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Notifications
            </h2>
            <Button
              variant="link"
              className="text-purple-600 hover:text-purple-700 p-0 h-auto font-normal"
            >
              Mark read
            </Button>
          </div>
        </CardHeader>

        <CardContent className="space-y-4 pb-4">
          {notifications.map((notification) => (
            <div
              key={notification.id}
              className="flex justify-between items-start gap-3"
            >
              <div className="flex-1 space-y-1">
                <h3
                  className={`font-medium ${getNotificationColor(
                    notification.type
                  )}`}
                >
                  {notification.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {notification.description}
                </p>
              </div>
              <span className="text-xs text-gray-500 whitespace-nowrap">
                {notification.timestamp}
              </span>
            </div>
          ))}

          <div className="pt-2">
            <Button
              variant="link"
              className="text-purple-600 hover:text-purple-700 p-0 h-auto font-normal"
            >
              View all notification
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationModal;
