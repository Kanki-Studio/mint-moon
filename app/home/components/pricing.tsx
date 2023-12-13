import { PRICING_DATA } from "@/app/utils/constants";
import React from "react";
import PricingCard from "./pricingCard";

const Pricing = () => {
  return (
    <section className="w-full flex flex-col px-5 space-y-7 py-10 md:p-10 ">
      <div className="w-full flex flex-col items-center space-y-5">
        <h1 className="w-[90%] text-center text-2xl font-bold text-btnSecondary">
          Pricing
        </h1>

        <p className="text-center text-gray-300 text-sm md:px-40">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae magni
          soluta accusamus nesciunt iste nobis possimus asperiores voluptatum,
          id nemo saepe vitae, sit officia consectetur.
        </p>
      </div>

      <section className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-10">
        {PRICING_DATA.map((data) => (
          <PricingCard
            key={data.level}
            level={data.level}
            price={data.price}
            features={data.features}
          />
        ))}
      </section>
    </section>
  );
};

export default Pricing;
