import React from "react";
import Header from "../_components/header";
import Theming from "../_components/theming";
import Notification from "../_components/notification";
import Account from "../_components/account";

const Preferences = () => {
  return (
    <div className="page">
      <div className="p-4">
        <Header title="Preferences" description="Manage your preferences" />
      </div>
      <Theming />

      <Notification />
      <Account />
    </div>
  );
};

export default Preferences;
