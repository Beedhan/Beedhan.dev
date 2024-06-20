import Nav from "@/components/Nav/nav";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Nav />
      <div className="w-full px-4 md:w-[70%] lg:w-[50%] mx-auto">
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
