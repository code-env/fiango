"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/logo";
import { useSidebarRoutes } from "@/constants";
import { cn } from "@/lib/utils";

const Sidebar = () => {
  const sidebarRoutes = useSidebarRoutes();
  const pathname = usePathname();

  return (
    <aside className="h-screen w-[300px] border-r flex flex-col">
      <Link
        className="flex items-center h-16 px-6 border-b border-gray-200  dark:border-gray-800 "
        href="/dashboard"
      >
        <Logo />
      </Link>

      <nav className="w-[90%] mx-auto">
        <ul className="flex flex-col mt-10 gap-1">
          {sidebarRoutes.map((route) => {
            const isActive = route.path.startsWith(
              pathname.split("/").join("")
            );

            return (
              <Link href={`/${route.path}`} key={route.name}>
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
      </nav>
    </aside>
  );
};

export default Sidebar;
