import { Gutter } from "@/components/Gutter";
import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";
import TopPost from "@/components/TopPosts";

export default function Home() {
  return (
    <>
      <Hero />
      <Gutter className="grid lg:grid-cols-3 relative gap-4">
        <RecentPosts className="lg:col-span-2 col-span-1 w-full" />
        <TopPost className="col-span-1" />
      </Gutter>
    </>
  );
}
