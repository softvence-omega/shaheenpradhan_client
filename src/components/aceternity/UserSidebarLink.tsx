import React from "react";
import { Link } from "react-router-dom";

type LinkType = {
  label: string;
  href: string;
  icon: React.ReactNode;
  count?: number;
};

type Props = {
  link: LinkType;
  isActive: boolean;
  onClick: () => void;
};

export const UserSidebarLink = ({ link, isActive, onClick }: Props) => {
  const isMyBooking = link.label === "My Booking";
  const isSettings = link.label === "Settings";

  const activeColor = "#8559CA";
  const isPlainText = link.icon === null;

  const content = (
    <div className="flex items-center gap-2">
      {link.icon && (
        <span
          className={`${isActive ? "text-[#8559CA]" : "text-inherit"} flex`}
        >
          {link.icon}
        </span>
      )}
      <span className={isMyBooking || isSettings ? "font-bold" : ""}>
        {link.label}
      </span>
    </div>
  );

  if (isPlainText) {
    // Render plain text instead of a button
    return (
      <div className="p-2 w-[212px] text-[16px] font-medium text-neutral-700 dark:text-neutral-200">
        {content}
      </div>
    );
  }

  return (
    <Link
      to={link.href}
      onClick={onClick}
      className={`flex justify-between items-start gap-1 rounded-[12px] p-2 w-[212px] text-[16px] font-medium transition-colors duration-200
        ${
          isActive
            ? "bg-[#E6DDF8] text-[#8559CA]"
            : "text-neutral-700 dark:text-neutral-200 hover:bg-[#E6DDF8]"
        }
      `}
    >
      {content}

      {link.count !== undefined && (
        <span className="ml-7 text-sm px-0 py-0 w-[40px] h-[21px] flex items-center justify-center border border-[#B655DA] rounded-3xl">
          {link.count}
        </span>
      )}
    </Link>
  );
};
