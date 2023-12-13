"use client";
import React, { ReactNode, useState } from "react";
import Home from "./home";
import ContextProvider, { AppContext } from "./utils/context";

export default function App(): ReactNode {
  const [navItems, setNavItems] = useState([
    { name: "Home", path: "/", active: true },
    { name: "Bids", path: "/bids", active: false },
    { name: "Profile", path: "/profile", active: false },
    { name: "Setting", path: "/settings", active: false },
  ]);

  const handleActiveNavItem = (name: string): void => {
    const newVal = navItems.map((item) => {
      if (name === item.name) return { ...item, active: true };
      else return { ...item, active: false };
    });

    setNavItems(newVal);
  };

  return (
    <ContextProvider value={{ navItems, handleActiveNavItem }}>
      <main className="w-full min-h-screen">
        <Home />
      </main>
    </ContextProvider>
  );
}
