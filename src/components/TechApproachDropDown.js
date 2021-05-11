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

        <Dropdown.Menu className="bg-blue2">
          <Dropdown.Item className="dd-item" href="#tech-approach">
            Simulation Speed-up
          </Dropdown.Item>
          <Dropdown.Item className="dd-item" href="#cloth-models">
            Different Cloth Types
          </Dropdown.Item>
          <Dropdown.Item className="dd-item" href="#wind-effect">
            Uniform Wind Field
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default TechApproachDropDown;
