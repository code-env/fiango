import React from "react";
import Sidebar from "./_components/sidebar";
import Navigations from "./_components/navigation";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navigations />
          <div className="flex flex-col p-4 flex-1">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
