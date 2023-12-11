import React, { ReactNode } from "react";

import Hero from "./components/hero";
import NftCollection from "./components/nftCollection";
import SubRouteContainer from "../components/subRouteContainer";

const Page = (): ReactNode => {
  return (
    <SubRouteContainer>
      <Hero />
      <NftCollection />
    </SubRouteContainer>
  );
};

export default Page;
