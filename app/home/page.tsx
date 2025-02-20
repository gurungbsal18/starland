import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  const heroTitle = "Find Your Dream Job Today";
  const heroSubtitle =
    "Unlock your potential with the best opportunities tailored just for you.Start your journey with us and land the career you deserve.";

  return (
    <>
      <div className="container">
        <div className="text-center flex flex-col items-center pt-12 pb-8 gap-8">
          <Image
            src="/home-search-image.svg"
            alt="starland"
            width={411}
            height={251}
          />

          <h1 className="text-8xl text-center">{heroTitle}</h1>
          <p className="w-1/3">{heroSubtitle}</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <Button color="secondary" className="w-1/3">
            Explore All Jobs
          </Button>
          <div className="flex gap-2 items-center w-1/3 mt-3">
            <Input label="search" size="sm" />
            <Button radius="sm">Search</Button>
          </div>
        </div>
      </div>
    </>
  );
}
