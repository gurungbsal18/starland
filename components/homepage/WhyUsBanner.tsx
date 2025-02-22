import Image from "next/image";
import React from "react";

export default function WhyUsBanner(props: { title: string }) {
  return (
    <div className="mt-44">
      <div className="grid grid-cols-12 items-center">
        <div className="col-span-8 flex flex-col gap-4">
          <h4 className="text-4xl primary font-bold">{props.title}</h4>
          <p>
            With a successful hiring rate of 90%, we placed over 1000 candidates
            last year. Our specialists understand your industry and what you’re
            looking for.
          </p>
          <p>
            At Starland, we don’t just match candidates and employers. We match
            the right candidates with the right employers.
          </p>
        </div>

        <div className="col-span-4">
          <Image
            src="/why-us-banner.svg"
            alt="starland why us banner"
            height={300}
            width={300}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
