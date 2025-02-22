"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "@heroui/button";
import { ThemeSwitch } from "../theme-switch";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";

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
  const [mobileNav, setMobileNav] = useState(false);

  const mobileMenuToggle = () => {
    setMobileNav(!mobileNav);
  };

  return (
    <div className="bg-primary">
      <div className="container mx-auto py-2 lg:flex justify-between items-center hidden">
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
          <ThemeSwitch />
        </ul>
      </div>

      <div className="block lg:hidden">
        <div className="flex justify-between items-center container py-3 relative">
          <Image alt="STARLAND Logo" src={Logo} height={50} />
          <span onClick={mobileMenuToggle} className="text-white text-4xl">
            {mobileNav ? <IoMdClose /> : <AiOutlineMenu />}
          </span>
        </div>
        {mobileNav ? (
          <ul className="flex flex-col h-full justify-center items-center gap-8 text-white absolute top-13 left-0 w-full bg-primary z-20">
            {menuItems.map((list) => (
              <li key={list.id} className="text-2xl">
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
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
