import {
  Sidebar,
  SidebarBody,
  SidebarLink,
} from "@/components/aceternity/Sidebar";
import { GiBackwardTime } from "react-icons/gi";
import { useState } from "react";
import {
  Banknote,
  CalendarDays,
  CalendarFold,
  CircleHelp,
  History,
  House,
  Settings,
  Star,
  UserRound,
} from "lucide-react";
import PlatformReview from "../PlatformReview";
const AssistantSidebarDashboard = () => {
  const assistantLinks = [
    {
      label: "Home",
      href: "/assistant/home",
      icon: (
        <House className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Availability",
      href: "/assistant/availability",
      icon: (
        <CalendarDays className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "My Tasks",
      href: "/assistant/my-tasks",
      icon: (
        <UserRound className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Current Tasks",
      href: "/assistant/current-tasks",
      icon: (
        <CalendarFold className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Upcoming Tasks",
      href: "/assistant/upcoming-tasks",
      icon: (
        <GiBackwardTime className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Booking Requests",
      href: "/assistant/booking-requests",
      icon: (
        <History className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Completed Tasks",
      href: "/assistant/completed-tasks",
      icon: (
        <Star className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Billing",
      href: "/assistant/assistant-billing",
      icon: (
        <Banknote className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Support",
      href: "#",
      icon: (
        <CircleHelp className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <Settings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className="justify-between gap-4  bg-white border-t border-neutral-200 h-[80vh]">
        <div className=" flex flex-col gap-2">
          {assistantLinks.map((link, idx) => (
            <SidebarLink key={idx} link={link} />
          ))}
        </div>
        <PlatformReview />
      </SidebarBody>
    </Sidebar>
  );
};

export default AssistantSidebarDashboard;
