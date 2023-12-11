import React, { ReactNode } from "react";

const SubRouteContainer = ({
  children,
}: {
  children: ReactNode;
}): ReactNode => (
  <main className="w-full flex flex-col px-4 py-20 space-y-20 md:px-20">
    {children}
  </main>
);

export default SubRouteContainer;
