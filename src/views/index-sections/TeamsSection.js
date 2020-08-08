import React from "react";

// core components
import {
  Button,
  UncontrolledCollapse,
  Card,
  CardGroup,
  CardText,
  CardImg,
  CardSubtitle,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";
import "./team.css";

import Dialog from "@material-ui/core/Dialog";
import { Link } from "react-router-dom";
import SWTeam from "../teams/software";
import BusinessTeam from "../teams/business";
import ElecTeam from "../teams/electrical";
import MechaTeam from "../teams/mechanical";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function TeamsSection() {
  const [sw, setSW] = React.useState(false);
  const [mecha, setMecha] = React.useState(false);
  const [elec, setElec] = React.useState(false);
  const [bus, setBus] = React.useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleSW = () => {
    setSW(true);
  };

  const handleMecha = () => {
    setMecha(true);
  };

  const handleElec = () => {
    setElec(true);
  };

  const handleBus = () => {
    setBus(true);
  };

  const handleClose = () => {
    setSW(false);
    setMecha(false);
    setElec(false);
    setBus(false);
  };
  return (
    <>
      <div
        className="section section-dark text-center"
        style={{ backgroundColor: "#0a63b6" }}
      >
        <Container>
          <Col className="ml-auto mr-auto">
            <h2 className="title">Teams</h2>
          </Col>

          <Row style={{ padding: 0, margin: 0 }}>
            <Col className="ml-auto mr-auto" md="3">
              <Card
                className="card-profile card-plain"
                style={{ padding: 0, margin: 0 }}
              >
                <div className="">
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img
                      alt="..."
                      src={require("assets/img/faces/samer.jpg")}
                    />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author" style={{ padding: 0, margin: 0 }}>
                      <CardTitle tag="h4">Samer Mansour</CardTitle>
                      <h6 className="card-category">Team Captain</h6>
                      <h6 className="card-category">
                        Mechatronics Master Student
                      </h6>
                    </div>
                  </a>
                  <p
                    className="card-description text-center"
                    style={{ padding: 0, margin: 0 }}
                  >
                    "If your actions inspire others to dream more, learn more,
                    do more and become more, you are a leader."
                    <br></br> -John Quincy Adams
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
          <Row>
            <Col md="3">
              <Card
                className="card-profile card-plain"
                style={{ padding: 0, margin: 0 }}
              >
                <div>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img alt="..." src={require("assets/img/software.jpg")} />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Software Team</CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Responsible for designing and testing the vehicle software
                    architecture which can be broken down into perception
                    modules, SLAM modules, control modules and vehicle
                    simulations{" "}
                  </p>
                  <Col md="12">
                    <Button
                      onClick={handleSW}
                      className=" btn-neutral ml-1"
                      color="link"
                    >
                      Learn More
                    </Button>
                  </Col>
                  <Dialog
                    style={{ justifyContent: "center" }}
                    open={sw}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <SWTeam />
                  </Dialog>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card
                className="card-profile card-plain"
                style={{ padding: 0, margin: 0 }}
              >
                <div>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img alt="..." src={require("assets/img/electrical.jpg")} />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Electrical Team</CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Responsible for electrical & electronics aspects of the
                    vehicle like power management, safety, PCB design,
                    fabrication, wiring and electric kit design
                  </p>
                  <Col md="12">
                    <Button
                      onClick={handleElec}
                      className=" btn-neutral ml-1"
                      color="link"
                    >
                      Learn More
                    </Button>
                  </Col>
                  <Dialog
                    open={elec}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <ElecTeam />
                  </Dialog>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
            <Col md="3">
              <Card
                className="card-profile card-plain"
                style={{ padding: 0, margin: 0 }}
              >
                <div>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img alt="..." src={require("assets/img/mechanical.jpg")} />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Mechanical Team</CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Responsible for vehicle frame design, electronics sealing,
                    vehicle manufacturing, assembly and fluid dynamic analysis
                  </p>
                  <Col md="12">
                    <Button
                      onClick={handleMecha}
                      className=" btn-neutral ml-1"
                      color="link"
                    >
                      Learn More
                    </Button>
                  </Col>
                  <Dialog
                    open={mecha}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <MechaTeam />
                  </Dialog>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>

            <Col md="3">
              <Card
                className="card-profile card-plain"
                style={{ padding: 0, margin: 0 }}
              >
                <div>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img alt="..." src={require("assets/img/business.jpg")} />
                  </a>
                </div>
                <CardBody>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <div className="author">
                      <CardTitle tag="h4">Business Team</CardTitle>
                    </div>
                  </a>
                  <p className="card-description text-center">
                    Responsible for the managerial aspects of the team like
                    finances, sponsors, media, IT and supply chain activities
                  </p>
                  <Col md="12">
                    <Button
                      onClick={handleBus}
                      className=" btn-neutral ml-1"
                      color="link"
                    >
                      Learn More
                    </Button>
                  </Col>
                  <Dialog
                    open={bus}
                    onClose={handleClose}
                    aria-labelledby="responsive-dialog-title"
                  >
                    <BusinessTeam />
                  </Dialog>
                </CardBody>
                <CardFooter className="text-center"></CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default TeamsSection;
