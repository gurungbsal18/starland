import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="mt-32 footer">
      <div className="bg-primary">
        <div className="container py-16">
          <div className="text-white text-center lg:text-left flex flex-col justify-center items-center gap-4">
            <Image
              src="/STARLAND_Logo.svg"
              alt="starland logo"
              width={400}
              height={400}
              className="logo-image"
            />
            <p className="flex gap-1 items-center">
              <FaPhone />
              +977 98411234567890
            </p>
            <p className="flex gap-1 items-center">
              <FaLocationDot />
              Kathmandu, Nepal
            </p>
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
