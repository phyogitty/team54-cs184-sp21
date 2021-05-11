import React from "react";
import TechApproachDropDown from "./TechApproachDropDown";
const TopNav = () => {
  return (
    <div className="fixed-top nav-dim d-flex flex-row" id="topNav">
      <div className="wid-70 tc-white px-3">
        <div className="left-align">
          <span className="item mx-3 bolded" id="group-name">
            <a href="#title">TEAM 54</a>
          </span>
          <a href="#next-abstract" className="item mx-3">
            Abstract
          </a>
          <TechApproachDropDown />
          <a href="#next-results" className="item mx-3">
            Results
          </a>
          <a href="#next-references" className="item mx-3">
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
