import React from "react";

import Logo from "./logo";
import { Button, buttonVariants } from "./ui/button";

const Footer = () => {
  return (
    <footer className=" flex-1 flex items-end">
      <div className="h-16  center-y w-full between px-4 md:px-8">
        <Logo />
        <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
          <Button variant="ghost" size="sm">
            Privacy Policy
          </Button>
          <Button variant="ghost" size="sm">
            Terms & Conditions
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
