"use client";
import React, { useState } from "react";
import DisscussionMain from "./disscussionMain";
import MarketStories from "../marketstories";
import { DisscussionSingleProp, MarketStorySingleProp } from "@/types/loadtype";
import Drawer from "../drawer";
import Image from "next/image";
import Modal from "../drawer/Modal";

const MainPage = (props: {
  disscussData: DisscussionSingleProp[];
  marketStoriesData: MarketStorySingleProp[];
}) => {
  const [openedDrawer, setOpenedDrawer] = useState(true);

  const [activeDisscuss, seTactiveDisscuss] = useState(true);

  return (
    <div style={{ position: "relative" }}>
      {openedDrawer ? null : (
        <button
          onClick={() => setOpenedDrawer(!openedDrawer)}
          className="bg-sky-900 text-slate-50"
          style={{
            position: "fixed",
            zIndex: 399,
            //   rotate: "90deg",
            left: "0px",
            top: "30%",
            height: "120px",
            // width: "22px",
          }}
        >
          <Image
            src="/Arrowforward.svg"
            alt="openModal"
            width={500}
            height={500}
            style={{
              width: "30px",
              height: "30px",
            }}
          />
        </button>
      )}

      {openedDrawer ? (
        <div className="block md:hidden">
          {/* <h3>Hello Drawer</h3> */}
          <Drawer closeDrawer={() => setOpenedDrawer(!openedDrawer)} />
        </div>
      ) : null}

      <div className="flex relative flex-row ">
        {openedDrawer ? (
          <div className="hidden md:block">
            <Modal
              closeModal={() => setOpenedDrawer(!openedDrawer)}
              fordesktop={true}
            />
          </div>
        ) : null}

        <div className="w-full lg:w-4/6 hidden lg:block px-5 py-5">
          <DisscussionMain allDisscussions={props.disscussData} />
        </div>

        <div className="w-full lg:hidden px-5 py-5 mb-8">
          <div
            className="flex inline lg:hidden w-full  bg-sky-900 py-1"
            style={{
              position: "sticky",
              top: 0,
              marginBottom: "5px",
              zIndex: 9888,
            }}
          >
            <div
              className={
                activeDisscuss
                  ? "w-1/2 text-center bg-blue-900 border-b-2 border-rose-600"
                  : "w-1/2 text-center"
              }
              onClick={() => seTactiveDisscuss(true)}
            >
              <h4 className="text-slate-50 text-md font-semibold">
                Disscussion Forum
              </h4>
            </div>
            <div
              className={
                activeDisscuss
                  ? "w-1/2 text-center"
                  : "w-1/2 text-center bg-blue-900 border-b-2 border-rose-600"
              }
              onClick={() => seTactiveDisscuss(false)}
            >
              <h4 className="text-slate-50 text-md font-semibold">
                Market Stories
              </h4>
            </div>
          </div>
          {activeDisscuss ? (
            <DisscussionMain allDisscussions={props.disscussData} />
          ) : (
            <MarketStories allStories={props.marketStoriesData} />
          )}
        </div>
        <div className="hidden lg:inline lg:w-2/6 px-1 py-5">
          <MarketStories allStories={props.marketStoriesData} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
