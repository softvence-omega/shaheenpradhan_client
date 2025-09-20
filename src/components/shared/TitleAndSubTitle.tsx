import { cn } from "@/lib/utils";

const TitleAndSubTitle = ({
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
        style
          ? `${style} font-DMsans space-y-2`
          : "font-DMsans space-y-2 w-full"
      )}
    >
      <h1 className="text-2xl sm:text-[28px] md:text-[48px] leading-[120%] font-medium font-sans w-full">
        {title}
      </h1>
      <p className="text-[16px] sm:text-[18px] md:text-lg leading-[120%] font-light text-[#4D4D4D] mt-3 w-full">
        {subTitle}
      </p>
    </div>
  );
};

export default TitleAndSubTitle;
