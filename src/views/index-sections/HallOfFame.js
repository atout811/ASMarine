import React from "react";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardFooter,
  CardText,
} from "reactstrap";

// core components

function HallOfFame(props) {
  return (
    <>
      <div
        className="section section-dark text-center"
        style={{ backgroundColor: "#0a63b6" }}
      >
        <Container>
          <h2 className="title">Hall Of Fame</h2>
          <Row>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/Youssef.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Yousef El Mansy</CardTitle>
                      <h6 className="card-category">
                        Former Software Team Leader
                      </h6>
                    </div>
                  </a>
                  <p
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    One of the hardest aspects of the project is the integration
                    of several domains especially the integration of Software
                    and Hardware and getting both to work smoothly, overall i
                    believe it is such interdisciplinary projects that impose a
                    real challenge to us as engineers and i was more than happy
                    to work on this project.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="https://www.linkedin.com/in/yousefmansy/"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/yousefmansy/",
                        "_blank"
                      )
                    }
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img alt="..." src={require("assets/img/faces/Amr.jpg")} />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Amr Abdelghany</CardTitle>
                      <h6 className="card-category">Former Software Member</h6>
                    </div>
                  </a>
                  <p
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    It was the best experience of my life. Meeting the teams,
                    organizers and sponsors was amazing. I will definitely come
                    back.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/yousefmansy/",
                        "_blank"
                      )
                    }
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/Perihane.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Perihane Youssef</CardTitle>
                      <h6 className="card-category">Former Software Member</h6>
                    </div>
                  </a>
                  <p
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    I was really passionate about machine vision and
                    deeplearning, i believe i acquired awesome knowledge in the
                    field and i'm still advising the team on the topic, plus
                    RoboSub's competitive atmosphere is really awesome and it
                    was a pleasure being part of such community
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>

            <Col md="3">
              <Card className="card-profile card-plain">
                <div className="card-avatar">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/Pance3.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Pancé Ibrahim</CardTitle>
                      <h6 className="card-category">
                        Former Project Manager/Business Team Leader
                      </h6>
                    </div>
                  </a>
                  <p
                    style={{
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                    }}
                  >
                    Managing a newly founded team is rather a challenging
                    experience, but with hard-work, discipline and team work;
                    success was the outcome.
                  </p>
                </CardBody>
                <CardFooter className="text-center">
                  <Button
                    className="btn-just-icon btn-neutral ml-1"
                    color="link"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default HallOfFame;
