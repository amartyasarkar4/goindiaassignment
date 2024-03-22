import Image from "next/image";
import React from "react";
import DrawerItems from "./DrawerItems";

const Modal = (props: { closeModal: any; fordesktop: Boolean }) => {
  const userName = "User";
  return (
    <div
      className="bg-sky-900 text-slate-50 font-seminbold px-4 py-2"
      style={{
        zIndex: 9999,
        position: props.fordesktop ? "static" : "fixed",
        top: 0,
        left: 0,
        width: "280px",
        height: "100%",
      }}
    >
      <button
        onClick={props.closeModal}
        className="bg-sky-900 text-slate-50"
        style={{
          position: "fixed",
          zIndex: 399,
          //   rotate: "90deg",
          left: "280px",
          top: "30%",
          height: "120px",
          // width: "22px",
        }}
      >
        <Image
          src="/Arrowback.svg"
          alt="openModal"
          width={500}
          height={500}
          style={{
            width: "30px",
            height: "30px",
          }}
        />
      </button>

      <div
        style={{
          position: "sticky",
          top: 20,
          left: 0,
        }}
      >
        {/* <h2 onClick={props.closeModal}>Close Modal</h2> */}

        <div className="flex justify-between items-center py-2 border-b">
          <div className="flex items-center">
            <Image
              src="/profile.png"
              alt="profile"
              width={500}
              height={500}
              style={{
                width: "34px",
                height: "30px",
                borderRadius: "50%",
                marginRight: "12px",
              }}
            />
            <h2 className="text-sm font-semibold">Hello,{userName}</h2>
          </div>
          <div className="text-slate-50 ">
            <Image
              src="/Notificationcircle.svg"
              alt="bellIcon"
              width={500}
              height={500}
              style={{
                width: "30px",
                height: "25px",
              }}
            />
          </div>
        </div>

        <div className="mt-2">
          <DrawerItems />
        </div>
      </div>
    </div>
  );
};

export default Modal;
