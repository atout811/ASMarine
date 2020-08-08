import React from "react";

// core components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function TeamsSection() {
  return (
    <>
      <div
        className="section section-dark text-center"
        style={{ backgroundColor: "#0a63b6" }}
      >
        <Container>
          <Col className="ml-auto mr-auto">
            <h2 className="title">Robosub</h2>
          </Col>
          <Col>
            <Button
              href="https://robonation.org/programs/robosub/"
              size="lg"
              target="_blank"
              className=""
              color="info"
            >
              <i className="fa fa-heart" />
              AUVSI and ONR’s 23 International RoboSub Competition
            </Button>
            <h6 className="title">
              To Learn, To Share, To Innovate, To Inspire
            </h6>
          </Col>

          <hr></hr>

          <Col md="3">
            <h3 className="title" style={{ display: "flex" }}>
              What
            </h3>
          </Col>
          <div className="mt-3"></div>
          <p className="title" style={{ textAlign: "left" }}>
            RoboSub is a thrilling competition characterized by a chilling
            atmosphere and charged with a competitive spirit. Since its start
            back in 1998, RoboSub has attracted the top-talent young engineers
            from all over the globe to compete and show their skills in
            Autonomous Underwater Vehicles (AUV) design, fabrication and
            operation. The competition is comprised of multiple evaluation
            stages starting from static judging and technical design reviews all
            the way up to product demonstration and underwater mission
            execution. Missions include a set of challenging tasks like
            penetrating underwater gates, following some pipelines and path
            markers, detecting distinctive images underwater, mapping buoys,
            shooting fancy-looking torpedoes, dropping objects into special
            bins, locating acoustic beacons, and manipulating objects, Tasks
            that mainly require a very robust control system as well as sound
            perception of the environment using special sensors and mapping
            algorithms.
          </p>
          <Row>
            <Col xs="6" sm="3">
              <h3 className="title">How</h3>
              <p className="title" style={{ textAlign: "left" }}>
                Through a process of systematic design and thorough testing, our
                engineers built a vehicle equipped with three cameras, an
                inertial measurement unit, a mapping sonar, a pressure sensor
                and an array of hydrophones. Our engineers also developed an
                entire system architecture composed of carefully designed
                mapping algorithms, detection, depth estimation and robust
                control modules.
              </p>
            </Col>
            <Col xs="6" sm="3">
              <h3 className="title">When</h3>
              <p className="title">August 3rd, 2020</p>
            </Col>
            <Col xs="6" sm="3">
              <h3 className="title">Where</h3>
              <p className="title">SSC Pacific TRANSDEC San Diego, CA.</p>
            </Col>
            <Col xs="6" sm="3">
              <h3 className="title">Ranking</h3>
              <p className="title">
                <span style={{ marginRight: "5px" }}>&#9632;</span> 2019 - 40th
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TeamsSection;
