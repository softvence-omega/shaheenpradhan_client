import { useState } from "react";

const TimePicker: React.FC = () => {
  const [startTime, setStartTime] = useState("12:08");
  const [endTime, setEndTime] = useState("01:08");

  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-500 text-sm">From</span>
      <input
        type="time"
        step="1"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        className="border border-[##E7E5E4] rounded px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <span className="text-gray-500 text-sm">TO</span>
      <input
        type="time"
        step="1"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        className="border border-[##E7E5E4] rounded px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default TimePicker;
