import React from "react";
import { Dropdown } from "react-bootstrap";

const TechApproachDropDown = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="success"
          id="dropdown-basic"
          className="dropdown"
        >
          Technical Approach
        </Dropdown.Toggle>

        <Dropdown.Menu className="bg-blue3">
          <Dropdown.Item className="py-2" href="#/action-1">
            Simulation Speed-up
          </Dropdown.Item>
          <Dropdown.Item className="py-2" href="#/action-2">
            Different Cloth Types
          </Dropdown.Item>
          <Dropdown.Item className="py-2" href="#/action-3">
            Wind Effect on Flag
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default TechApproachDropDown;
