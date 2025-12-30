import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

export default function DialogDateTimeRangePicker() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [startHour, setStartHour] = useState(7);
  const [endHour, setEndHour] = useState(9);
  const [startMeridiem, setStartMeridiem] = useState<"AM" | "PM">("AM");
  const [endMeridiem, setEndMeridiem] = useState<"AM" | "PM">("PM");
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Button
        onClick={() => setIsOpen(true)}
        className="w-[144px] text-[16px] px-6 md:px-12 py-3 md:py-5 gap-[10px] cursor-pointer"
      >
        Reschedule
      </Button>

      <DialogContent className="md:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Reschedule Booking</DialogTitle>
          <DialogDescription>
            Select new date and time for your booking
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between text-sm font-medium text-gray-700">
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
                className="text-xs h-7 px-2 cursor-pointer"
              >
                Today
              </Button>
            </div>
          </div>

          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border mx-auto"
          />

          <div className="text-sm font-medium text-gray-700">
            Select time range
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">Start</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  value={startHour}
                  onChange={(e) => setStartHour(+e.target.value)}
                  className="w-12 text-sm rounded border px-2 py-1 text-center"
                  min={1}
                  max={12}
                />
                <select
                  value={startMeridiem}
                  onChange={(e) =>
                    setStartMeridiem(e.target.value as "AM" | "PM")
                  }
                  className="text-sm rounded border px-2 py-1"
                >
                  <option>AM</option>
                  <option>PM</option>
                </select>
              </div>
            </div>

            <span className="text-sm font-semibold">→</span>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-gray-500">End</label>
              <div className="flex items-center gap-1">
                <input
                  type="number"
                  value={endHour}
                  onChange={(e) => setEndHour(+e.target.value)}
                  className="w-12 text-sm rounded border px-2 py-1 text-center"
                  min={1}
                  max={12}
                />
                <select
                  value={endMeridiem}
                  onChange={(e) =>
                    setEndMeridiem(e.target.value as "AM" | "PM")
                  }
                  className="text-sm rounded border px-2 py-1 cursor-pointer"
                >
                  <option className="cursor-pointer">AM</option>
                  <option className="cursor-pointer">PM</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button className="cursor-pointer" variant="outline" onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <Button className="cursor-pointer" onClick={handleDone} disabled={!date}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
