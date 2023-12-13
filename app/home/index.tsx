import React, { ReactNode } from "react";

import Hero from "./components/hero";
import NftCollection from "./components/nftCollection";
import HeaderNav from "../components/headerNav";
import CryptoRecovery from "./components/cryptoRecovery";
import Pricing from "./components/pricing";
import Footer from "../components/footer";

const Home = (): ReactNode => {
  return (
    <section className="w-full flex flex-col space-y-14">
      <HeaderNav />
      <Hero />
      <NftCollection />
      <CryptoRecovery />
      <Pricing />
      <Footer />
    </section>
  );
};

export default Home;
