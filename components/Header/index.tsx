"use client";
import React, { useState } from "react";
import { Gutter } from "../Gutter";
import { Menulinks } from "../../constant/index";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const path = usePathname();

  return (
    <Gutter className="flex items-center justify-between  px-5 h-[80px] bg-zinc-900">
      <Link
        href={"/"}
        className="text-2xl no-underline text-white uppercase font-bold "
      >
        DesignObit
      </Link>
      {/* Desktop Menu */}
      <ul className="space-x-4 hidden md:block">
        {Menulinks?.map((item) => (
          <Link
            className={
              path === item.link
                ? "text-white  no-underline"
                : "text-white/70 no-underline hover:text-white/90 duration-150"
            }
            href={item.link}
            key={item.id}
          >
            {item.name}
          </Link>
        ))}
      </ul>
      {/* Mobile menu */}
      <Menu
        onClick={() => setOpenMenu(true)}
        className="cursor-pointer block text-white md:hidden"
      />

      {openMenu ? (
        <ul className="md:hidden absolute top-0 space-y-10 right-0 h-screen z-10 bg-zinc-900 flex flex-col px-6 w-[50%]">
          <X
            onClick={() => setOpenMenu(false)}
            className="cursor-pointer text-white my-[14px]"
          />
          <div className="flex flex-col gap-8">
            {Menulinks?.map((item) => (
              <Link
                className={
                  path === item.link
                    ? "text-white text-lg no-underline m-0"
                    : "text-white/70 text-lg no-underline m-0 hover:text-white/90 duration-150"
                }
                href={item.link}
                key={item.id}
                onClick={() => setOpenMenu(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </ul>
      ) : (
        <></>
      )}
    </Gutter>
  );
}

export default Header;
