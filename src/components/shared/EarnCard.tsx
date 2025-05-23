import { useState } from "react";
import Wrapper from "./Wrapper";

const EarnCard = ({
  cardList,
  monthFilterList,
  defaultMonth = "This Month",
}) => {
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  return (
    <Wrapper>
      <div className="space-y-6 p-4">
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

        {/* Responsive Card Section */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cardList.map((card) => {
            const value = card.monthlyValues[selectedMonth] || 0;

            return (
              <div
                key={card.id}
                className="min-w-[350px] max-auto h-[102px] p-6 rounded-lg space-y-3"
                style={{
                  border: `1px solid ${card.borderColor}`,
                  backgroundColor: card.bgColor,
                }}
              >
                <div className="flex justify-between items-center">
                  <p className="text-black text-xl font-semibold">
                    ${value.toLocaleString()}
                  </p>
                </div>
                <p className="text-[#71717A] text-sm">{card.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default EarnCard;
