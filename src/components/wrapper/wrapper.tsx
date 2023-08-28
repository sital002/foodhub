import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-6xl w-full mx-auto my-4 px-2 ">{children}</div>;
};

export default Wrapper;
