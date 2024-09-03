import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
//components
import Nav from "./nav";
import Mobilenav from "./Mobilenav";
const Hearder = () => {
  return (
    <header className="py-6 xl:py-8 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-2xl font-semibold">
            Hamad<span className=" text-accent-default">.</span>
          </h1>
        </Link>
        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me </Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden"><Mobilenav/></div>
      </div>
    </header>
  );
};

export default Hearder;
