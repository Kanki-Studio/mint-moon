import Image from "next/image";
import React from "react";

const HeaderNav = () => {
  return (
    <header className="w-full fixed top-0 left-0 p-3 flex items-center justify-between">
      <div className="w-fit h-fit rounded-lg bg-purple-500">
        <Image src="/logo.png" alt="logo" width={40} height={40} />
      </div>

      <div className="w-8/12 flex bg-gray-400 space-x-2 bg-opacity-30 p-2 rounded-lg">
        <Image src="/Search.svg" alt="logo" width={20} height={20} />
        <input
          type="text"
          placeholder="Search Here"
          className="w-full bg-transparent outline-none"
        />
      </div>

      <div className="flex space-x-3">
        <Image src="/bell.svg" alt="logo" width={16} height={18} />
        <Image src="/avatar.svg" alt="logo" width={37} height={37} />
      </div>
    </header>
  );
};

export default HeaderNav;
