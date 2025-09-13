type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 2xl:px-0 ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
