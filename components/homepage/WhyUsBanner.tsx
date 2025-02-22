import React from "react";
import Image from "next/image";

export default function WhyUsBanner(props: { title: string }) {
  return (
    <div className="mt-44">
      <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-16 lg:gap-0">
        <div className="col-span-1 md:col-span-8 flex flex-col gap-4">
          <h4 className="text-3xl text-center lg:text-start primary font-bold">
            {props.title}
          </h4>
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

        <div className="col-span-1 md:col-span-4">
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
