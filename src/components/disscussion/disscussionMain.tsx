"use client";
import { DisscussionSingleProp } from "@/types/loadtype";
import React from "react";
import EachUI from "./eachUI";

const DisscussionMain = (props: {
  allDisscussions: DisscussionSingleProp[];
}) => {
  const pagetitle = "Disscussion Forum";

  // React.useEffect(() => {
  //   console.log("gjhjs", props.allDisscussions);
  // }, [props.allDisscussions]);
  return (
    <div>
      <h2
        className="hidden sm:block text-xl text-red-500 font-semibold ml-4 bg-slate-50 py-2 bg-slate-50"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 99,
        }}
      >
        {pagetitle.toUpperCase()}
      </h2>

      {props?.allDisscussions?.map((sngl, indx) => {
        return (
          <div key={indx}>
            <EachUI snglDiss={sngl} />
          </div>
        );
      })}
    </div>
  );
};

export default DisscussionMain;
