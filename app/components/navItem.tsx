import Link from "next/link";
import React, { ReactNode } from "react";

interface Prop {
  name: string;
  path: string;
  active: boolean;
  handleActive: (name: string) => void;
}

const NavItem = ({ path, name, active, handleActive }: Prop): ReactNode => (
  <Link
    href={path}
    onClick={() => handleActive(name)}
    className={`${
      active ? "text-btnPrimary" : "text-gray-400"
    } font-semibold text-sm transition hover:text-btnPrimary`}
  >
    {name}
  </Link>
);

export default NavItem;
