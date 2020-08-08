import React from "react";

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

export default function MechaTeam() {
  return (
    <div>
      <Col className="ml-auto mr-auto">
        <h2 className="title">Mechanical Team</h2>
      </Col>
      <Col className="ml-auto mr-auto" md="6">
        <Card inverse className="card-avatar">
          <CardImg
            src={require("assets/img/team/Mechanical/Ibrahim.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Ibrahim Hany</CardTitle>
            <CardSubtitle style={{ color: "#66615b" }}>
              Mechanical Team Leader
            </CardSubtitle>
            <CardText>4th Year Mechatronics Engineering Student</CardText>
          </CardBody>
        </Card>
      </Col>

      <CardGroup>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Mechanical/Mohamed.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Mohamed Raafat</CardTitle>
            <CardSubtitle>Mechanical Team Member</CardSubtitle>
            <CardText>4th Year Mechatronics Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Mechanical/Reem.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Reem Khaled</CardTitle>
            <CardSubtitle>Mechanical Team Member</CardSubtitle>
            <CardText>2nd Year Mechanical Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Mechanical/Noura.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Noura Soliman</CardTitle>
            <CardSubtitle>Mechanical Team Member</CardSubtitle>
            <CardText>2nd Year Mechanical Engineering Student</CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Mechanical/Mohamed2.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "16px" }}>Mohamed Mahmoud</CardTitle>
            <CardSubtitle>Mechanical Team Member</CardSubtitle>
            <CardText>2nd Year Mechanical Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Mechanical/Ahmed.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Ahmed Ashraf</CardTitle>
            <CardSubtitle>Mechanical Team Member</CardSubtitle>
            <CardText>2nd Year Mechanical Engineering Student</CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
