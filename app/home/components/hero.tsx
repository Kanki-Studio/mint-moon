import React, { ReactNode } from "react";

const Hero = (): ReactNode => {
  return (
    <section className="w-full h-[700px] bg-[url('/nft_hero_bg.jpg')] bg-cover">
      <div className="w-full h-full p-4 flex flex-col space-y-5 justify-center text-center items-center bg-black bg-opacity-70 md:h-full md:items-center md:justify-center">
        <h1 className="text-2xl text-white font-bold md:text-4xl md:w-3/4 md:text-center">
          Unlock the world of crypto and discover awesome collectibles
        </h1>

        <p className="text-sm text-gray-300">
          Buy, Sell, and Explore NFTs with Ease - Your Gateway to the Digital
          Economy
        </p>

        <div className="w-full flex flex-col space-y-5 md:space-x-5 md:flex-row md:space-y-0 md:justify-center">
          <button className="w-full py-3 px-5 text-sm rounded-md text-white font-semibold transition bg-purple-600 hover:scale-105 md:w-fit">
            Explore
          </button>

          <button className="w-full py-3 px-5 text-sm rounded-md text-white font-semibold transition bg-red-500 hover:scale-105 md:w-fit">
            Start Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
