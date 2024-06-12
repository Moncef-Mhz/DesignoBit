import BlogPosts from "@/components/BlogPost";
import { Gutter } from "@/components/Gutter";
import Hero from "@/components/Hero";
import NewsLatter from "@/components/NewsLatter";

export default function Home() {
  return (
    <>
      <Hero />
      <NewsLatter />
      <Gutter className="">
        <BlogPosts />
      </Gutter>
    </>
  );
}
