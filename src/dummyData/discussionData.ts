import { DisscussionSingleProp } from "@/types/loadtype";

const oneDay = 24 * 60 * 60 * 1000;

export const disscussionData: DisscussionSingleProp[] = [
  {
    author: "Lorem Ipsum",
    photo: "/one.jpeg",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sector: "sector-2",
    likes: "3k+",
    view: "7k+",
    comments: "45",
    time: new Date(new Date().getTime() - 2 * 60 * 60 * 1000),
  },
  {
    author: "Arun Jadav",
    photo: "/two.jpeg",
    desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s wit",
    sector: "sector-1",
    likes: "2k+",
    view: "3k+",
    comments: "105",
    time: new Date(new Date().getTime() - 48 * 1000),
  },
  {
    author: "Ketika Jain",
    photo: "/three.jpeg",
    desc: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sector: "sector-3",
    likes: "459",
    view: "1k+",
    comments: "56",
    time: new Date(new Date().getTime() - 5 * 24 * 60 * 60 * 1000),
  },

  {
    author: "Lorem Ipsum",
    photo: "/four.jpeg",
    desc: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    sector: "sector-1",
    likes: "2k+",
    view: "2k+",
    comments: "1k+",
    time: new Date(new Date().getTime() - 7 * 60 * 1000),
  },
  {
    author: "Lorem Ipsum",
    photo: "/one.jpeg",
    desc: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s wit",
    sector: "sector-3",
    likes: "567",
    view: "988",
    comments: "34",
    time: new Date(new Date().getTime() - 2 * 60 * 1000),
  },
  {
    author: "Lorem Ipsum",
    photo: "/three.jpeg",
    desc: "the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    sector: "sector-4",
    likes: "1k+",
    view: "3k+",
    comments: "44",
    time: new Date(new Date().getTime() - 2 * 60 * 1000),
  },
];
