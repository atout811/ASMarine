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

export default function ElecTeam() {
  return (
    <div>
      <Col className="ml-auto mr-auto">
        <h2 className="title">Electrical Team</h2>
      </Col>
      <Col className="ml-auto mr-auto" md="6">
        <Card inverse className="card-avatar">
          <CardImg
            src={require("assets/img/team/Electrical/Zeyad.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Zeyad Mohamed</CardTitle>
            <CardSubtitle style={{ color: "#66615b" }}>
              Electrical Team Leader
            </CardSubtitle>
            <CardText>4th Year Mechatronics Engineering Student</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="ml-auto mr-auto" md="12">
        <CardGroup>
          <Card className="card-avatar">
            <CardImg
              src={require("assets/img/team/Electrical/Adel.webp")}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle style={{ fontSize: "20px" }}>Adel Hamed</CardTitle>
              <CardSubtitle>Electrical Team Member</CardSubtitle>
              <CardText>4th Year Mechatronics Engineering Student</CardText>
            </CardBody>
          </Card>
          <Card className="card-avatar">
            <CardImg
              src={require("assets/img/team/Electrical/Zeyad2.webp")}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle style={{ fontSize: "20px" }}>Zeyad Hossam</CardTitle>
              <CardSubtitle>Electrical Team Member</CardSubtitle>
              <CardText>3rd Year Communications Engineering Student</CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </div>
  );
}
