"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function DialogDateTimeRangePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [startHour, setStartHour] = useState(7);
  const [endHour, setEndHour] = useState(9);
  const [startMeridiem, setStartMeridiem] = useState<"AM" | "PM">("AM");
  const [endMeridiem, setEndMeridiem] = useState<"AM" | "PM">("PM");

  const clear = () => {
    setDate(undefined);
    setStartHour(7);
    setEndHour(9);
    setStartMeridiem("AM");
    setEndMeridiem("PM");
  };

  const formattedDate = date ? format(date, "PPP") : "Pick a date";
  const formattedTime = `${startHour} ${startMeridiem} → ${endHour} ${endMeridiem}`;

  const handleDone = () => {
    toast.success("Date & Time Selected", {
      description: `${formattedDate} | ${formattedTime}`,
    });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="w-full sm:w-auto">Reschedule</Button>
      </PopoverTrigger>

      <PopoverContent className="w-[350px] p-4 space-y-4" align="start">
        <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
          <span>Select date</span>
          <div className="flex items-center gap-2">
            <button
              onClick={clear}
              className="text-red-500 hover:underline text-xs cursor-pointer"
            >
              Clear
            </button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setDate(new Date())}
              className="cursor-pointer"
            >
              Today
            </Button>
          </div>
        </div>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />

        <div className="text-sm font-semibold text-gray-700">
          Select time range
        </div>

        <div className="flex items-center justify-between gap-4">
          {/* Start Time */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">Start</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={startHour}
                onChange={(e) => setStartHour(+e.target.value)}
                className="w-16 rounded-lg border px-2 py-1 text-center"
                min={1}
                max={12}
              />
              <select
                value={startMeridiem}
                onChange={(e) =>
                  setStartMeridiem(e.target.value as "AM" | "PM")
                }
                className="rounded-lg border px-2 py-1"
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>

          <span className="text-lg font-semibold">→</span>

          {/* End Time */}
          <div className="flex flex-col gap-1">
            <label className="text-xs text-gray-500">End</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                value={endHour}
                onChange={(e) => setEndHour(+e.target.value)}
                className="w-16 rounded-lg border px-2 py-1 text-center"
                min={1}
                max={12}
              />
              <select
                value={endMeridiem}
                onChange={(e) => setEndMeridiem(e.target.value as "AM" | "PM")}
                className="rounded-lg border px-2 py-1"
              >
                <option>AM</option>
                <option>PM</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <Button
            variant="outline"
            onClick={clear}
            className="w-[88px] h-[40px] px-4 py-3 border border-gray-300 rounded-lg gap-2 cursor-pointer"
          >
            Cancel
          </Button>

          <Button
            onClick={handleDone}
            className="bg-[#1976D2] text-white w-[184px] h-[40px] px-3 py-[12px] gap-2 rounded-lg cursor-pointer"
          >
            Done
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

/* 
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { toast } from "sonner"; //

export default function DialogDateTimeRangePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [startHour, setStartHour] = useState(7);
  const [endHour, setEndHour] = useState(9);
  const [startMeridiem, setStartMeridiem] = useState<"AM" | "PM">("AM");
  const [endMeridiem, setEndMeridiem] = useState<"AM" | "PM">("PM");

  const clear = () => {
    setDate(undefined);
    setStartHour(7);
    setEndHour(9);
    setStartMeridiem("AM");
    setEndMeridiem("PM");
  };

  const formattedDate = date ? format(date, "PPP") : "Pick a date";
  const formattedTime = `${startHour} ${startMeridiem} → ${endHour} ${endMeridiem}`;

  const handleDone = () => {
    toast.success("Date & Time Selected", {
      description: `${formattedDate} | ${formattedTime}`,
    });
  };

  return (
    <div className="w-full max-w-sm">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "w-full justify-between text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <span>
              {date
                ? `${formattedDate} | ${formattedTime}`
                : "Select Date & Time"}
            </span>
            <span className="text-gray-500 text-sm ml-2">📅</span>
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-[350px] p-4 space-y-4" align="start">
          <div className="flex items-center justify-between text-sm font-semibold text-gray-700">
            <span>Select date</span>
            <div className="flex items-center gap-2">
              <button
                onClick={clear}
                className="text-red-500 hover:underline text-xs cursor-pointer"
              >
                Clear
              </button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => setDate(new Date())}
                className="cursor-pointer"
              >
                Today
              </Button>
            </div>
          </div>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />

          <div className="text-sm font-semibold text-gray-700">
            Select time range
          </div>

          <div className="flex items-center justify-between gap-4">
       
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Start</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={startHour}
                  onChange={(e) => setStartHour(+e.target.value)}
                  className="w-16 rounded-lg border px-2 py-1 text-center"
                  min={1}
                  max={12}
                />
                <select
                  value={startMeridiem}
                  onChange={(e) =>
                    setStartMeridiem(e.target.value as "AM" | "PM")
                  }
                  className="rounded-lg border px-2 py-1"
                >
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>

            <span className="text-lg font-semibold">→</span>

       
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">End</label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  value={endHour}
                  onChange={(e) => setEndHour(+e.target.value)}
                  className="w-16 rounded-lg border px-2 py-1 text-center"
                  min={1}
                  max={12}
                />
                <select
                  value={endMeridiem}
                  onChange={(e) =>
                    setEndMeridiem(e.target.value as "AM" | "PM")
                  }
                  className="rounded-lg border px-2 py-1"
                >
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button
              variant="outline"
              onClick={clear}
              className="w-[88px] h-[40px] px-4 py-3 border border-gray-300 rounded-lg gap-2 cursor-pointer"
            >
              Cancel
            </Button>

            <Button
              onClick={handleDone}
              className="bg-[#1976D2] text-white w-[184px] h-[40px] px-3 py-[12px] gap-2 rounded-lg cursor-pointer"
            >
              Done
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
 */
