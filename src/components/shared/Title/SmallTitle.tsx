type SectionTitleProps = {
  smalltitle: string;
};

export const SmallTitle = ({ smalltitle }: SectionTitleProps) => {
  return (
    <h1 className="text-lg md:text-[20px] sm:mt-2  font-medium  text-[var(--color-textSecondary)] font-Roboto">
      {smalltitle}
    </h1>
  );
};

export default SmallTitle;
