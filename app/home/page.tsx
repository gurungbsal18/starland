import Hero from "@/components/homepage/Hero";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <>
      <div className="container">
        <Hero />
      </div>
    </>
  );
}
