import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  const heroTitle = "Find Your Dream Job Today";
  const heroSubtitle =
    "Unlock your potential with the best opportunities tailored just for you.Start your journey with us and land the career you deserve.";

  return (
    <div className="hero">
      <div className="container text-center flex flex-col items-center pt-12 pb-8 gap-8">
        <Image
          src="/home-search-image.svg"
          alt="starland"
          width={411}
          height={251}
        />

        <h1 className="text-4xl lg:text-7xl text-center">{heroTitle}</h1>
        <p className="w-full lg:w-1/3">{heroSubtitle}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Link href="/jobs" className="w-full lg:w-1/3 text-black">
          <Button color="secondary" className="w-full text-black">
            Explore All Jobs
          </Button>
        </Link>
        {/* <div className="flex gap-2 items-center w-full lg:w-1/3 mt-3">
          <Input size="sm" label="Search jobs" />
          <Button radius="sm" size="lg" color="primary">
            Search
          </Button>
        </div> */}
      </div>
    </div>
  );
}
