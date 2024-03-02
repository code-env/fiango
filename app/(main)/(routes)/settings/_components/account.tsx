import React from "react";
import Header from "./header";
import { Button } from "@/components/ui/button";

type Props = {};

const Account = (props: Props) => {
  return (
    <div className="p-4 border-b between center-y">
      <Header
        title="Danger Zone"
        description="Parmently remove your user data from Fiango"
        sm
      />
      <Button variant="destructive">Delete Account</Button>
    </div>
  );
};

export default Account;
