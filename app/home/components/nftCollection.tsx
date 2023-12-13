import { NFT_COLLECTION } from "@/app/utils/constants";
import React, { ReactNode } from "react";

import Link from "next/link";
import NftCard from "@/app/components/nftCard";

const NftCollection = (): ReactNode => {
  return (
    <section className="w-full flex flex-col space-y-5 p-5 md:p-10">
      <div className="w-full flex justify-between items-center text-semibold md:pr-9">
        <h2 className="font-extrabold text-gray-300">NFT PRICING</h2>
        <Link
          href=""
          className="px-5 py-1 rounded-full bg-btnPrimary text-xs font-bold text-gray-300 transition hover:scale-105"
        >
          See All
        </Link>
      </div>
      <div className="w-full flex flex-col space-y-5 md:space-y-0 md:grid md:grid-cols-4 md:gap-4">
        {NFT_COLLECTION.map((nft) => (
          <NftCard
            key={nft.name}
            name={nft.name}
            nftImg={nft.nftImg}
            price={nft.price}
          />
        ))}
      </div>
    </section>
  );
};

export default NftCollection;
