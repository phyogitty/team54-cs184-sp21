import React from "react";

import Cloth from "./Cloth";
import SpeedUp from "./SpeedUp";
import Wind from "./Wind";
const Results = () => {
  return (
    <div id="results">
      <div className="main-title">Results</div>
      <div className="py-2"></div>
      <SpeedUp />
      {/* <div className="py-2"></div> */}
      <Cloth />
      <div className="py-2"></div>
      <Wind />
    </div>
  );
};
export default Results;
