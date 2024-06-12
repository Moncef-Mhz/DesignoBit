import React from "react";
import { Gutter } from "../Gutter";

const Hero = () => {
  return (
    <Gutter className="grid my-16 lg:grid-cols-3 lg:max-h-[600px] grid-cols-1 lg:grid-rows-2  gap-5   ">
      <div className="lg:col-span-2  group row-span-2 relative overflow-hidden rounded-sm">
        <img
          src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=612x612&w=0&k=20&c=kPvoBm6qCYzQXMAn9JUtqLREXe9-PlZyMl9i-ibaVuY="
          alt=""
          className="object-cover w-full h-full aspect-square group-hover:scale-105 duration-150 cursor-pointer"
        />
        <div className="absolute bottom-0 left-0 py-6 px-4 bg-black/30 w-full shadow-lg opacity-0 group-hover:opacity-100 duration-150">
          <h1 className="text-xl font-bold text-white">this is post</h1>
          <p className="text-xs text-white/80">this is post description</p>
        </div>
      </div>
      <div className="col-span-1 group relative overflow-hidden rounded-sm">
        <img
          src="https://burst.shopifycdn.com/photos/a-drop-of-pink-and-yellow-paint-in-water.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          alt=""
          className="object-cover w-full h-full group-hover:scale-105 aspect-square duration-150 cursor-pointer"
        />
        <div className="absolute bottom-0 left-0 py-6 px-4 bg-black/30 w-full shadow-lg opacity-0 group-hover:opacity-100 duration-150">
          <h1 className="text-xl font-bold text-white">this is post</h1>
          <p className="text-xs text-white/80">this is post description</p>
        </div>
      </div>
      <div className="col-span-1 group relative overflow-hidden rounded-sm">
        <img
          src="https://burst.shopifycdn.com/photos/two-tone-ink-cloud.jpg?width=1000&format=pjpg&exif=0&iptc=0"
          alt=""
          className="object-cover w-full aspect-square h-full group-hover:scale-105 duration-150 cursor-pointer"
        />
        <div className="absolute bottom-0 left-0 py-6 px-4 bg-black/30 w-full shadow-lg opacity-0 group-hover:opacity-100 duration-150">
          <h1 className="text-xl font-bold text-white">this is post</h1>
          <p className="text-xs text-white/80">this is post description</p>
        </div>
      </div>
    </Gutter>
  );
};

export default Hero;
