import React from "react";
import ClothModels from "./ClothModels";
import Optimizations from "./Optimization";
import WindEffect from "./WindEffect";

const TechnicalApproach = () => {
  return (
    <div>
      <div className="main-title">Technical Approach</div>
      <Optimizations />
      <ClothModels />
      <WindEffect />
    </div>
  );
};
export default TechnicalApproach;
