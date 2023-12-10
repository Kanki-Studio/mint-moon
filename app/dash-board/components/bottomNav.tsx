"use client";
import React, { ReactNode, useContext } from "react";

import NavItem from "./navItem";
import { AppContext } from "@/app/utils/context";

const BottomNav = (): ReactNode => {
  const { navItems, handleActiveNavItem } = useContext(AppContext);

  return (
    <div className="w-full p-5 flex justify-center space-x-14 itmes-center bg-primary fixed bottom-0 md:hidden">
      {navItems.map((item) => (
        <NavItem
          key={item.name}
          name={item.name}
          path={item.path}
          handleActive={handleActiveNavItem}
        >
          <span>
            <item.icon
              className={`text-[30px] ${
                item.active ? "text-purple-700" : "text-gray-500"
              } hover:text-purple-700`}
            />
          </span>
        </NavItem>
      ))}
    </div>
  );
};

export default BottomNav;
