import { Calendar, Clock, ChevronDown } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const SchedulePreferencesStep = ({ onNext, onBack }) => {
  // ✅ All fields start empty - no defaults
  const [formData, setFormData] = useState({
    date: "",
    location: "",
    startTime: "",
    endTime: "",
    workMode: "",
    differentTimezone: "",
  });

  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  // Time options
  const timeOptions = [
    "08:00 AM", "08:30 AM", "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM",
    "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM",
    "08:00 PM"
  ];

  const onFormDataChange = (newData) => setFormData(newData);

  const canProceed = () =>
    formData.date !== "" && formData.location !== "";

  const handleTimeSelection = (startTime, endTime) => {
    onFormDataChange({
      ...formData,
      startTime: startTime,
      endTime: endTime
    });
    setShowTimeDropdown(false);
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

            {/* Date Input */}
            <div className="relative mb-4">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 cursor-pointer" />
              <input
                type="date"
                value={formData.date}
                onChange={(e) =>
                  onFormDataChange({ ...formData, date: e.target.value })
                }
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
                placeholder="dd/mm/yy"
              />
            </div>

            {/* Time Range Selector */}
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 z-10" />
              <div 
                className="pl-10 pr-8 py-2 border border-gray-300 rounded-md bg-white focus-within:ring-2 focus-within:ring-purple-500 cursor-pointer"
                onClick={() => setShowTimeDropdown(!showTimeDropdown)}
              >
                <span className="text-sm text-gray-700">
                  {getTimeDisplay()}
                </span>
              </div>
              <ChevronDown 
                className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 transition-transform ${
                  showTimeDropdown ? 'rotate-180' : ''
                }`} 
              />
              
              {/* Time Dropdown */}
              {showTimeDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-20 max-h-60 overflow-y-auto">
                  <div className="p-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h5 className="text-xs font-medium text-gray-600 mb-2">Start Time</h5>
                        <div className="space-y-1">
                          {timeOptions.map((time) => (
                            <button
                              key={`start-${time}`}
                              className={`w-full text-left px-2 py-1 text-xs rounded hover:bg-purple-50 ${
                                formData.startTime === time ? 'bg-purple-100 text-purple-700' : ''
                              }`}
                              onClick={() => onFormDataChange({...formData, startTime: time})}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h5 className="text-xs font-medium text-gray-600 mb-2">End Time</h5>
                        <div className="space-y-1">
                          {timeOptions.map((time) => (
                            <button
                              key={`end-${time}`}
                              className={`w-full text-left px-2 py-1 text-xs rounded hover:bg-purple-50 ${
                                formData.endTime === time ? 'bg-purple-100 text-purple-700' : ''
                              }`}
                              onClick={() => onFormDataChange({...formData, endTime: time})}
                            >
                              {time}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end mt-3 pt-3 border-t">
                      <button
                        className="px-3 py-1 text-xs bg-purple-600 text-white rounded hover:bg-purple-700"
                        onClick={() => setShowTimeDropdown(false)}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

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
                      onFormDataChange({
                        ...formData,
                        workMode: e.target.value,
                      })
                    }
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{mode}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3">
              Different time zone work Required?
            </h4>
            <div className="space-y-2">
              {["Yes", "No"].map((option) => (
                <label key={option} className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="timezone"
                    value={option}
                    checked={formData.differentTimezone === option}
                    onChange={(e) =>
                      onFormDataChange({
                        ...formData,
                        differentTimezone: e.target.value,
                      })
                    }
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        >
          Back
        </button>
        <button
          onClick={onNext}
          disabled={!canProceed()}
          className={`px-4 py-2 rounded-md text-white 
            ${
              canProceed()
                ? "bg-purple-600 hover:bg-purple-700"
                : "bg-purple-300 cursor-not-allowed"
            }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SchedulePreferencesStep;