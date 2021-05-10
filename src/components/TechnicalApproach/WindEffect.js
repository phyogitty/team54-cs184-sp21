import React from "react";
import strokeLaw from "../../images/strokeLaw.png";
const WindEffect = () => {
  return (
    <div id="wind-effect">
      <div className="title-font">Wind Effect on Flag</div>
      <div className="py-1"></div>
      <div>
        We have also implemented uniform wind fields. Our implementation was
        motivated by the general techniques described in a 1991 SIGGRAPH paper
        by Wejchert and Haumann titled “Animation Aerodynamics”. To approximate
        the interaction with a uniform wind field and our cloth, we used Stoke’s
        Law:
        <span className="mx-2">
          <img
            src={strokeLaw}
            alt="Stroke's Law"
            width="100px"
            height="25px"
          ></img>
        </span>
        which states that the drag force Fd acting opposite to a particle moving
        through a fluid with a dynamic viscosity is proportional to the radius R
        of the particle and the velocity v of the liquid relative to the
        particle. The only modifications to this formula was to use the surface
        area of the cloth instead of radius and to scale the drag force by the
        absolute value of the dot product between the pointMass normal and the
        wind vector. We take the absolute value of the dot product because the
        force from the wind should act in the same direction regardless of the
        orientation of the cloth face. There are still some things left to
        improve in our implementation of wind such as checking for objects in
        front of the cloth and setting the surface area of the boundary masses
        to be lower than the other masses. Also, we implemented an option to
        view the wind field visually as a vector field in the simulation to make
        it easier to see the interaction between the cloth and different wind
        speeds and directions.
      </div>
      <div className="py-2"></div>
      <div>
        <a href="#wind-visual" className="bg-blue2 see-result p-1 tc-blue4">
          Results for Wind Effect
        </a>
      </div>
      <div className="py-2"></div>
    </div>
  );
};

export default WindEffect;
