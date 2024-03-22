import { loadDisscussionData, loadMarketStoriesData } from "@/api";
import MainPage from "@/components/disscussion";

import { DisscussionSingleProp } from "@/types/loadtype";
import React from "react";

async function getDiscussions() {
  const res = await loadDisscussionData();

  // console.log("rdrdrdrd", res);

  return res;
}

async function getMarketStories() {
  const res = await loadMarketStoriesData();

  return res;
}

const DisscussionPage = async () => {
  const data = await getDiscussions();

  const marketdata = await getMarketStories();

  // console.log("ggg", data);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <MainPage disscussData={data} marketStoriesData={marketdata} />
    </div>
  );
};

export default DisscussionPage;
