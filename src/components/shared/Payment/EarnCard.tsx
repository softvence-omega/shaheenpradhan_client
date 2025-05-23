import { useState } from "react";
import Wrapper from "../Wrapper";

// Import icons
import { FaDollarSign } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { RiInstallFill } from "react-icons/ri";
import { FcOk } from "react-icons/fc";

const EarnCard = ({
  cardList,
  monthFilterList,
  defaultMonth = "This Month",
  showIcons = false,
}) => {
  const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

  // Optional labels
  const userLabels = ["Total Deposited", "Total Spent", "Pending"];

  const icons = [
    <RiInstallFill className="w-[48px] h-[48px] text-purple-600" />,
    <AiFillClockCircle className="w-[48px] h-[48px] text-blue-600" />,
    <FcOk className="w-[48px] h-[48px]" />,
  ];

  return (
    <Wrapper>
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

        {/* Card Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardList.map((card, idx) => {
            const value = card.monthlyValues[selectedMonth] || 0;
            const label = showIcons
              ? userLabels[idx] || card.label
              : card.label;

            return (
              <div
                key={card.id}
                className="h-[120px] w-[350px] p-4 rounded-lg flex items-center justify-start text-left shadow-sm"
                style={{
                  border: `1px solid ${card.borderColor}`,
                  backgroundColor: card.bgColor,
                }}
              >
                {/* Left: Icon */}
                {showIcons && (
                  <div className="mr-4 flex-shrink-0">{icons[idx]}</div>
                )}

                {/* Right: Amount and Label */}
                <div>
                  <p className="text-black text-2xl font-bold">
                    ${value.toLocaleString()}
                  </p>
                  <p className="text-[#71717A] text-sm mt-1">{label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default EarnCard;
