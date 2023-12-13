import React, { ReactNode } from "react";

interface Prop {
  name: string;
  price: number;
  nftImg: string;
}

const NftCard = ({ name, price, nftImg }: Prop): ReactNode => {
  return (
    <div className="w-full p-5 rounded-xl space-y-7 flex flex-col justify-between bg-primary shadow-md md:w-[250px] md:p-3 md:space-y-0">
      <div
        style={{ backgroundImage: `url(${nftImg})` }}
        className="w-full rounded-xl h-fit py-36 bg-cover md:bg-center md:py-0 md:h-[150px]"
      ></div>
      <div className="flex flex-col space-y-5 md:space-y-3">
        <h3 className="text-xl font-bold text-gray-300 md:text-sm">{name}</h3>
        <div className="flex justify-between md:text-xs">
          <span className="text-gray-300 font-semibold">Price:</span>
          <span className="text-btnPrimary">{price} ETH</span>
        </div>
        <button className="w-full p-4 flex items-center rounded-lg transition justify-center bg-btnPrimary text-sm text-white font-semibold hover:scale-105 md:p-2 md:text-xs">
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default NftCard;
