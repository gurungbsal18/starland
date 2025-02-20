"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ThemeSwitch } from "../theme-switch";

interface menuItemsProps {
  id: number;
  name: string;
  href: string;
}

const menuItems: menuItemsProps[] = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About",
    href: "/about",
  },
  {
    id: 3,
    name: "Career",
    href: "/career",
  },
  {
    id: 4,
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const Logo = require("../../public/STARLAND_Logo.svg");

  const [active, setActive] = useState("");

  return (
    <div className="bg-primary">
      <div className="container mx-auto py-2 flex justify-between items-center">
        <Image alt="STARLAND Logo" src={Logo} height={50} />

        <ul className="flex gap-4 items-center text-white">
          {menuItems.map((list) => (
            <li key={list.id}>
              <Link
                href={list.href}
                className={`${active === list.href ? "secondary" : ""}`}
                onClick={() => setActive(list.href)}
              >
                {list.name}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSwitch />
      </div>
    </div>
  );
}
