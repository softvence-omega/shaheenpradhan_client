type SectionTitleProps = {
  smalltitle: string;
};

export const SmallTitle = ({ smalltitle }: SectionTitleProps) => {
  return (
    <h1 className="text-[20px] mt-2  font-medium  text-[var(--color-textSecondary)] font-Roboto">
      {smalltitle}
    </h1>
  );
};

export default SmallTitle;
