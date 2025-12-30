// pages/SidebarDashboard.tsx
import { Sidebar, SidebarBody } from "@/components/aceternity/Sidebar";
import { useState } from "react";
import {
  Banknote,
  CalendarDays,
  CalendarFold,
  CircleHelp,
  Clock4,
  History,
  House,
  Search,
  Settings,
  Star,
  UserRound,
} from "lucide-react";
import PlatformReview from "../PlatformReview";
import { UserSidebarLink } from "@/components/aceternity/UserSidebarLink";

const SidebarDashboard = () => {
  const savedCount = 24; // You can fetch this dynamically

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
      href: "/user/saved",
      icon: (
        <Star className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
      count: savedCount,
    },
    {
      label: "Find Assistants",
      href: "/user/find-assistant-matcher",
      icon: (
        <Search className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "My Booking",
      href: "/user/current-booking",
      icon: null,
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
        <Clock4 className="h-5.5 w-5.5 shrink-0 text-neutral-700 dark:text-neutral-200" />
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
      label: "Settings",
      href: "/assistant/current-task",
      icon: null,
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
      href: "/user/support",
      icon: (
        <CircleHelp className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Setting",
      href: "/user/setting",
      icon: (
        <Settings className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
  ];

  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <SidebarBody className="justify-between gap-4 bg-white border-neutral-200 h-[90vh]">
        <div className="flex flex-col gap-2">
          {links.map((link, idx) => (
            <UserSidebarLink
              key={idx}
              link={link}
              isActive={activeIndex === idx}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
        <PlatformReview />
      </SidebarBody>
    </Sidebar>
  );
};

export default SidebarDashboard;
