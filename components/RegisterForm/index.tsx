"use client";
import React, { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

const RegisterForm = () => {
  const router = useRouter();
  const [name, setUserName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [error, setError] = useState<String>("");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }
    try {
      const userRes = await fetch("api/userExist", {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const { user } = await userRes.json();
      if (user) {
        setError("User already exists!");
        return;
      }
      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (res.ok) {
        setError("");
        const form = e.target as HTMLFormElement;
        form.reset();
        router.push("/admin/dashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-black">
      <div className="  rounded-md flex gap-9 flex-col items-center">
        <div className="text-center space-y-2">
          <h1 className="text-white text-xl font-bold ">Register</h1>
          <p className="text-white/70 text-sm">Welcome to DesignoBit</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            id="userName"
            placeholder="UserName"
            className="outline-none"
          />
          <Input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            placeholder="Email"
            className="outline-none"
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            id="password"
            placeholder="Password"
            className="outline-none"
          />
          {error && (
            <p className="text-red-600 bg-red-200 px-2 py-1 text-sm rounded-md">
              {error}
            </p>
          )}

          <Button variant="outline" className="bg-black text-white">
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
