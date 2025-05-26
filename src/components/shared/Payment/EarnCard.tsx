import { useState } from "react";

import Wrapper from "../Wrapper";

// Foreground icons
import deposit from "@/assets/icons/deposit.png";
import spent from "@/assets/icons/spent.png";
import pending from "@/assets/icons/pending.png";

// Background icons
import deposit1 from "@/assets/icons/deposit1.png";
import spent1 from "@/assets/icons/spent1.png";
import pending1 from "@/assets/icons/pending1.png";

const EarnCard = ({
  cardList,
  monthFilterList,
  defaultMonth = "This Month",
  showIcons = false,
}) => {
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  const userLabels = ["Total Deposited", "Total Spent", "Pending"];
  const icons = [deposit, spent, pending];
  const bgIcons = [deposit1, spent1, pending1];

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardList.map((card, idx) => {
          const value = card.monthlyValues[selectedMonth] || 0;
          const label = showIcons ? userLabels[idx] || card.label : card.label;

          return (
            <div
              key={card.id}
              className="w-full h-[120px] p-4 rounded-lg flex items-center justify-start shadow-sm relative overflow-hidden"
              style={{
                border: `1px solid ${card.borderColor}`,
                backgroundColor: card.bgColor,
              }}
            >
              {/* Icon on the left */}
              {showIcons && (
                <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                  {/* Background icon */}
                  <img
                    src={bgIcons[idx]}
                    alt={`${label} background`}
                    width={48}
                    height={48}
                    className="object-contain opacity-100"
                  />
                  {/* Foreground icon */}
                  <img
                    src={icons[idx]}
                    alt={label}
                    width={34}
                    height={34}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              )}

              {/* Text on the right */}
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

export default EarnCard;
