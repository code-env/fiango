"use client";

import React from "react";
import Header from "./header";
import { useBillings } from "@/constants";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {};

const Billings = (props: Props) => {
  const billings = useBillings();
  return (
    <div className="p-4">
      <Header
        title="Current Plan"
        sm
        description="You're currently on a free plan"
      />
      <div className="flex flex-col gap-6 sm:grid grid-cols-2 md:grid-cols-3 mt-4">
        {billings.map((bill, index) => {
          //some code here

          return (
            <div className="border rounded-2xl  flex-col flex" key={bill.title}>
              <h1 className="font-bold text-2xl p-4">{bill.title}</h1>
              <ul className="px-4 pb-4">
                {bill.options.map((option, index) => (
                  <li key={index} className="center-y gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary" />
                    {option.title}
                  </li>
                ))}
              </ul>

              <div className="border-t p-4 flex justify-end">
                {index === 0 ? null : (
                  <Button variant="secondary">Upgrade Now</Button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Billings;
