import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="mt-32">
      <div className="bg-primary">
        <div className="container py-16">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-around items-center gap-4">
            <div className="">
              <Image
                src="/STARLAND_Logo.svg"
                alt="starland logo"
                width={200}
                height={200}
              />
            </div>

            <div className="text-white text-center lg:text-left">
              <p>+977 98411234567890</p>
              <p>Kathmandu, Nepal</p>
            </div>

            <div className="text-white text-center lg:text-left">
              <p className="font-bold">Company</p>
              <ul>
                <li>Recent Jobs</li>
                <li>About us</li>
                <li>Meet our team</li>
                <li>Terms and condition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 py-2 justify-between text-gray-500 text-center">
        <p className="text-xs">
          All content and photography within our website is copyright & may not
          be reproduced without our permission.
        </p>
        <p className="text-xs">Develop By: IT Sansaar</p>
      </div>
    </div>
  );
}
