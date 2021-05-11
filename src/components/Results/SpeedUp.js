import React from "react";
import ReactPlayer from "react-player";

const SpeedUp = () => {
  return (
    <div id="optimization-visual" className="center my-5">
      <ReactPlayer url="https://youtu.be/yeJI2POwDgQ" />
      <div className="m-2">Simulation Speed-up Demo (Flag Waving)</div>
      <div className="m-2"></div>
      <ReactPlayer url="https://youtu.be/UPrVamKOQR4" />
      <div className="m-2" id="next-cloth-visual">
        Simualation Speed-up Demo (Sphere-Cloth Collision)
      </div>
    </div>
  );
};
export default SpeedUp;
