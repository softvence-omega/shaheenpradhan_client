type Props = {
  children: React.ReactNode;
};

const WrapperForm = ({ children }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 xl:px-0">
      <div className="w-full max-w-[780px]">{children}</div>
    </div>
  );
};

export default WrapperForm;
