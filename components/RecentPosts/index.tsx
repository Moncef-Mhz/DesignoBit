"use client";
import React, { useState } from "react";
import { RecentPost } from "@/constant";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import useSWR from "swr";

type RecentPost = {
  className?: string;
};

type ArticlesType = {
  title: string;
  slug: string;
  content: string;
  description: string;
  image: string;
  author: string;
  date: string;
  _id: string;
  category: {
    _id: string;
    title: string;
  };
};

const fetcher = async (url: string) => {
  const res = await fetch(url);
  return res.json();
};
const RecentPosts = (props: RecentPost) => {
  const { className } = props;
  const { data: article, isLoading } = useSWR<ArticlesType[]>(
    "/api/articles",
    fetcher
  );
  const [loadingArticles, setLoadingArticles] = useState(false);

  return (
    <div
      className={[className, " w-full border-r-2"].filter(Boolean).join(" ")}
    >
      <h1 className=" uppercase font-bold border-b-2  p-2 text-2xl ">Recent</h1>
      <div className=" flex items-start flex-col ">
        {article &&
          article?.map((item) => (
            <div key={item._id} className="w-full border-b-2 ">
              <Link
                href={`/posts/${item.slug}`}
                className="flex relative text-black px-2 py-6 no-underline m-0 lg:flex-row items-stretch gap-4  "
              >
                <img
                  src={item?.image}
                  alt="post-1"
                  className="min-h-[150px] max-h-[200px] rounded-md object-cover"
                />
                <div className="flex flex-col items-start justify-between py-2">
                  <h2 className="lg:text-2xl m-0 md:text-xl text-lg font-bold ">
                    {item.title}
                  </h2>
                  <p className="lg:w-[80%] m-0 md:w-[90%] w-full text-black/80 text-base">
                    {item.description.substring(0, 200)}
                  </p>
                  <div className="flex flex-row justify-between w-full">
                    <p>
                      made by <span className="font-bold">{item.author}</span>{" "}
                    </p>
                    <p>Published: {item.date.substring(0, 10)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}

        {/* dsadsa */}

        {/* here is load button */}
        <div className="py-10 items-center w-full text-center">
          {loadingArticles ? (
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button
              onClick={() => setLoadingArticles(true)}
              // className="text-center font-semibold  rounded-md text-xl"
            >
              Load more
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
