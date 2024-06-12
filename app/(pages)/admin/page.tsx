import React from "react";
import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "@/components/LoginForm";

const admin = async () => {
  const session = await getServerSession(authOption as any);
  if (session) redirect("admin/dashboard");
  return <LoginForm />;
};

export default admin;
