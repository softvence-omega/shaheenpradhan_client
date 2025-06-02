import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-4 md:px-4 lg:px-4 2xl:px-0">
      {children}
    </div>
  );
};

export default Wrapper;
