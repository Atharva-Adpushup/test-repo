import React from "react";
import ReactLoading from "react-loading";

function Loader() {
  return (
    <div className="w-screen flex justify-center items-center mx-auto">
      <ReactLoading
        type={"cylon"}
        color={"#FF4954"}
        height={"30%"}
        width={"30%"}
        delay={2}
      />
    </div>
  );
}

export default Loader;
