"use client";
import { DisscussionSingleProp } from "@/types/loadtype";
import Image from "next/image";
import React from "react";

const EachUI = (props: { snglDiss: DisscussionSingleProp }) => {
  const getDiffTime = () => {
    const diffInsec =
      (new Date().getTime() - new Date(props.snglDiss.time).getTime()) / 1000;

    // console.log("diffInSec", diffInsec);

    if (diffInsec < 60) {
      return `${Math.trunc(diffInsec)} sec`;
    } else if (diffInsec >= 60 && diffInsec < 3600) {
      return `${Math.trunc(diffInsec / 60)} min`;
    } else if (diffInsec >= 3600 && diffInsec < 24 * 3600) {
      return `${Math.trunc(diffInsec / 3600)} hour`;
    } else {
      return `${Math.trunc(diffInsec / (24 * 3600))} days`;
    }
  };
  return (
    <div className="shadow-xl mb-12 px-5 py-3 relative bg-slate-50">
      <div className="bg-slate-50 flex mt-2 relative">
        <div className="w-1/5 sm:w-2/12 md:w-1/12 mt-1">
          <Image
            src={props.snglDiss.photo}
            alt="profileImg"
            width={500}
            height={500}
            style={{
              width: "80px",
              height: "50px",
            }}
          />
        </div>
        <div className="w-4/5  ml-1 mt-2">
          <div className="flex mb-2 justify-between sm:justify-start w-full items-center">
            <div className="text-sm md:text-md font-semibold mr-1 min-w-12 sm:min-w-24">
              <h2 className="text-xs">{props.snglDiss.author}</h2>
            </div>
            <div className="bg-sky-700 px-4 text-slate-50 rounded-3xl text-xs py-1">
              <h4 className="text-xs">{props.snglDiss.sector}</h4>
            </div>
          </div>
          <p className="text-xs">{props.snglDiss.desc}</p>

          <div className="flex justify-between text-xs mt-2 ">
            <p className="flex items-center">
              <Image
                src="/heart.svg"
                alt="likeIcon"
                width={500}
                height={500}
                style={{
                  height: "22px",
                  width: "22px",
                }}
              />
              {props.snglDiss.likes}
              <span className="hidden md:inline-block">likes</span>
            </p>
            <p className="flex items-center">
              <Image
                src="/view.svg"
                alt="likeIcon"
                width={500}
                height={500}
                style={{
                  height: "22px",
                  width: "22px",
                }}
              />
              {props.snglDiss.view}
              <span className="hidden md:inline-block">views</span>
            </p>
            <p className="flex items-center">
              <Image
                src="/comment.svg"
                alt="likeIcon"
                width={500}
                height={500}
                style={{
                  height: "17px",
                  width: "17px",
                }}
              />
              {props.snglDiss.comments}
              <span className="hidden md:inline-block">comments</span>
            </p>
            <p className="flex items-center">
              <Image
                src="/share.svg"
                alt="likeIcon"
                width={500}
                height={500}
                style={{
                  height: "22px",
                  width: "22px",
                }}
              />
              <span className="hidden md:inline-block">share</span>
            </p>
          </div>
        </div>
      </div>
      <p className="text-xs justify-self-end absolute top-1 right-2 sm:right-3 text-sky-700 font-semibold">
        {/* {(new Date().getTime() - new Date(props.snglDiss.time).getTime()) /
              (1000 )} */}
        {getDiffTime()} ago
      </p>
    </div>
  );
};

export default EachUI;
