import React from "react";
import { Gutter } from "../Gutter";

const NewsLatter = () => {
  return (
    <Gutter>
      <form className="bg-blue-100 my-16 py-10 w-full text-center items-center space-y-3 rounded-md flex flex-col">
        <label
          htmlFor="newsletter"
          className="text-blue-600 text-center text-lg font-medium "
        >
          Subscripe to the newsletter <br /> for more content
        </label>
        <div className="max-w-xl flex">
          <input
            id="newsletter"
            type="text"
            className="outline-none rounded-l-full px-4 py-2 w-full"
            placeholder="Moncef@bit.com"
          />
          <button className="rounded-r-full px-4 py-2 bg-blue-500 text-white">
            submit
          </button>
        </div>
      </form>
    </Gutter>
  );
};

export default NewsLatter;
