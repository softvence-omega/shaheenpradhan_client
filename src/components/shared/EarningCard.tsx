import { useState } from "react";
import Wrapper from "./Wrapper";

// Updated card data with month-wise values and styling
const cardList = [
  {
    id: 123,
    label: "Total Earnings",
    borderColor: "#08D274",
    bgColor: "#FAFEFC",
    monthlyValues: {
      January: 1200,
      February: 1300,
      March: 1500,
      April: 1400,
      May: 1600,
      June: 1700,
      July: 1800,
      August: 2000,
      September: 1900,
      October: 2100,
      November: 2200,
      December: 2340,
      "This Month": 2340,
    },
  },
  {
    id: 234,
    label: "Pending Payouts",
    borderColor: "#FBBF53",
    bgColor: "#FFFDFA",
    monthlyValues: {
      January: 1000,
      February: 1100,
      March: 1200,
      April: 1300,
      May: 1400,
      June: 1500,
      July: 1600,
      August: 1700,
      September: 1800,
      October: 1900,
      November: 2000,
      December: 4512,
      "This Month": 4512,
    },
  },
  {
    id: 345,
    label: "Withdrawn",
    borderColor: "#E5E5E5",
    bgColor: "#FFFFFF",
    monthlyValues: {
      January: 800,
      February: 850,
      March: 900,
      April: 1000,
      May: 1100,
      June: 1200,
      July: 1300,
      August: 1400,
      September: 1500,
      October: 1600,
      November: 1700,
      December: 1780,
      "This Month": 1780,
    },
  },
];

const monthFilterList = [
  "This Month",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const EarningCard = () => {
  const [selectedMonth, setSelectedMonth] = useState("This Month");

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

export default EarningCard;
