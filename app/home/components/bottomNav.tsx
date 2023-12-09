import { NAV_ITEMS } from "@/app/utils/constants";
import React from "react";

const BottomNav = () => {
  return (
    <div className="w-full p-5 flex bg-primary fixed bottom-0 md:hidden">
      {NAV_ITEMS.map((item) => (
        <div key={item.name}>{item.name.slice(0, 1)}</div>
      ))}
    </div>
  );
};

export default BottomNav;
