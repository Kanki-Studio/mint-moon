import React, { ReactNode, createContext } from "react";
import { INavItem } from "./interfaces";

interface IContext {
  navItems: INavItem[];
  toggleDropNav: boolean;
  handletoggleDropNav: () => void;
  handleActiveNavItem: (name: string) => void;
}

interface Prop {
  children: ReactNode;
  value: IContext;
}

export const AppContext = createContext<IContext>({
  navItems: [],

  toggleDropNav: false,

  handleActiveNavItem: function (name: string): void {
    throw new Error("Function not implemented.");
  },

  handletoggleDropNav: function (): void {
    throw new Error("Function not implemented.");
  },
});

const ContextProvider = ({ children, value }: Prop) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default ContextProvider;
