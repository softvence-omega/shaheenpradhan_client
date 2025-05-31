type SectionTitleProps = {
  bigtittle: string;
};

export const TittleBig = ({ bigtittle }: SectionTitleProps) => {
  return (
    <div className="flex items-center justify-center w-full h-[58px] mt-[50px]">
      <h2 className="text-[48px] leading-[120%] tracking-[0%] font-medium text-[var(--color-textSecondary)] font-Roboto">
        {bigtittle}
      </h2>
    </div>
  );
};

export default TittleBig;
