import { Button } from "@radix-ui/themes";
import React from "react";

const Hero = () => {
  return (
    <section className="w-full rounded-xl bg-[url('/Discover.svg')] bg-cover">
      <div className="w-full p-4 flex flex-col space-y-5 rounded-xl bg-purple-500 bg-opacity-40">
        <h1 className="text-2xl text-white font-bold">
          Unlock the world of crypto and discover awesome collectibles
        </h1>

        <p className="text-sm text-gray-300">
          Buy, Sell, and Explore NFTs with Ease - Your Gateway to the Digital
          Economy
        </p>

        <div className="space-x-5">
          <button className="p-2 px-5 text-sm rounded-md text-white font-semibold transition bg-purple-600 hover:scale-105">
            Explore
          </button>

          <button className="p-2 px-5 text-sm rounded-md text-white font-semibold transition bg-red-500 hover:scale-105">
            Start Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
