// AssistantCard.jsx
import { useState } from "react";

// Foreground icons
import deposit from "@/assets/icons/deposit.png";
import spent from "@/assets/icons/spent.png";
import pending from "@/assets/icons/pending.png";
import dollar from "@/assets/icons/dollar.png";

// Background icons
import deposit1 from "@/assets/icons/deposit1.png";
import spent1 from "@/assets/icons/spent1.png";
import pending1 from "@/assets/icons/pending1.png";
import dollar1 from "@/assets/icons/dollar1.png";

const AssistantCard = ({
  cardList,
  monthFilterList,
  defaultMonth = "This Month",
  showIcons = false,
}) => {
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  const userLabels = [
    "New Booking Requests",
    "Upcoming Bookings",
    "Total Completed Jobs",
    "Total Earnings",
  ];

  const icons = [deposit, spent, pending, dollar];
  const bgIcons = [deposit1, spent1, pending1, dollar1];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <h1 className="text-xl font-DMsans text-black">Overview</h1>
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="w-[140px] h-[32px] border border-[#B2B2B2] rounded-[6px] px-2 py-1 text-sm font-DMsans"
        >
          {monthFilterList.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <hr className="text-[#B2B2B2]" />

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 xl:grid-cols-4 gap-6">
        {cardList.map((card, idx) => {
          const value = card.monthlyValues[selectedMonth] || 0;
          const label = showIcons ? userLabels[idx] || card.label : card.label;

          return (
            <div
              key={card.id}
              className="w-full h-[120px] p-4 bg-white rounded-lg flex items-center justify-start shadow-sm relative overflow-hidden"
            >
              {/* Icon */}
              {showIcons && (
                <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                  <img
                    src={bgIcons[idx]}
                    alt={`${label} background`}
                    width={48}
                    height={48}
                    className="object-contain opacity-100"
                  />
                  <img
                    src={icons[idx]}
                    alt={label}
                    width={32}
                    height={32}
                    className="absolute top-[55%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              )}

              {/* Text */}
              <div>
                <p className="text-black text-lg sm:text-xl md:text-2xl font-bold">
                  ${value.toLocaleString()}
                </p>
                <p className="text-[#71717A] text-xs sm:text-sm mt-1">
                  {label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssistantCard;
