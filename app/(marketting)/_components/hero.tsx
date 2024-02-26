import React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="center flex-col space-y-4 pt-24 w-full bg-[url('/grid.svg')]"
      id="hero"
    >
      <h1 className="text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl lg:text-8xl leading-10">
        Create your forms <br />
        in seconds not hours
      </h1>
      <p className="max-w-[600px] mt-4 text-center text-gray-500 md:textl-xl lg:text-xl dark:text-foreground/80">
        Generate, publish and share your form right away with AI. Dive into
        insightful results, charts and analytics.
      </p>
      <Button asChild>
        <Link href="/dashboard" className="center-y space-x-3">
          <span>Get Started for free </span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
      <div className="w-full bg-gradient-to-b from-transparent to-white dark:to-background h-24" />
    </section>
  );
};

export default Hero;
