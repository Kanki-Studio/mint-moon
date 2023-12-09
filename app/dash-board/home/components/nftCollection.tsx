import { NFT_COLLECTION } from "@/app/utils/constants";
import React from "react";
import NftCard from "../../components/nftCard";

const NftCollection = () => {
  return (
    <section className="flex flex-col space-y-7">
      {NFT_COLLECTION.map((nft) => (
        <NftCard
          key={nft.name}
          name={nft.name}
          nftImg={nft.nftImg}
          price={nft.price}
        />
      ))}
    </section>
  );
};

export default NftCollection;
