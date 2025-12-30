import React from "react";
import { Link } from "react-router-dom";

type LinkType = {
  label: string;
  href: string;
  icon: React.ReactNode | null;
};

type Props = {
  link: LinkType;
  isActive: boolean;
  onClick: () => void;
};

export const AssistantSidebarLink = ({ link, isActive, onClick }: Props) => {
  const isPlainText = link.icon === null;
  const isBoldText = link.label === "My Tasks" || link.label === "Settings";

  const content = (
    <div className="flex items-center gap-2">
      {link.icon && (
        <span
          className={`${isActive ? "text-[#8559CA]" : "text-inherit"} flex`}
        >
          {link.icon}
        </span>
      )}
      <span className={isBoldText ? "font-bold" : ""}>{link.label}</span>
    </div>
  );

  if (isPlainText) {
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
      className={`flex items-start gap-1 rounded-[12px] p-2 w-[212px] text-[16px] font-medium transition-colors duration-200
        ${
          isActive
            ? "bg-[#E6DDF8] text-[#8559CA]"
            : "text-neutral-700 dark:text-neutral-200 hover:bg-[#E6DDF8]"
        }
      `}
    >
      {content}
    </Link>
  );
};
