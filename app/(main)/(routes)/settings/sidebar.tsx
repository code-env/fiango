"use client";

import { useSettingsRoutes } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SettingsSidbar = () => {
  const routes = useSettingsRoutes();
  const pathname = usePathname();

  return (
    <aside className="flex-1 h-fll border-r p-4">
      <ul className="flex flex-col gap-1">
        {routes.map((route, index) => {
          // const path = pathname.split("/")[2];
          const isActive = pathname.endsWith(route.path);

          return (
            <Link href={route.path} key={index}>
              <li
                className={cn(
                  "flex items-center gap-3 py-2 px-6 hover:bg-muted rounded-md",
                  isActive && "bg-muted"
                )}
              >
                <route.icon className="w-4 h-4" />
                {route.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </aside>
  );
};

export default SettingsSidbar;
