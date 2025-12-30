import { Calendar, Clock, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";
import { format } from "date-fns";

const SchedulePreferencesStep = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState({
    date: "",
    location: "",
    startTime: "",
    endTime: "",
    workMode: "",
    differentTimezone: "",
  });

  const timeOptions = [
    "08:00 AM","08:30 AM","09:00 AM","09:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","12:00 PM","12:30 PM","01:00 PM","01:30 PM",
    "02:00 PM","02:30 PM","03:00 PM","03:30 PM","04:00 PM","04:30 PM",
    "05:00 PM","05:30 PM","06:00 PM","06:30 PM","07:00 PM","07:30 PM",
    "08:00 PM"
  ];

  const onFormDataChange = (newData) => setFormData(newData);

  const canProceed = () =>
    formData.date !== "" && formData.location !== "";

  // Ensure End Time is always after Start Time
  const handleStartTimeChange = (startTime: string) => {
    const startIndex = timeOptions.indexOf(startTime);
    const nextEndTime = timeOptions[startIndex + 1] || startTime; // next slot or same if last
    setFormData({
      ...formData,
      startTime,
      endTime: nextEndTime
    });
  };

  const handleEndTimeChange = (endTime: string) => {
    setFormData({
      ...formData,
      endTime
    });
  };

  const getTimeDisplay = () => {
    if (formData.startTime && formData.endTime) {
      return `${formData.startTime} to ${formData.endTime}`;
    }
    return "Select time range";
  };

  return (
    <div className="bg-white rounded-lg shadow p-5">
      <div className="w-2/3 h-1.5 bg-purple-400 rounded mb-5"></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left Column */}
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              When do you need your assistant?
            </h3>

            {/* Shadcn Calendar */}
            <Popover>
              <PopoverTrigger asChild>
                <div className="relative mb-4 pl-10 pr-3 py-2 border border-gray-300 rounded-md cursor-pointer">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <span className="text-gray-700 text-sm">
                    {formData.date ? format(new Date(formData.date), "dd/MM/yyyy") : "Select date"}
                  </span>
                </div>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <ShadcnCalendar
                  mode="single"
                  selected={formData.date ? new Date(formData.date) : undefined}
                  onSelect={(date) => date && onFormDataChange({...formData, date: date.toISOString()})}
                />
              </PopoverContent>
            </Popover>

            {/* Time Range */}
            <div className="flex gap-2">
              <Select value={formData.startTime} onValueChange={handleStartTimeChange}>
                <SelectTrigger className="flex-1 border border-gray-300 rounded-md">
                  <SelectValue placeholder="Start Time" />
                </SelectTrigger>
                <SelectContent>
                  {timeOptions.map(time => (
                    <SelectItem key={`start-${time}`} value={time}>{time}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={formData.endTime} onValueChange={handleEndTimeChange}>
                <SelectTrigger className="flex-1 border border-gray-300 rounded-md">
                  <SelectValue placeholder="End Time" />
                </SelectTrigger>
                <SelectContent>
                  {timeOptions
                    .filter(time => formData.startTime ? timeOptions.indexOf(time) > timeOptions.indexOf(formData.startTime) : true)
                    .map(time => (
                      <SelectItem key={`end-${time}`} value={time}>{time}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-medium mb-2">Location</h4>
            <Select
              value={formData.location}
              onValueChange={(value) =>
                onFormDataChange({ ...formData, location: value })
              }
            >
              <SelectTrigger className="w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="New York">New York</SelectItem>
                <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                <SelectItem value="Chicago">Chicago</SelectItem>
                <SelectItem value="Remote">Remote</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <div>
            <h4 className="font-medium mb-3">In-person or remote?</h4>
            <div className="space-y-2">
              {["Remote", "In Person", "Either"].map((mode) => (
                <label key={mode} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="workMode"
                    value={mode}
                    checked={formData.workMode === mode}
                    onChange={(e) =>
                      onFormDataChange({...formData, workMode: e.target.value})
                    }
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700">{mode}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">Different time zone work Required?</h4>
            <div className="space-y-2">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                  
                    name="timezone"
                    value={option}
                    checked={formData.differentTimezone === option}
                    onChange={(e) =>
                      onFormDataChange({...formData, differentTimezone: e.target.value})
                    }
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500 cursor-pointer"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button className="cursor-pointer" variant="outline" onClick={onBack}>Back</Button>
        <Button className="cursor-pointer bg-ButtonBGPrimary" onClick={onNext} disabled={!canProceed()}>{canProceed() ? "Next" : "Next"}</Button>
      </div>
    </div>
  );
};

export default SchedulePreferencesStep;
