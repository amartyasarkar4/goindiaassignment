import Image from "next/image";
import React from "react";

const DrawerItems = () => {
  return (
    <div className="mt-4 px-2 py-2">
      <nav className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <Image
              src="/disscuss1.svg"
              alt="disscuss"
              width={500}
              height={500}
              style={{
                width: "25px",
                height: "25px",
              }}
            />
            <p>Disscussion Forum</p>
          </div>
          <Image
            src="/down.svg"
            alt="downImg"
            width={500}
            height={500}
            style={{
              width: "12px",
              height: "12px",
            }}
          />
        </div>
        <div className="flex gap-2">
          <Image
            src="/Piggybank.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Market Stories</p>
        </div>
        <div className="flex gap-2">
          <Image
            src="/careemoji.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Sentiment</p>
        </div>

        <div className="flex gap-2">
          <Image
            src="/Market.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Market</p>
        </div>
        <div className="flex gap-2">
          <Image
            src="/sector.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Sector</p>
        </div>

        <div className="flex gap-2">
          <Image
            src="/Watchlist.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Watchlist</p>
        </div>
        <div className="flex gap-2">
          <Image
            src="/Events.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>Events</p>
        </div>

        <div className="flex gap-2">
          <Image
            src="/Newspaper.svg"
            alt="disscuss"
            width={500}
            height={500}
            style={{
              width: "25px",
              height: "25px",
            }}
          />
          <p>News/Interview</p>
        </div>
      </nav>
    </div>
  );
};

export default DrawerItems;
