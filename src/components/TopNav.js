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
          <a href="#abstract" className="item mx-3">
            Abstract
          </a>
          <TechApproachDropDown />
          <a chref="#results" className="item mx-3">
            Results
          </a>
          <a href="#references" className="item mx-3">
            References
          </a>
          <a href="#contribution" className="item mx-3">
            Contributions
          </a>
        </div>
      </div>
      <div className="wid-15 bg-blue2 tc-white center">
        {" "}
        <a
          href="https://docs.google.com/presentation/d/1-PQNHfxrVIOt6AMO2GjtLyL04Ri4xlLQPbNGKnDQUgM/edit#slide=id.gd722c2cb55_0_438"
          target="_blank"
          className="item mx-3"
        >
          PPT Slides
        </a>
      </div>
      <div className="wid-15 bg-blue2 tc-white center">
        <a
          href="https://phyogitty.github.io/184-final-project/"
          target="_blank"
        >
          Proposal
        </a>
      </div>
      <div className="wid-15 bg-blue2 tc-white center">
        <a
          href="https://phyogitty.github.io/team54-milestone-page-cs184/"
          target="_blank"
        >
          Milestone
        </a>
      </div>
    </div>
  );
};

export default TopNav;
