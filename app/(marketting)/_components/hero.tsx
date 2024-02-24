import React from "react";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      className="flex flex-col items-center justify-center space-y-4 pt-4 sm:pt-24 w-full bg-[url('/grid.svg')]"
      id="hero"
    >
      <h1 className="text-4xl font-bold text-center tracking-tighter sm:text-5xl md:text-6xl leading-10">
        Create your forms <br />
        in seconds not hours
      </h1>
      <p className="max-w-[600px] mt-4 text-center text-gray-500 md:textl-xl">
        Generate, publish and share your form right away with AI. Dive into
        insightful results, charts and analytics.
      </p>
      <div className="w-full bg-gradient-to-b from-transparent to-white h-24" />
      <Button className="center-y space-x-3">
        <span>Get Started for free </span>
        <ArrowRight className="w-4 h-4" />
      </Button>
    </section>
  );
};

export default Hero;
