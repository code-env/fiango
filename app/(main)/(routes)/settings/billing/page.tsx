import React from "react";
import Header from "../_components/header";
import Billings from "../_components/billings";

const Billing = () => {
  return (
    <div className="page">
      <div className="p-4 border-b">
        <Header
          title="Billing"
          description="Manage your billing and payment details"
        />
      </div>
      <Billings />
    </div>
  );
};

export default Billing;
