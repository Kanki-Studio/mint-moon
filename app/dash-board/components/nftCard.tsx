import React from "react";

interface Prop {
  name: string;
  price: number;
  nftImg: string;
}

const NftCard = ({ name, price, nftImg }: Prop) => {
  return (
    <div className="p-5 rounded-xl flex flex-col space-y-10 bg-primary shadow-md">
      <div
        style={{ backgroundImage: `url(${nftImg})` }}
        className="w-full rounded-xl h-fit py-36 bg-cover"
      ></div>
      <div className="flex flex-col space-y-5">
        <h3 className="text-xl font-bold text-gray-300">{name}</h3>
        <div className="flex justify-between">
          <span className="text-gray-300 font-semibold">Price:</span>
          <span className="text-btnPrimary">{price} ETH</span>
        </div>
        <button className="w-full p-4 flex items-center rounded-lg transition justify-center bg-btnPrimary text-sm text-white font-semibold hover:scale-105">
          Place Bid
        </button>
      </div>
    </div>
  );
};

export default NftCard;
