import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  title: string;
  description?: string;
  sm?: boolean;
};

const Header = ({ title, description, sm }: Props) => {
  return (
    <div>
      <h1
        className={cn("font-semibold text-3xl ", {
          "text-xl": sm,
        })}
      >
        {title}
      </h1>
      <p className="text-black/50 dark:text-white/50">{description}</p>
    </div>
  );
};

export default Header;
