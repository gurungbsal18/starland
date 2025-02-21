import Image from "next/image";
import React from "react";

export default function WhyUsBanner() {
  return (
    <div className="container mt-32">
      <div>
        <h4>Hello</h4>
      </div>
      <Image
        src="/why-us-banner.svg"
        alt="starland why us banner"
        height={300}
        width={300}
      />
    </div>
  );
}
