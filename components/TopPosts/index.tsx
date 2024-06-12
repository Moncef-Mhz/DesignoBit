import { join } from "path";
import React from "react";

type TopPostType = {
  className?: string;
};

const TopPost = (props: TopPostType) => {
  const { className } = props;
  return (
    <div className={([className, ""].filter(Boolean), join(" "))}>
      <h1 className=" uppercase font-bold   p-2 text-2xl ">Top Posts</h1>
    </div>
  );
};

export default TopPost;
