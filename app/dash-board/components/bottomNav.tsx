"use client";
import React, { ReactNode, useState } from "react";
import {
  HiOutlineClipboardList,
  HiViewGrid,
  HiUserCircle,
} from "react-icons/hi";
import { HiMiniCog8Tooth } from "react-icons/hi2";

import { INavItem } from "@/app/utils/interfaces";
import NavItem from "./navItem";

const BottomNav = (): ReactNode => {
  const [navItems, setNavItems] = useState<INavItem[]>([
    { name: "home", path: "/home", icon: HiViewGrid, active: true },
    {
      name: "bids",
      path: "/home/bids",
      icon: HiOutlineClipboardList,
      active: false,
    },
    {
      name: "profile",
      path: "/home/profile",
      icon: HiUserCircle,
      active: false,
    },
    {
      name: "settings",
      path: "/home/settings",
      icon: HiMiniCog8Tooth,
      active: false,
    },
  ]);

  const handleActiveNavItem = (name: string) => {
    const newValue = navItems.map((item) => {
      if (item.name === name) return { ...item, active: true };
      else return { ...item, active: false };
    });

    setNavItems(newValue);
  };

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
