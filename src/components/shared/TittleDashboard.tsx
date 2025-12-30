import { cn } from "@/lib/utils";

const TittleDashboard = ({
  title,
  subTitle,
  style,
}: {
  title: string;
  subTitle?: string;
  style?: string;
}) => {
  return (
    <div
      className={cn(
        style ? `${style} font-DMsans ` : "font-DMsans  w-full sm:w-[60%]"
      )}
    >
      <h1 className="text-2xl sm:text-4xl font-semibold">{title}</h1>
    </div>
  );
};

export default TittleDashboard;
