import { loadDisscussionData, loadMarketStoriesData } from "@/api";
import MainPage from "@/components/disscussion";
import Image from "next/image";

async function getDiscussions() {
  const res = await loadDisscussionData();

  return res;
}

async function getMarketStories() {
  const res = await loadMarketStoriesData();

  return res;
}

export default async function Home() {
  const data = await getDiscussions();

  const marketdata = await getMarketStories();

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
}
