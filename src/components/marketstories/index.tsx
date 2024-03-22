import { MarketStorySingleProp } from "@/types/loadtype";
import React from "react";
import EachStory from "./EachStory";

const MarketStories = (props: { allStories: MarketStorySingleProp[] }) => {
  const pagetitle = "Market Stories";
  return (
    <div
      className="pl-4 pb-8 mt-4 "
      style={{
        height: "96vh",
        overflowY: "scroll",
        position: "sticky",
        // position: '-webkit-sticky', /* Safari */
        top: 10,
      }}
    >
      <h2
        className="text-xl text-red-500 font-semibold ml-4 bg-slate-50 pb-2 hidden sm:block"
        style={{
          position: "sticky",

          top: 0,
        }}
      >
        {pagetitle.toUpperCase()}
      </h2>

      {props.allStories.map((snglStory, index) => {
        return (
          <div key={index} className="max-w-sm m-auto">
            <EachStory singleStory={snglStory} />
          </div>
        );
      })}
    </div>
  );
};

export default MarketStories;
