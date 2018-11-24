import React from "react";
import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <section className="demoSection">
        <div className="demo">
          <h1 className="demo-subTitle">
            <Link to="/demo">DEMO</Link>
          </h1>
          <div className="sub-title">See our system in action</div>
        </div>
      </section>
      <section className="useCasesSection">
        <div className="useCases">
          <h1 className="demo-subTitle">
            {" "}
            <Link to="/use-cases">USE CASES</Link>
          </h1>
          <div className="sub-title">Find out how it works</div>
        </div>
      </section>
    </div>
  );
};
export default Landing;
