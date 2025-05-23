import EarnCard from "../shared/EarnCard";

const assistantCardList = [
  {
    id: 1,
    label: "Assistant Earnings",
    borderColor: "#08D274",
    bgColor: "#FAFEFC",
    monthlyValues: {
      January: 500,
      February: 600,
      March: 700,
      April: 650,
      May: 750,
      June: 800,
      July: 850,
      August: 900,
      September: 950,
      October: 1000,
      November: 1100,
      December: 1200,
      "This Month": 1200,
    },
  },
  {
    id: 2,
    label: "Pending Payouts",
    borderColor: "#FBBF53",
    bgColor: "#FFFDFA",
    monthlyValues: {
      January: 300,
      February: 350,
      March: 400,
      April: 420,
      May: 450,
      June: 470,
      July: 500,
      August: 530,
      September: 550,
      October: 580,
      November: 600,
      December: 650,
      "This Month": 650,
    },
  },
  {
    id: 3,
    label: "Withdrawn",
    borderColor: "#E5E5E5",
    bgColor: "#FFFFFF",
    monthlyValues: {
      January: 200,
      February: 250,
      March: 300,
      April: 320,
      May: 350,
      June: 370,
      July: 400,
      August: 430,
      September: 450,
      October: 480,
      November: 500,
      December: 530,
      "This Month": 530,
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

export function AssistantDashboard() {
  return (
    <EarnCard
      cardList={assistantCardList}
      monthFilterList={monthFilterList}
      defaultMonth="This Month"
    />
  );
}
