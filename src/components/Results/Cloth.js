import React from "react";
import pic1 from "../../images/pic1.jpeg";
import pic2 from "../../images/pic2.PNG";
import pic3 from "../../images/pic3.PNG";
import pic4 from "../../images/pic4_leather.PNG";
import pic5 from "../../images/pic5_jean.PNG";
import pic6 from "../../images/pic6_silk.PNG";
const Cloth = () => {
  return (
    <div id="cloth-visual">
      <div className="three-in-row">
        <div className="col-display m-2">
          <img
            src={pic1}
            alt="pic1"
            height="300px"
            width="auto"
            className="m-2 pic"
          ></img>
          1) Vertical + Horizontal Waves
        </div>
        <div className="col-display m-2">
          <img
            src={pic2}
            alt="pic2"
            height="300px"
            width="auto"
            className="m-2 pic"
          ></img>
          2) Vertical Waves
        </div>
        <div className="col-display m-2">
          <img
            src={pic3}
            alt="pic3"
            height="300px"
            width="auto"
            className="m-2 pic"
          ></img>
          3) Horizontal Waves
        </div>
      </div>
      <div className="three-in-row">
        <div className="col-display m-2">
          <img
            src={pic4}
            alt="pic4"
            height="300px"
            width="auto"
            className="m-2 pic"
          ></img>
          4) Synthetic Leather
        </div>
        <div className="col-display m-2">
          <img
            src={pic5}
            alt="pic5"
            height="300px"
            width="auto"
            className="m-2 pic"
          ></img>
          5) Blue Jean
        </div>
        <div className="col-display m-2">
          <img
            src={pic6}
            alt="pic6"
            height="300px"
            width="auto"
            className="m-2 pic"
          ></img>
          6) Pink Silk
        </div>
      </div>
    </div>
  );
};
export default Cloth;
