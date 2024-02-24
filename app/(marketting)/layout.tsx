import React from "react";

import Footer from "@/components/footer";
import { Navbar } from "./_components/navigation";

const MarkettingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen flex flex-col dark:bg-[#1f1f1f]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default MarkettingLayout;
