import React, { useContext, ReactNode } from "react";

import { AppContext } from "@/app/utils/context";
import NavItem from "./navItem";

const SideBar = (): ReactNode => {
  const { navItems, handleActiveNavItem } = useContext(AppContext);

  return (
    <nav className="hidden w-[4.12%] h-screen bg-primary flex-col items-center fixed z-30 space-y-10 py-5 md:flex ">
      {navItems.map((item) => (
        <NavItem
          active={false}
          key={item.name}
          name={item.name}
          path={item.path}
          handleActive={handleActiveNavItem}
        />
      ))}
    </nav>
  );
};

export default SideBar;
