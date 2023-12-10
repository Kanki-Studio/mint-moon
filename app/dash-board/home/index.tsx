import React from "react";

import Hero from "./components/hero";
import NftCollection from "./components/nftCollection";

const Page = () => {
  return (
    <main className="w-full flex flex-col px-4 py-20 space-y-20 md:px-20">
      <Hero />
      <NftCollection />
    </main>
  );
};

export default Page;
