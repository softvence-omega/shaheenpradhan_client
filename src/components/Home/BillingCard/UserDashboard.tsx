import EarnCard from "../../shared/Payment/EarnCard";

const userCardList = [
  {
    id: 101,
    label: "User Earnings",
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
    id: 102,
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
    id: 103,
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

export function UserDashboard() {
  return (
    <EarnCard
      cardList={userCardList}
      monthFilterList={monthFilterList}
      defaultMonth="This Month"
      showIcons={true}
    />
  );
}
