"use client";
import React from "react";
import { Gutter } from "../Gutter";
import useSWR from "swr";

type articles = {
  title: string;
  slug: string;
  content: string;
  image: string;
  author: string;
  date: string;
  _id: string;
  description: string;
  category: string;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};
const Hero = () => {
  const { data, isLoading } = useSWR<articles[]>("/api/articles", fetcher);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const limitedArticles = data?.slice(0, 3);

  return (
    <Gutter className="grid my-16 lg:grid-cols-3 lg:max-h-[600px] grid-cols-1 lg:grid-rows-2  gap-2   ">
      {limitedArticles?.map((article) => (
        <div className="first:col-span-2 first:row-span-2  col-span-1  group relative overflow-hidden rounded-sm">
          <img
            src={article.image}
            alt={article.title}
            className="object-cover w-full h-full aspect-square group-hover:scale-105 duration-150 cursor-pointer"
          />
          <div className="absolute bottom-0 left-0 space-y-2 py-4 px-4 bg-black/30 w-full shadow-lg opacity-0 group-hover:opacity-100 duration-150">
            <h1 className="text-2xl font-bold text-white m-0">
              {article.title}
            </h1>
            <p className="text-sm text-white/80 m-0">{article.description}</p>
          </div>
        </div>
      ))}
    </Gutter>
  );
};

export default Hero;
