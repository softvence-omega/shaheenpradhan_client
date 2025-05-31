import { Sidebar, SidebarBody } from "@/components/aceternity/Sidebar";
import { MdOutlinePayments } from "react-icons/md";

import { useState } from "react";
import {
  Banknote,
  CalendarCheck,
  CalendarDays,
  CalendarFold,
  CalendarMinus2,
  CircleHelp,
  Clock4,
  History,
  House,
  Settings,
  Star,
} from "lucide-react";
import PlatformReview from "../PlatformReview";
import { SidebarLink } from "@/components/aceternity/SidebarLink";
const AssistantSidebarDashboard = () => {
  const assistantLinks = [
    {
      label: "Home",
      href: "/assistant/home",
      icon: (
        <House className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Availability",
      href: "/assistant/availability",
      icon: (
        <CalendarDays className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "My Tasks",
      href: "/assistant/current-task",
      icon: null, // or remove the icon field entirely
    },
    {
      label: "Current Tasks",
      href: "/assistant/current-task",
      icon: (
        <CalendarCheck className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Upcoming Tasks",
      href: "/assistant/upcoming-task",
      icon: (
        <CalendarMinus2 className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Booking Requests",
      href: "/assistant/booking-task",
      icon: (
        <Clock4 className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Completed Tasks",
      href: "/assistant/completed-task",
      icon: (
        <History className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Settings",
      href: "/assistant/current-task",
      icon: null, // or remove the icon field entirely
    },
    {
      label: "Billing",
      href: "/assistant/assistant-billing",
      icon: (
        <MdOutlinePayments className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Support",
      href: "#",
      icon: (
        <CircleHelp className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Setting",
      href: "#",
      icon: (
        <Settings className="h-6 w-6 shrink-0 text-neutral-700 dark:text-neutral-200" />
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
