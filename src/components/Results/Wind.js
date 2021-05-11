import React from "react";
import ReactPlayer from "react-player";
const Wind = () => {
  return (
    <div id="wind-visual" className="center my-5">
      <ReactPlayer url="https://youtu.be/vtDLJG6uBCw" />
      <div id="next-references" className="m-2">
        Wind Effect Demo
      </div>
    </div>
  );
};
export default Wind;
