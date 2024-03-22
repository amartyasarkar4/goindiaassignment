import { MarketStorySingleProp } from "@/types/loadtype";
import Image from "next/image";
import React from "react";

const EachStory = (props: { singleStory: MarketStorySingleProp }) => {
  return (
    <div className="shadow-xl px-4 py-4">
      <Image
        src={props.singleStory.photo}
        alt="storyPhoto"
        width={500}
        height={500}
        className="w-full h-40 lg:h-44"
      />
      <h2 className="font-semibold text-md">{props.singleStory.heading}</h2>
      <p className="text-xs">{props.singleStory.description}</p>
    </div>
  );
};

export default EachStory;
