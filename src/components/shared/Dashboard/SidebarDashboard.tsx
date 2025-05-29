import { Sidebar, SidebarBody } from "@/components/aceternity/Sidebar";
import { GiBackwardTime } from "react-icons/gi";
import React, { useState } from "react";
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
import { SidebarLink } from "@/components/aceternity/SidebarLink";
const SidebarDashboard = () => {
  const links = [
    {
      label: "Home",
      href: "/user/home",
      icon: (
        <House className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Saved",
      href: "/saved",
      icon: (
        <Star className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Find Assistants",
      href: "/user/assistant-booking",
      icon: (
        <UserRound className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Find Assistants Confirm",
      href: "/user/assistant-request-confirm",
      icon: (
        <UserRound className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Current Bookings",
      href: "/user/current-booking",
      icon: (
        <CalendarDays className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },

    {
      label: "Upcoming Bookings",
      href: "/user/upcoming-booking",
      icon: (
        <CalendarFold className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Pending",
      href: "/user/pending",
      icon: (
        <GiBackwardTime className="h-5.5 w-5.5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Past Bookings",
      href: "/user/past-booking",
      icon: (
        <History className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Billing",
      href: "/user/billing",
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
          {links.map((link, idx) => (
            <SidebarLink key={idx} link={link} />
          ))}
        </div>
        <PlatformReview />
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarDashboard;
