"use client";

import Link from "next/link";

import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import Logo from "@/components/logo";
import { ModeToggle } from "@/components/mode-toggle";

export const Navbar = () => {
  const scrolled = useScrollToTop();

  return (
    <div
      className={cn(
        "z-50 bg-background flex items-center w-full px-6 py-2.5",
        scrolled && "border-b shadow-sm"
      )}
    >
      <Logo />
      <div className="md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2">
        <Button variant="ghost">log in</Button>
        <Button>Get Started for free</Button>
        <ModeToggle />
      </div>
    </div>
  );
};
