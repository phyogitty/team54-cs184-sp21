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
          <Dropdown.Item className="py-2" href="#optimizations">
            Simulation Speed-up
          </Dropdown.Item>
          <Dropdown.Item className="py-2" href="#/cloth-models">
            Different Cloth Types
          </Dropdown.Item>
          <Dropdown.Item className="py-2" href="#/wind-effect">
            Uniform Wind Field
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default TechApproachDropDown;
