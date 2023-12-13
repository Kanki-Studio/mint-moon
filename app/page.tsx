"use client";
import React, { ReactNode, useState } from "react";
import Home from "./home";
import ContextProvider from "./utils/context";
import DropNav from "./components/dropNav";

export default function App(): ReactNode {
  const [toggleDropNav, setToggleDropNav] = useState(false);

  const [navItems, setNavItems] = useState([
    { name: "Home", path: "/", active: true },
    { name: "Bids", path: "/bids", active: false },
    { name: "Profile", path: "/profile", active: false },
    { name: "Setting", path: "/settings", active: false },
  ]);

  const handletoggleDropNav = (): void => setToggleDropNav((prev) => !prev);

  const handleActiveNavItem = (name: string): void => {
    const newVal = navItems.map((item) => {
      if (name === item.name) return { ...item, active: true };
      else return { ...item, active: false };
    });

    setNavItems(newVal);
  };

  return (
    <ContextProvider
      value={{
        navItems,
        toggleDropNav,
        handleActiveNavItem,
        handletoggleDropNav,
      }}
    >
      <main className="w-full min-h-screen relative flex justify-center">
        {toggleDropNav && <DropNav />}
        <Home />
      </main>
    </ContextProvider>
  );
}
