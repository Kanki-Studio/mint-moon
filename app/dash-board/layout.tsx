import React from "react";
import SideBar from "./components/sideBar";
import Container from "./components/container";
import BottomNav from "./components/bottomNav";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full w-full flex flex-col justify-between relative">
      <SideBar />
      <Container>{children}</Container>
      <BottomNav />
    </main>
  );
};

export default HomeLayout;
