import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import { GiBackwardTime } from "react-icons/gi";
import Dashboard from "../UserDashboard/Dashboard";
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

export function SidebarDemo() {
  const links = [
    {
      label: "Home",
      href: "#",
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
      href: "/assistants",
      icon: (
        <UserRound className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Current Bookings",
      href: "/bookings",
      icon: (
        <CalendarDays className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },

    {
      label: "Upcoming Bookings",
      href: "/upcoming-bookings",
      icon: (
        <CalendarFold className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Pending",
      href: "pending/",
      icon: (
        <GiBackwardTime className="h-5.5 w-5.5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Past Bookings",
      href: "/past-bookings",
      icon: (
        <History className="h-5 w-5 shrink-0 text-neutral-700 dark:text-neutral-200" />
      ),
    },
    {
      label: "Billing",
      href: "#",
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
    <div
      className={cn(
        "mx-auto flex w-full  flex-1 flex-col overflow-hidden  md:flex-row ",
        "h-[60vh]"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-4 h-screen bg-white border border-neutral-200">
          <div className=" flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink key={idx} link={link} />
            ))}
          </div>
          <div>
            <SidebarLink
              link={{
                label: "Manu Arora",
                href: "#",
                icon: (
                  <img
                    src=""
                    className="h-7 w-7 shrink-0 "
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

// Dummy dashboard component with content
