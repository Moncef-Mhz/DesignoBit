"use client";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Gutter } from "@/components/Gutter";
import useSWR from "swr";
import { usePathname } from "next/navigation";
import { HR } from "@/components/HR";

type article = {
  title: string;
  description: string;
  author: string;
  date: string;
  _id: string;
  slug: string;
  image: string;
  content: string;
  category: { title: string; _id: string };
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const ArticlePage = () => {
  const path = usePathname();
  const slug = path.split("/")[2];

  const { data: article, isLoading } = useSWR<article>(
    `/api/articles/${slug}`,
    fetcher
  );

  if (isLoading) {
    return (
      <h1 className="w-full grid place-content-center h-full py-96 ">
        loading...
      </h1>
    );
  }

  return (
    <>
      {article && (
        <Gutter className="my-5 ">
          <div className="flex  flex-col items-center justify-center ">
            <div className="max-w-[935px]  h-full  space-y-5 ">
              <h1 className="text-3xl md:text-3xl leading-normal lg:text-6xl font-bold  text-center  capitalize">
                {article.title}
              </h1>
              <p className="text-base text-black/70 text-center">
                {article?.description}
              </p>
              <div className="flex items-center justify-around">
                <h5>
                  by <strong>{article.author}</strong>
                </h5>
                <h5 className=" capitalize">
                  published:{" "}
                  {article?.date?.substring(0, 10).replaceAll("-", "/")}
                </h5>
              </div>
              <div className="">
                <img
                  src={article.image}
                  className="aspect-[16/12] lg:aspect-video w-full h-full object-cover"
                  alt={article.title}
                />
              </div>
              {/* <HR color="black" /> */}
              <div className="flex px-4 items-center w-full justify-center">
                <div
                  className="max-w-[935px] "
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </div>
            </div>
          </div>
        </Gutter>
      )}
    </>
  );
};

export default ArticlePage;
