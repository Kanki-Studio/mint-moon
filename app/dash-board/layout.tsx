"use client";
import React, { ReactNode, useState } from "react";
import {
  HiOutlineClipboardList,
  HiViewGrid,
  HiUserCircle,
} from "react-icons/hi";
import { HiMiniCog8Tooth } from "react-icons/hi2";

import SideBar from "./components/sideBar";
import Container from "./components/container";
import BottomNav from "./components/bottomNav";
import { INavItem } from "../utils/interfaces";
import ContextProvider from "../utils/context";

const HomeLayout = ({ children }: { children: ReactNode }): ReactNode => {
  const [navItems, setNavItems] = useState<INavItem[]>([
    { name: "dash-board", path: "/dash-board", icon: HiViewGrid, active: true },
    {
      name: "bids",
      path: "/dash-board/bids",
      icon: HiOutlineClipboardList,
      active: false,
    },
    {
      name: "profile",
      path: "/dash-board/profile",
      icon: HiUserCircle,
      active: false,
    },
    {
      name: "settings",
      path: "/dash-board/settings",
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
    <ContextProvider value={{ navItems, handleActiveNavItem }}>
      <main className="w-full h-full flex flex-col justify-between md:flex-row md:justify-start">
        <SideBar />
        <Container>{children}</Container>
        <BottomNav />
      </main>
    </ContextProvider>
  );
};

export default HomeLayout;
