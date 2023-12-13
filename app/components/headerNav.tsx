"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import NavItem from "./navItem";
import { AppContext } from "../utils/context";

const HeaderNav = () => {
  const { navItems, toggleDropNav, handletoggleDropNav, handleActiveNavItem } =
    useContext(AppContext);

  return (
    <header className="w-full fixed top-0 left-0 z-20 p-3 flex items-center justify-between bg-main">
      <section className="w-full flex items-center justify-between space-x-2 md:w-fit">
        <div>
          <Image
            src="/logo.png"
            alt="logo"
            width={38}
            height={38}
            className="md:hidden"
          />

          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="hidden md:block"
          />
        </div>

        <div className="flex bg-gray-400 space-x-2 bg-opacity-30 p-2 rounded-lg md:w-96">
          <Image src="/Search.svg" alt="logo" width={18} height={18} />
          <input
            type="text"
            placeholder="Search Here"
            className="w-full bg-transparent outline-none"
          />
        </div>
        {toggleDropNav ? (
          <FaTimes
            onClick={handletoggleDropNav}
            className="text-gray-400 text-xl font-bold transition cursor-pointer hover:text-btnPrimary md:hidden"
          />
        ) : (
          <FaBars
            onClick={handletoggleDropNav}
            className="text-gray-400 text-xl font-bold transition cursor-pointer hover:text-btnPrimary md:hidden"
          />
        )}
      </section>

      <div className="hidden space-x-12 md:flex">
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            name={item.name}
            path={item.path}
            active={item.active}
            handleActive={handleActiveNavItem}
          />
        ))}
      </div>

      <div className="hidden items-center pr-2 space-x-10 md:flex">
        <Link
          href="/login"
          className="px-7 py-1 text-gray-300 text-sm rounded font-semibold bg-btnPrimary transition hover:scale-105"
        >
          Login
        </Link>
        <Link
          href="/signup"
          className="px-7 py-1 text-gray-300 text-sm rounded font-semibold bg-btnSecondary transition hover:scale-105"
        >
          SignUp
        </Link>
      </div>
    </header>
  );
};

export default HeaderNav;
