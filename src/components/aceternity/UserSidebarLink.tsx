import React from "react";
import { Link } from "react-router-dom";

type LinkType = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const UserSidebarLink = ({ link }: { link: LinkType }) => {
  const isMyBooking = link.label === "My Booking";
  const isSettings = link.label === "Settings";
  return (
    <Link
      to={link.href}
      className="flex items-center gap-2 rounded-[12px] p-2 w-[212px] h-10 text-[16px] font-medium text-neutral-700 hover:bg-[#E6DDF8] dark:text-neutral-200 dark:hover:bg-neutral-800"
    >
      {link.icon && link.icon}
      <span className={isMyBooking || isSettings ? "font-bold" : ""}>
        {link.label}
      </span>
    </Link>
  );
};
