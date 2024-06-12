import React from "react";
import Link from "next/link";

interface ArticleProps {
  item: {
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
}

const ArticlesCard: React.FC<ArticleProps> = ({ item }) => {
  return (
    <Link
      href={`posts/${item.slug}`}
      key={item._id}
      className="flex group flex-col no-underline overflow-x-hidden items-start"
    >
      <img
        src={item.image}
        alt={item.title}
        className="rounded aspect-[16/12] object-cover"
      />
      <div className="p-2">
        <h3 className="font-bold text-2xl text-black no-underline group-hover:underline duration-75">
          {item.title}
        </h3>
        <p className="text-black/70">{item?.description?.substring(0, 100)}</p>
      </div>
    </Link>
  );
};

export default ArticlesCard;
