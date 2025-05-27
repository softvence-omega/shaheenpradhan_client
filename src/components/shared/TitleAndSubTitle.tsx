import { cn } from "@/lib/utils";

const TitleAndSubTitle = ({
  title,
  subTitle,
  style,
}: {
  title: string;
  subTitle: string;
  style?: string;
}) => {
  return (
    <div
      className={cn(
        style
          ? `${style} font-DMsans space-y-2`
          : "font-DMsans space-y-2 w-full sm:w-[60%]"
      )}
    >
      <h1 className="text-2xl sm:text-4xl font-semibold ">{title}</h1>
      <p className="text-xs sm:text-sm leading-[120%] font-light">{subTitle}</p>
    </div>
  );
};

export default TitleAndSubTitle;
