"use client";

import React from "react";
import Header from "./header";
import { ModeToggle } from "@/components/mode-toggle";

const Theming = () => {
  return (
    <div className="border-t border-b p-4 between">
      <Header
        title="Theming"
        description="Select your color interface theme"
        sm
      />
      <ModeToggle />
    </div>
  );
};

export default Theming;
