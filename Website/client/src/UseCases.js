import React from "react";
import { Link } from "react-router-dom";
import "./UseCases.css";
import "./Dashboard.css";
import Image1 from "./images/image1.PNG";
import Image2 from "./images/image2.PNG";
import Image3 from "./images/image3.PNG";
import Image4 from "./images/image4.PNG";
import Image5 from "./images/image5.PNG";
import Image6 from "./images/image6.PNG";
import Image7 from "./images/image7.PNG";

const UseCases = () => {
  return (
    <div>
      <div className="useCaseTitle">
        <div className="Emergency">Emergency Maverick</div>
        <Link className="back" to="/">
          Go Back
        </Link>
      </div>
      <div className="slides">
        <img className="slide1" src={Image1} alt="" />
        <img className="slide" src={Image2} alt="" />
        <img className="slide3" src={Image3} alt="" />
        <img className="slide" src={Image4} alt="" />
        <img className="slide5" src={Image5} alt="" />
        <img className="slide" src={Image6} alt="" />
        <img className="slide" src={Image7} alt="" />
      </div>
    </div>
  );
};
export default UseCases;
