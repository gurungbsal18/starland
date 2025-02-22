import Hero from "@/components/homepage/Hero";
import JobsTable from "@/components/homepage/JobsTable";
import WhyUsBanner from "@/components/homepage/WhyUsBanner";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="">
        <Hero />
        <JobsTable title={"Recent open positions"} />
        <WhyUsBanner title={"Why choose us?"} />
      </div>
    </>
  );
}
