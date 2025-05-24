type SectionTitleProps = {
  smalltitle: string;
};

export const SmallTitle = ({ smalltitle }: SectionTitleProps) => {
  return (
    <h1 className="text-[20px] mt-8 leading-[28px] font-medium tracking-[0.4px] text-[var(--color-textSecondary)] font-Roboto">
      {smalltitle}
    </h1>
  );
};

export default SmallTitle;
