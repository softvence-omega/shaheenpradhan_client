import React from "react";
import { Link } from "react-router-dom";

type LinkType = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

export const SidebarLink = ({ link }: { link: LinkType }) => {
  return (
    <Link
      to={link.href}
      className="flex items-center gap-3 rounded px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
    >
      {link.icon}
      <span>{link.label}</span>
    </Link>
  );
};
