import { useState } from "react";

const AssistantBillingCard = ({
  cardList,
  monthFilterList,
  defaultMonth = "This Month",
  showIcons = false,
}) => {
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

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
        {cardList.map((card) => {
          const value = card.monthlyValues[selectedMonth] || 0;

          return (
            <div
              key={card.id}
              className="w-full h-[120px] p-4 rounded-lg flex items-center justify-start shadow-sm relative overflow-hidden"
              style={{
                border: `1px solid ${card.borderColor}`,
                backgroundColor: card.bgColor,
              }}
            >
              {/* Icon on the left (if enabled and exists in card) */}
              {showIcons && card.icon && (
                <div className="w-12 h-12 mr-4 flex-shrink-0">
                  <img
                    src={card.icon}
                    alt={card.label}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              )}

              {/* Text on the right */}
              <div>
                <p className="text-black text-lg sm:text-xl md:text-2xl font-bold">
                  ${value.toLocaleString()}
                </p>
                <p className="text-[#71717A] text-xs sm:text-sm mt-1">
                  {card.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AssistantBillingCard;
