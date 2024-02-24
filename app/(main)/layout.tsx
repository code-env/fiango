import React from "react";
import Sidebar from "./_components/sidebar";
import Navigations from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-h-screen dark:bg-[#1f1f1f]">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navigations />
          <div className="flex flex-col p-4">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
