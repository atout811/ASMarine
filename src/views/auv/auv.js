import React, { useEffect } from "react";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
import "assets/demo/demo.css?v=1.2.0";
import "./auv.css";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import Model from "./model";
import CountUp from "react-countup";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  useEffect(() => {
    document.title = "AUV Overview";
  });
  return (
    <>
      <div className="wrap">
        <ExamplesNavbar />
        <div className="overview">
          <h1 style={{ fontWeight: "bold" }}> Overview</h1>

          <p className="overview-txt">
            Our new vehicle “Feryal” went through an extensive development
            process that basically targeted mechanical/electrical simplicity
            while maintaining functionality as well as creation of a customized
            software architecture perfectly suited for the missions and
            compensates the missing expensive hardware sets and delivers a
            saftisfactory performance
          </p>
        </div>

        <div className="mechanical">
          <h1 style={{ fontWeight: "bold", margin: "30px" }}>Mechanical</h1>
          <div className="mecha">
            <p className="mechatxt">
              The mechanical team target was to make our AUV the perfect test
              subject for pool/lake training and maintain absolute modularity.
              The mechanical team designed the vehicle frame using solidworks 3D
              modeling, stress analysis and motion studies taking cost and
              rigidity into consideration. The new design carefully considered
              sealing of modular hardware boxes and connectivity. Eventually,
              the mechanical team devised an optimal manufacturing strategy that
              relied on fast CNC and rapid prototyping procedures to satisfy
              timeline and testing requirements.
            </p>
            <div className="model">
              <Model />
              <p className="modeltxt">Feryal 3D Model</p>
            </div>
          </div>
          <h4 style={{ fontWeight: "bold", margin: "30px" }}>Novel Aspects</h4>
          <div className="aspects">
            <div className="wrapper">
              <p className="aspectstxt">Modular hardware boxes</p>
              <img
                className="auv"
                src={require("../../assets/auv/mecha/1.jpeg")}
              />
            </div>
            <div className="wrapper">
              <p className="aspectstxt">Innovative torpedo mechanism</p>
              <img
                className="auv"
                src={require("../../assets/auv/mecha/2.jpg")}
              />
            </div>
            <div className="wrapper">
              <p className="aspectstxt">Simple marker dropper</p>
              <img
                className="auv"
                src={require("../../assets/auv/mecha/3.jpeg")}
              />
            </div>
          </div>
          <h3 style={{ fontWeight: "bold", margin: "30px" }}>Specs</h3>
          <div className="specs">
            <div className="wrapper">
              <div>
                <CountUp className="countup" end={26} duration={3} />
                <span className="countup">KG</span>
              </div>
              <p className="aspectstxt">Weight (in air)</p>
            </div>
            <div className="wrapper">
              <div>
                <CountUp className="countup" end={96} duration={4} />
                <span className="countup">Hrs</span>
              </div>
              <p className="aspectstxt">Manufacturing Time</p>
            </div>
            <div className="wrapper">
              <div>
                <CountUp
                  className="countup"
                  decimals={1}
                  decimal="."
                  end={8.5}
                  duration={3}
                />
                <span className="countup">M</span>
              </div>
              <p className="aspectstxt">Maximum Depth</p>
            </div>
          </div>
        </div>
        <div className="electrical">
          <h1 style={{ fontWeight: "bold", margin: "30px" }}>Electrical</h1>
          <div className="mecha">
            <p className="mechatxt">
              The electrical team designed and fabricated all of the vehicle’s
              circuits along with providing many safety features against short
              circuits, over-current and over-voltage. The team also shielded
              communication cables and hydrophone circuits to eliminate
              electromagnetic noise. The team focused only on the most basic of
              features to keep the design mission oriented and avoid cumbersome
              hardware.
            </p>
            <img />
          </div>
          <h4 style={{ fontWeight: "bold", margin: "30px" }}>Novel Aspects</h4>
          <div className="aspects">
            <div className="wrapperelec">
              <p className="aspectstxt">Compact motor controller (pixhawk)</p>
              <img
                className="auv"
                src={require("../../assets/auv/elec/1.jpeg")}
              />
            </div>
            <div className="wrapperelec">
              <p className="aspectstxt">
                New ultra Low-noise hydrophone signal conditioning circuit
              </p>
              <img
                className="auv"
                src={require("../../assets/auv/elec/2.jpeg")}
              />
            </div>
          </div>
          <h3 style={{ fontWeight: "bold", margin: "30px" }}>Specs</h3>
          <div className="specselec">
            <div className="wrapperelec">
              <div>
                <CountUp
                  redraw={true}
                  className="countup"
                  end={5}
                  duration={3}
                />
              </div>
              <p className="aspectstxt">Custom-made Boards</p>
            </div>
            <div className="wrapperelec">
              <div>
                <CountUp
                  redraw={true}
                  className="countup"
                  start={0}
                  end={1}
                  duration={3}
                />
              </div>
              <p className="aspectstxt">Stereo Camera</p>
            </div>
            <div className="wrapperelec">
              <div>
                <CountUp
                  redraw={true}
                  className="countup"
                  end={2}
                  duration={3}
                />
              </div>
              <p className="aspectstxt">Mono-cameras</p>
            </div>
            <div className="wrapperelec">
              <div>
                <CountUp
                  redraw={true}
                  className="countup"
                  end={3}
                  duration={3}
                />
              </div>
              <p className="aspectstxt">Hydrophone Array</p>
            </div>
            <div className="wrapperelec">
              <div>
                <CountUp
                  redraw={true}
                  className="countup"
                  start={0}
                  end={1}
                  duration={3}
                />
              </div>
              <p className="aspectstxt">IMU</p>
            </div>
            <div className="wrapperelec">
              <div>
                <CountUp
                  redraw={true}
                  className="countup"
                  start={0}
                  end={1}
                  duration={3}
                />
              </div>
              <p className="aspectstxt">Pressure sensor</p>
            </div>
          </div>
        </div>
        <div className="mechanical">
          <h1 style={{ fontWeight: "bold", margin: "30px" }}>SoftWare</h1>
          <div className="mecha">
            <p className="mechatxt">
              The software team formulated the vehicle’s Control and SLAM
              algorithms from scratch, validated their efficiency through
              simulations and implemented them using ROS. The software team
              developed a visual perception pipeline based on deep learning for
              complex objects and conventional machine vision for simpler ones.
              The team developed the hydrophone signal processing code for
              localizing the underwater pinger.
            </p>
            <div className="model"></div>
          </div>
          <h4 style={{ fontWeight: "bold", margin: "30px" }}>Novel Aspects</h4>
          <div className="aspects">
            <div className="wrapper">
              <p className="aspectstxt">Yolo V3 Detection Pipeline</p>
              <img
                className="auv"
                src={require("../../assets/auv/sw/1.jpeg")}
              />
            </div>
            <div className="wrapper">
              <p className="aspectstxt">Novel MPC-PID Trajectory Control</p>
              <img
                className="auv"
                src={require("../../assets/auv/sw/2.jpeg")}
              />
            </div>
            <div className="wrapper">
              <p className="aspectstxt">Efficient EKF SLAM module</p>
              <img
                className="auv"
                src={require("../../assets/auv/sw/3.jpeg")}
              />
            </div>
          </div>

          <h3 style={{ fontWeight: "bold", margin: "30px" }}>Specs</h3>
          <div className="specselec">
            <div className="wrapperelec">
              <div>
                <CountUp
                  redraw={true}
                  className="countup"
                  end={5000}
                  duration={3}
                />
              </div>
              <p className="aspectstxt">Line Of Code</p>
            </div>
            <div className="wrapper">
              <div>
                <CountUp className="countup" end={15} duration={3} />
              </div>
              <p className="aspectstxt">Programmers</p>
            </div>
            <div className="wrapper">
              <div>
                <CountUp className="countup" end={3} duration={3} />
              </div>
              <p className="aspectstxt">Languages</p>
            </div>
          </div>
        </div>
        <DemoFooter />
      </div>
    </>
  );
}

export default LandingPage;
