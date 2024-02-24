import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import React from "react";

const Navigations = () => {
  return (
    <header className="flex items-center h-16 px-4 border-b md:px-6">
      <Button className="mr-4 md:hidden" variant="icon">
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      <form className="flex-1 md:mx-auto md:px-4 lg:px-6">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            placeholder="Search..."
            type="search"
          />
        </div>
      </form>
      <div className="flex items-center gap-4 md:ml-auto md:gap-2">
        <Button className="rounded-full" size="icon" variant="ghost">
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Navigations;
