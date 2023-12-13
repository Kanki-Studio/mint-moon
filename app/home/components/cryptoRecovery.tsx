import { HOW_IT_WORKS } from "@/app/utils/constants";
import React, { ReactNode } from "react";

import CryptoRecoveryCard from "./cryptoRecoveryCard";

const CryptoRecovery = (): ReactNode => {
  return (
    <section className="w-full flex flex-col px-5 space-y-7 py-10 md:p-10 ">
      <div className="w-full flex flex-col items-center space-y-5">
        <h1 className="w-[90%] text-center text-2xl font-bold text-btnSecondary">
          Cryptocurrency Account Recovery Assistance.
        </h1>

        <p className="text-center text-gray-300 text-sm">
          if you&apos;ve lost access to your crytocurrency account, our recovery
          service is here to help you regain control swiftly and securely.
        </p>
      </div>

      <section className="w-full flex flex-col space-y-7">
        <h3 className="text-xl text-center text-btnPrimary">How it works</h3>
        <div className="w-full flex flex-col space-y-10 md:flex-row md:space-y-0 md:gap-5">
          {HOW_IT_WORKS.map((item) => (
            <CryptoRecoveryCard
              key={item.title}
              title={item.title}
              text={item.text}
            >
              <span className="text-5xl text-btnSecondary">
                <item.icon />
              </span>
            </CryptoRecoveryCard>
          ))}
        </div>
      </section>
    </section>
  );
};

export default CryptoRecovery;
