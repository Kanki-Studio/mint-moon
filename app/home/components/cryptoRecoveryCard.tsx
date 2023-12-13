import React, { ReactNode } from "react";

interface Prop<T> {
  text: T;
  title: T;
  children: ReactNode;
}

const CryptoRecoveryCard = ({
  children,
  title,
  text,
}: Prop<string>): ReactNode => {
  return (
    <aside className="bg-primary p-3 flex flex-col space-y-4 shadow-md rounded-lg md:w-[25%]">
      <div className="flex items-center space-x-7">
        {children}

        <h3 className="text-xl font-bold text-btnPrimary">{title}</h3>
      </div>

      <p className="text-gray-300 md:text-sm">{text}</p>
    </aside>
  );
};

export default CryptoRecoveryCard;
