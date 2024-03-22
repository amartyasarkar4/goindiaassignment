import { disscussionData } from "@/dummyData/discussionData";
import { marketStoriesData } from "@/dummyData/marketStoriesData";
import { DisscussionSingleProp } from "@/types/loadtype";

export const loadDisscussionData = async () => {
  return disscussionData;

  // const res = await fetch("http://localhost:5000/getData");

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
  // const myData = await res.json();

  // return myData.data;
};

export const loadMarketStoriesData = async () => {
  return marketStoriesData;

  // const res = await fetch("http://localhost:5000/getMarketStories");

  // if (!res.ok) {
  //   throw new Error("Failed to fetch data");
  // }
  // const myData = await res.json();

  // return myData.data;
};
