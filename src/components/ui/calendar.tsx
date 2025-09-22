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
      // ✅ Ensure users can pick *any* date (remove default disabled logic)
      disabled={[]} 
      className={cn("w-full", className)}
      classNames={{
        months: "flex flex-col sm:flex-row gap-6 w-full", // spacing + responsive
        month: "flex-1 w-full bg-white rounded-lg border shadow-sm p-4", // card style
        caption: "flex justify-between items-center mb-3",
        caption_label: "text-sm font-semibold text-gray-900",
        nav: "flex items-center gap-2",
        nav_button: cn(
          buttonVariants({ variant: "outline" }),
          "w-8 h-8 bg-transparent p-0 opacity-70 hover:opacity-100"
        ),
        nav_button_previous: "ml-1",
        nav_button_next: "mr-1",
        table: "w-full border-collapse",
        head_row: "flex w-full mb-2",
        head_cell:
          "text-muted-foreground w-11 h-11 font-medium text-xs text-center uppercase",
        row: "flex w-full",
        cell: cn(
          "relative text-center text-sm focus:z-20 w-11 h-11",
          props.mode === "range"
            ? "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md"
            : "[&:has([aria-selected])]:rounded-md"
        ),
        day: cn(
          buttonVariants({ variant: "ghost" }),
          "w-9 h-9 p-0 font-normal aria-selected:opacity-100 cursor-pointer transition-colors"
        ),
        day_today: "bg-accent text-accent-foreground font-semibold",
        day_selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-white focus:bg-primary rounded-md",
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
