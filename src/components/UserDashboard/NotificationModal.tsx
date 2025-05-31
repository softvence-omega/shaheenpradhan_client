import { Bell, Diamond } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import { Card, CardContent, CardHeader } from "../ui/card";
import { useState } from "react";
import Divider from "../shared/Divider";

const NotificationModal = () => {
  const [open, setOpen] = useState<boolean>(false);
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div>
          <Bell className="w-5 h-4.5 relative" />
          <p className="bg-red-600 text-center text-white rounded-full text-xs absolute w-5 h-4.5 top-1  right-14">
            5
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md p-0 overflow-hidden [&>button]:hidden">
        <Card className="border-0 shadow-none py-3 rounded-none">
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
            <Divider />
          </CardHeader>

          <CardContent className="space-y-4 pb-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex justify-between items-start gap-3"
              >
                <div className="flex-1 space-y-1">
                  <h3
                    className={`f ${getNotificationColor(
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
        

            <div className="pt-2 text-center">
              <Button
                variant="link"
                className="text-purple-600 hover:text-purple-700 p-0 h-auto font-normal"
              >
                View all notifications
              </Button>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationModal;
