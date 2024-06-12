"use client";
import { HR } from "@/components/HR";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slash } from "lucide-react";
import React, { useState } from "react";

const NewCategoriesPage = () => {
  const [title, setTitle] = useState("");

  const CreateCatHandler = async () => {
    const res = await fetch("/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });
    const data = await res.json();
    console.log(data);
    setTitle("");
  };

  return (
    <div className="text-white space-y-5">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                className="text-white/70 no-underline"
                href="/admin"
              >
                dashboard
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/admin/categories"
                className="text-white/70 no-underline"
              >
                Categories
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-white">
                New Category
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <>
        {title ? (
          <h1 className="text-6xl font-bold capitalize">{title}</h1>
        ) : (
          <h1 className="text-6xl font-bold">[Untitled]</h1>
        )}
      </>
      <HR />
      <Button
        onClick={() => CreateCatHandler()}
        variant="outline"
        className="bg-zinc-900"
      >
        Save
      </Button>
      <HR />
      <form
        onSubmit={() => CreateCatHandler()}
        className="grid w-full max-w-sm items-center gap-1.5"
      >
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          id="title"
          value={title}
          placeholder="Title"
          className="bg-zinc-900"
          onChange={(e) => setTitle(e.target.value)}
        />
      </form>
    </div>
  );
};

export default NewCategoriesPage;
