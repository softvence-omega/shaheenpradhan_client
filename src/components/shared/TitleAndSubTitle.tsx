const TitleAndSubTitle = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  return (
    <div className="font-DMsans space-y-2">
      <h1 className="text-2xl sm:text-4xl font-semibold ">{title}</h1>
      <p className="text-xs sm:text-sm leading-[120%] font-light">
        {subTitle}
      </p>
    </div>
  );
};

export default TitleAndSubTitle;
