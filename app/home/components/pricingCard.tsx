import React from "react";

interface Prop {
  level: string;
  price: number;
  features: string[];
}

const PricingCard = ({ level, price, features }: Prop) => {
  return (
    <aside className="flex flex-col p-5 bg-primary rounded-xl space-y-7">
      <div className="flex flex-col space-y-3">
        <div className="w-fit p-2 bg-btnPrimary text-gray-300 text-xs rounded-full">
          {level}
        </div>
        <h2 className="text-white text-xl font-bold">${price}.00 USD</h2>

        <p className="text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta sit
          amet consectetur
        </p>
      </div>

      <div className="flex flex-col text-sm space-y-3">
        <p className="text-white font-bold">FEATURES</p>
        <ul className="pl-7 space-y-2">
          {features.map((feature) => (
            <li key={feature} className="text-sm list-disc text-gray-400">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col space-y-3">
        <button className="w-full bg-btnPrimary font-semibold transition text-xs text-gray-100 py-4 rounded-full hover:scale-105">
          ADD TO CART
        </button>
        <button className="w-full bg-gray-100 font-semibold transition text-xs text-btnPrimary py-4 rounded-full hover:scale-105">
          BUY NOW
        </button>
      </div>
    </aside>
  );
};

export default PricingCard;
