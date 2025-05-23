// components/AssistantBillingHistory.tsx
import { BillingTable } from "@/components/shared/Payment/BillingTable";
import { useState } from "react";

const invoices = [
  // same invoice data as you have
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: 250,
    paymentMethod: "Credit Card",
    currency: "AED",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: 150,
    paymentMethod: "PayPal",
    currency: "USD",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: 350,
    paymentMethod: "Bank Transfer",
    currency: "EUR",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: 450,
    paymentMethod: "Credit Card",
    currency: "AED",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: 550,
    paymentMethod: "PayPal",
    currency: "USD",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: 200,
    paymentMethod: "Bank Transfer",
    currency: "EUR",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: 300,
    paymentMethod: "Credit Card",
    currency: "AED",
  },
];

export const AssistantBillingHistory = () => {
  const [currency, setCurrency] = useState("AED");

  return (
    <BillingTable
      invoices={invoices}
      currency={currency}
      setCurrency={setCurrency}
      showDownload={false}
      title="Payout History-Assist"
    />
  );
};
