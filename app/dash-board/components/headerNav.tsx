import Image from "next/image";
import React from "react";

const HeaderNav = () => {
  return (
    <header className="w-full fixed top-0 left-0 p-3 flex items-center justify-between bg-main md:w-[96%] md:right-0 md:left-14 md:px-20">
      <div className="w-fit h-fit rounded-lg bg-purple-500 md:hidden">
        <Image src="/logo.png" alt="logo" width={38} height={38} />
      </div>

      <div className="w-8/12 flex bg-gray-400 space-x-2 bg-opacity-30 p-2 rounded-lg md:w-[25%]">
        <Image src="/Search.svg" alt="logo" width={18} height={18} />
        <input
          type="text"
          placeholder="Search Here"
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="flex space-x-3">
        <Image src="/bell.svg" alt="logo" width={15} height={17} />
        <Image src="/avatar.svg" alt="logo" width={35} height={35} />
      </div>
    </header>
  );
};

export default HeaderNav;
