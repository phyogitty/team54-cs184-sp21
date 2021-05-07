import React from "react";
import TechApproachDropDown from "./TechApproachDropDown";
const TopNav = () => {
  return (
    <div className="fixed-top nav-dim bg-info d-flex flex-row">
      <div className="wid-70 bg-blue1 tc-white px-3">
        <div className="left-align">
          <span className="item mx-3" id="group-name">
            Team 54
          </span>
          <span className="item mx-3">Abstract</span>
          <TechApproachDropDown />
          <span className="item mx-3">Results</span>
          <span className="item mx-3">References</span>
          <span className="item mx-3">Contributions</span>
        </div>
      </div>
      <div className="wid-15 bg-blue2 tc-white center">Proposal</div>
      <div className="wid-15 bg-blue2 tc-white center">Milestone</div>
    </div>
  );
};

export default TopNav;
