"use client";
import DataTable from "@/components/DataTable";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Slash } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useSWR from "swr";

type ArticlesType = {
  title: string;
  slug: string;
  content: string;
  image: string;
  author: string;
  date: string;
  _id: string;
  category: string;
};

const DeleteHandler = async (id: string) => {
  const res = await fetch(`/api/articles`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });
  return { success: res.ok };
};

export const columns: ColumnDef<ArticlesType>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    header: "Author",
    accessorKey: "author",
  },
  {
    accessorKey: "category",
    cell: ({ row }) => {
      return <h1 className="text-sm font-normal">{row.original.category}</h1>;
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Date of creation
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem
              onClick={async () => {
                const res = await DeleteHandler(row.original._id);
                if (res.success) {
                  window.location.reload();
                }
              }}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ArticlesPage: React.FC = () => {
  const { data: articles, isLoading } = useSWR<ArticlesType[]>(
    "/api/articles",
    fetcher
  );

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
              <BreadcrumbPage className="text-white">Articles</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-end gap-2">
        <h1 className="text-5xl font-bold capitalize">Articles</h1>
        <Button
          asChild
          variant="default"
          size="sm"
          className="bg-zinc-700 hover:bg-zinc-800 text-xs"
        >
          <Link href="/admin/articles/new" className="no-underline">
            Create new
          </Link>
        </Button>
      </div>
      {/* Categories Table */}
      {/* Add loading event */}
      {articles && (
        <DataTable columns={columns} data={articles} filterName="title" />
      )}
    </div>
  );
};

export default ArticlesPage;
