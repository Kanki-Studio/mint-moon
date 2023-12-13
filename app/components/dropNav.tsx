import React, { useContext } from "react";

import NavItem from "./navItem";
import { AppContext } from "../utils/context";

const DropNav = () => {
  const { navItems, handleActiveNavItem } = useContext(AppContext);
  return (
    <nav className="w-full top-16 flex flex-col fixed p-7 z-50 bg-primary shadow-md rounded-md">
      {navItems.map((item) => (
        <div
          key={item.name}
          className="w-full py-3 transition rounded-lg text-center hover:bg-gray-500"
        >
          <NavItem
            path={item.path}
            active={item.active}
            name={item.name}
            handleActive={handleActiveNavItem}
          />
        </div>
      ))}
      <div className="w-full py-3 transition rounded-lg text-center hover:bg-gray-500">
        <NavItem
          path="/login"
          active={false}
          name="login"
          handleActive={handleActiveNavItem}
        />
      </div>
      <div className="w-full py-3 transition rounded-lg text-center hover:bg-gray-500">
        <NavItem
          path="/signup"
          active={false}
          name="signup"
          handleActive={handleActiveNavItem}
        />
      </div>
    </nav>
  );
};

export default DropNav;
