"use client";
import React, { useState } from "react";
import { AdminNavLinks } from "@/constant";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Menu } from "lucide-react";

type AdminSidePanel = {
  className: string;
};

const AdminSidePanel: React.FC<AdminSidePanel> = ({ className }) => {
  const path = usePathname();
  const [openMenu, setOpenMenu] = useState(true);
  return (
    <>
      {openMenu ? (
        <div
          className={[
            className,
            "w-[20%] bg-black text-white border-r border-white h-screen sticky top-0 left-0 ",
          ]
            .filter(Boolean)
            .join("")}
        >
          {/* <h1 className="text-2xl font-bold text-white p-10">DesignoBit</h1> */}
          <div className=" p-10 ">
            <ChevronLeft
              onClick={() => setOpenMenu(false)}
              className="border rounded-sm cursor-pointer hover:border-white/50 hover:bg-white/20 duration-75"
              size={25}
            />
          </div>
          <ul className="flex  flex-col px-10 gap-4">
            {AdminNavLinks?.map((link) => (
              <Link
                href={link.href}
                className={
                  path.split("/")[2] === link.path
                    ? "text-base font-medium cursor-pointer  m-0 no-underline text-white"
                    : "text-base cursor-pointer font-normal m-0 no-underline text-white/70 hover:text-white duration-75"
                }
                key={link.id}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
      ) : (
        <div className="w-[5%] bg-zinc-900 text-white h-screen sticky top-0 left-0">
          <div className="p-10">
            <Menu
              onClick={() => setOpenMenu(true)}
              className="border rounded-sm cursor-pointer hover:border-white/50 hover:bg-white/20 duration-75"
              size={25}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AdminSidePanel;
