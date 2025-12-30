type Props = {
  children: React.ReactNode;
  className?: string;
};

const Wrapper = ({ children, className }: Props) => {
  return (
    <div
      className={`w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
