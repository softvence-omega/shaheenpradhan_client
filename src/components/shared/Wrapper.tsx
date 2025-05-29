import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 xl:px-0">{children}</div>
  );
};

export default Wrapper;
