import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
import Image from "react-bootstrap/Image";

// core components

function SectionDark() {
  return (
    <>
      <div className="section text-center">
        <Container>
          <h2 className="title">Sponsors</h2>
          <h5>Do you want to be sponser ?</h5>
          <h5>Check our sponsership packages</h5>
          <a
            href="/sponser-rules.pdf"
            download="sponser-rules.pdf"
            target="_blank"
          >
            Click here
          </a>
          <h4 className="title">Platinum</h4>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <Image alt="..." src={require("assets/img/teledyne.jpg")} />
              </a>
            </Col>
          </Row>
          <hr></hr>
          <h4 className="title">Golden</h4>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <Image alt="..." src={require("assets/img/emdad.jpg")} />
              </a>
            </Col>
            <Col className="ml-auto mr-auto" md="6">
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <Image alt="..." src={require("assets/img/asrt.jpg")} />
              </a>
            </Col>
          </Row>
          <hr></hr>
          <h4 className="title">Silver</h4>
          <Row>
            <Col className="ml-auto mr-auto" md="6">
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <Image alt="..." src={require("assets/img/Valeo.jpg")} />
              </a>
            </Col>
            <Col className="ml-auto mr-auto" md="6">
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <Image alt="..." src={require("assets/img/aristo.jpg")} />
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionDark;
