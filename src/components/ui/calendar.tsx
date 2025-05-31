import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("w-full", className)} // 👈 Add w-full here
      classNames={{
        months: "flex flex-col sm:flex-row gap-4 w-full", // 👈 Ensure full width
        month: "flex-1 w-full", // 👈 Take up full width
        caption: "flex justify-between items-center px-2",
        caption_label: "text-sm font-medium",
        nav: "flex items-center gap-1",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "w-7 h-7 bg-transparent p-0 opacity-50 hover:opacity-100"
        ),
        nav_button_previous: "ml-1",
        nav_button_next: "mr-1",
        table: "w-full border-collapse",
        head_row: "flex w-full",
        head_cell:
          "text-muted-foreground w-11 h-11 font-normal text-xs text-center ",
        row: "flex w-full",
        cell: cn(
          "relative text-center text-sm focus:z-20 w-11 h-11",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-8 h-8 p-0 font-normal aria-selected:opacity-100"
        ),
        day_today: "bg-accent text-accent-foreground",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary focus:bg-primary",
        ...classNames,
      }}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("w-4 h-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("w-4 h-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}

export { Calendar };
