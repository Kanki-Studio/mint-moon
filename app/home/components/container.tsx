import React from "react";
import HeaderNav from "./headerNav";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="w-full h-[95%] flex flex-col space-y-5 px-3 relative bg-main">
      <HeaderNav />
      {children}
    </aside>
  );
};

export default Container;
