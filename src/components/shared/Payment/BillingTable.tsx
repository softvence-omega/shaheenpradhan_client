// components/BillingTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Invoice = {
  invoice: string;
  paymentStatus: string;
  totalAmount: number;
  paymentMethod: string;
  currency: string;
};

type BillingTableProps = {
  invoices: Invoice[];
  currency: string;
  setCurrency: (value: string) => void;
  showDownload?: boolean;
  title?: string;
};

export const BillingTable = ({
  invoices,
  currency,
  setCurrency,
  showDownload = false,
  title = "Billing History",
}: BillingTableProps) => {
  const filteredInvoices =
    currency === "AED"
      ? invoices
      : invoices.filter((invoice) => invoice.currency === currency);

  return (
    <div className="mb-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {showDownload && (
          <button className="text-BorderHighlight cursor-pointer">
            Download Statement
          </button>
        )}
      </div>
      <hr className="text-[#B2B2B2]" />
      <Table className="border-b border-[#B2B2B2]">
        <TableHeader>
          <TableRow className="h-[52px] border-b border-[#B2B2B2]">
            <TableHead className="w-[100px] text-[#808080]">Invoice</TableHead>
            <TableHead className="text-center text-[#808080]">Status</TableHead>
            <TableHead className="text-center text-[#808080]">Method</TableHead>
            <TableHead className="text-right">
              <div className="flex justify-end items-center gap-2">
                <div className="text-[#808080]">Amount</div>
                <Select value={currency} onValueChange={setCurrency}>
                  <SelectTrigger className="w-[68px] h-8 px-2 text-xs">
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AED">AED</SelectItem>
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvoices.map((invoice) => (
            <TableRow
              key={invoice.invoice}
              className="h-[52px] border-b border-[#B2B2B2]"
            >
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell className="text-center">
                {invoice.paymentStatus}
              </TableCell>
              <TableCell className="text-center">
                {invoice.paymentMethod}
              </TableCell>
              <TableCell className="text-right">
                {invoice.totalAmount} {invoice.currency}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
