"use client";
import React, { useState } from "react";
import { Gutter } from "@/components/Gutter";
import { Category, RecentPost } from "@/constant";
import ArticlesCard from "@/components/Card";
// import useSW from "swr";
import useSWRInfinite from "swr/infinite";
import { Button } from "@/components/ui/button";
import useSWR from "swr";

type ArticlesType = {
  title: string;
  slug: string;
  content: string;
  description: string;
  image: string;
  author: string;
  date: string;
  _id: string;
  category: string;
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};

const Posts = () => {
  const [activeCat, setActiveCat] = useState("All");
  const {
    data: articlesData,
    isLoading,
    isValidating,
    size,
    setSize,
  } = useSWRInfinite<ArticlesType[]>(
    (index) => `/api/articles?page=${index}`,
    fetcher
  );

  const articles: ArticlesType[] = articlesData ? articlesData.flat() : [];
  const isLoadingMore =
    isLoading ||
    (size > 0 && articlesData && typeof articlesData[size - 1] === "undefined");
  const isEmpty = articlesData?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty ||
    (articlesData && articlesData[articlesData.length - 1]?.length < 10);

  if (!articles) {
    return <div>Loading...</div>;
  }

  console.log(articles);

  return (
    <Gutter className="py-10 space-y-16">
      <h1 className="text-center  font-bold text-3xl md:text-4xl lg:text-6xl uppercase">
        Discover the best stories & <br /> Articles on the web
      </h1>

      {/* categories section */}
      <div className="flex items-center gap-4 flex-wrap justify-start">
        {Category.map((item) => (
          <div
            key={item.id}
            onClick={() => setActiveCat(item.title)}
            className={[
              activeCat === item.title
                ? "border rounded-full lg:text-base text-sm bg-black text-white hover:bg-black/80 cursor-pointer hover:border-black/80 duration-150 px-4 py-2 border-black"
                : "border rounded-full lg:text-base text-sm cursor-pointer px-4 py-2 border-black",
            ]
              .filter(Boolean)
              .join("")}
          >
            {item.title}
          </div>
        ))}
      </div>

      {/* Articles section */}
      <div className="grid md:grid-cols-3 gap-5 grid-cols-1 ">
        {articles &&
          articles
            .filter((item) =>
              activeCat === "All" ? true : item.category === activeCat
            )
            .map((item) => <ArticlesCard key={item._id} item={item} />)}
      </div>
      <div className="flex items-center w-full justify-center">
        <Button
          variant={"default"}
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? "loading..."
            : isReachingEnd
            ? "no more posts"
            : "load more"}
        </Button>
      </div>
    </Gutter>
  );
};

export default Posts;
