import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface SortProps {
  value: string;
  onChange: (value: string) => void;
}

const Sorts = ({ value, onChange }: SortProps) => {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-[120px] shadow-none border-none text-TextSecondary">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent className="translate-x-[-38%]">
        <SelectGroup>
          <SelectItem value="rating-desc">Sort by</SelectItem>
          <SelectItem value="price-asc">Price: Low to High</SelectItem>
          <SelectItem value="price-desc">Price: High to Low</SelectItem>
          <SelectItem value="name-asc">Name: A-Z</SelectItem>
          <SelectItem value="name-desc">Name: Z-A</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Sorts;
