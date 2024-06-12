"use client";
import { usePathname } from "next/navigation";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AdminProvider = ({ children }) => {
  const path = usePathname();
  return (
    <>
      {path.split("/")[1] === "admin" ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          {children}
          <Footer />
        </>
      )}
    </>
  );
};

export default AdminProvider;
