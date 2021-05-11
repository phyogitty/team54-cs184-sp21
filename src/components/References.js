import React from "react";
import { HiExternalLink } from "react-icons/hi";
const References = () => {
  return (
    <div id="references">
      <div className="main-title">References</div>

      <div className="py-3"></div>
      <div>
        Wejchert and Haumann, "Animation Aerodynamics"{" "}
        <a
          target="_blank"
          href="https://people.cs.clemson.edu/~dhouse/courses/817/papers/wejcherthaumann91.pdf"
        >
          <HiExternalLink size="25px" />
        </a>
      </div>
      <div className="pb-1"></div>
      <div>
        Viscosity of Air, Dynamic and Kinematic{" "}
        <a
          target="_blank"
          href="https://www.engineersedge.com/physics/viscosity_of_air_dynamic_and_kinematic_14483.htm#:~:text=The%20viscosity%20of%20air%20depends,10%2D5%20Pa%C2%B7s%20."
        >
          <HiExternalLink size="25px" />
        </a>
      </div>
      <div className="pb-1"></div>
      <div>
        Stroke's Law, Wikipedia{" "}
        <a target="_blank" href="https://en.wikipedia.org/wiki/Stokes%27_law">
          <HiExternalLink size="25px" />
        </a>
      </div>
      <div className="py-4"></div>
    </div>
  );
};
export default References;
