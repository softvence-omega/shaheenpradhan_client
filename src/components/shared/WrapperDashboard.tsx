import React from "react";

type Props = {
  children: React.ReactNode;
};

const WrapperDashboard = ({ children }: Props) => {
  return <div className="w-full max-w-[1080px] mx-auto ">{children}</div>;
};

export default WrapperDashboard;
