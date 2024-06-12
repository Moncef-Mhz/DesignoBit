import AdminSidePanel from "@/components/AdminSidePanel";
import React from "react";

const layout: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex ">
      <AdminSidePanel className="" />
      <div className="bg-zinc-900 w-full  p-10 text-white">{children}</div>
    </div>
  );
};

export default layout;
