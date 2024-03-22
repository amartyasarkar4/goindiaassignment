import React from "react";

const Backdrop = (props: { closeModal: any }) => {
  return (
    <div
      style={{
        opacity: 0.9,

        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        zIndex: 9898,
        backgroundColor: "#94a3b8",
      }}
      //   onClick={props.closeModal}
    ></div>
  );
};

export default Backdrop;
