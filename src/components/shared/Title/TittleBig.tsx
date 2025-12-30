type SectionTitleProps = {
  bigtittle: string;
  description?: string; // make it optional
};

export const TittleBig = ({ bigtittle, description }: SectionTitleProps) => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2 className="text-2xl md:text-[48px] leading-[120%] font-semibold text-[var(--color-textSecondary)] font-Roboto">
        {bigtittle}
      </h2>
      {description && (
        <p className="text-sm md:text-base text-gray-600 mt-2">{description}</p>
      )}
    </div>
  );
};

export default TittleBig;
