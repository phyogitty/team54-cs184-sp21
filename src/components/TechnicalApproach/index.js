import React from "react";
import ClothModels from "./ClothModels";
import Optimizations from "./Optimization";
import WindEffect from "./WindEffect";

const TechnicalApproach = () => {
  return (
    <div>
      <div className="py-4" id="tech-approach"></div>
      <div className="main-title">Technical Approach</div>
      <Optimizations />
      <ClothModels />
      <WindEffect />
    </div>
  );
};
export default TechnicalApproach;
