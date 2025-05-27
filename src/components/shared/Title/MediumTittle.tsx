type SectionTitleProps = {
  mediumtittle: string;
  description: string;
};

const MediumTittle = ({ mediumtittle, description }: SectionTitleProps) => {
  return (
    <div className="mt-8 space-y-2">
      <h1 className="w-full h-[34px] text-[28px] font-medium leading-[120%] tracking-[0.84px] text-[var(--color-textSecondary)] font-Roboto">
        {mediumtittle}
      </h1>
      <p className="w-full h-[22px] text-[16px] font-normal leading-[140%] tracking-[0.32px] text-[var(--color-textSecondary)] font-Roboto mt-1">
        {description}
      </p>
    </div>
  );
};

export default MediumTittle;
