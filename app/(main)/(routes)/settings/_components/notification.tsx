"use client";

import React, { useState } from "react";
import Header from "./header";
import { cn } from "@/lib/utils";

type Props = {};

const Notification = ({}: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  console.log(isClicked);

  return (
    <div className="border-b p-4 between center-y">
      <Header
        title="Desktop Notification"
        description="Receive native notification on your desktop"
        sm
      />

      <div
        className="rounded-full border h-6 w-12 relative cursor-pointer overflow-hidden"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        <div
          className={cn(
            "absolute w-4 bg-primary h-4 top-0 bottom-0 right-[58%] my-auto rounded-full cursor-pointer transition-all delay-75",
            { "right-1": isClicked }
          )}
        />
      </div>
    </div>
  );
};

export default Notification;
