import React from "react";
import SettingsSidbar from "./sidebar";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-full">
      <SettingsSidbar />
      <div className="flex-[3]">{children}</div>
    </main>
  );
};

export default SettingsLayout;
