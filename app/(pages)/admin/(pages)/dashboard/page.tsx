import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { DashboardLinks } from "@/constant";
import Link from "next/link";
import { Plus, PlusCircle } from "lucide-react";

const DashboardPage: React.FC = async () => {
  const session = await getServerSession(authOption as any);
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="lg:text-4xl md:text-2xl text-lg m-0 font-bold">
          Welcome to Admin Dashboard!
        </h1>
        <Avatar>
          <AvatarFallback className="bg-white text-black cursor-pointer">
            {session && session?.user?.name?.substring(0, 2)}
          </AvatarFallback>
        </Avatar>
      </div>
      <p className="text-sm m-0 text-white/70 mt-2 mx-1">
        this is the admin control panel you can figure out how it work!
      </p>
      <h1 className="text-white text-3xl font-bold mb-2 mt-20">Collections</h1>
      <div className="flex items-center flex-wrap gap-5 ">
        {DashboardLinks?.map((item) => (
          <Link
            key={item.id}
            href={item.path}
            className="text-white no-underline space-y-3 w-[200px] bg-zinc-700 h-[120px] p-4 hover:bg-zinc-500 duration-75"
          >
            <h1 className="text-base font-medium m-0">{item.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
