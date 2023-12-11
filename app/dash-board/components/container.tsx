import React, { ReactNode } from "react";
import HeaderNav from "./headerNav";

const Container = ({ children }: { children: ReactNode }): ReactNode => {
  return (
    <aside className="w-full h-full flex flex-col space-y-5 relative bg-main md:w-[96%] md:ml-14">
      <HeaderNav />
      {children}
    </aside>
  );
};

export default Container;
