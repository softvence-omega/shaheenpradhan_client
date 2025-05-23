import React from "react";

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  return <div className="w-full max-w-[1280px] mx-auto">{children}</div>;
};

export default Wrapper;
