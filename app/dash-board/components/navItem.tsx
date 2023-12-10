import Link from "next/link";
import React, { ReactElement, ReactNode } from "react";

interface Prop {
  name: string;
  path: string;
  children: ReactElement;
  handleActive: (name: string) => void;
}

const NavItem = ({ path, name, handleActive, children }: Prop): ReactNode => (
  <Link
    href={path}
    onClick={() => handleActive(name)}
    className="cursor-pointer"
  >
    {children}
  </Link>
);

export default NavItem;
