"use client";
import React, { useState } from "react";
import { Gutter } from "../Gutter";
import { Menulinks, SocialMedia } from "@/constant";
import Link from "next/link";
import { HR } from "../HR";
import { usePathname } from "next/navigation";

const Footer = () => {
  const path = usePathname();
  return (
    <Gutter className="w-full flex flex-col gap-4  left-0 bottom-0 bg-zinc-900 py-8 ">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-white uppercase font-bold">DesignoBit</h3>
        <ul className="flex gap-4 m-0">
          {Menulinks.map((item) => (
            <Link
              className={
                path === item.link
                  ? "text-white text-lg no-underline "
                  : "text-white/70 text-lg no-underline  hover:text-white/90 duration-150"
              }
              href={item.link}
              key={item.id}
            >
              {item.name}
            </Link>
          ))}
        </ul>
        <div className="md:flex hidden flex-row space-x-4">
          {SocialMedia.map((item) => (
            <Link
              href={item.link}
              className="text-white text-lg no-underline "
              key={item.id}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      </div>
      {/* <HR color="white" /> */}
      <p className="text-center text-xs text-white font-normal">
        © DesignoBit, All Rights Reserved.
      </p>
    </Gutter>
  );
};

export default Footer;
