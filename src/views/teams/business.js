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

export default function BusinessTeam() {
  return (
    <div>
      <Col className="ml-auto mr-auto">
        <h2 className="title">Business Team</h2>
      </Col>
      <Col className="ml-auto mr-auto" md="6">
        <Card inverse className="card-avatar">
          <CardImg
            src={require("assets/img/team/Business/Amr.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Amr Mohamed</CardTitle>
            <CardSubtitle style={{ color: "#66615b" }}>
              Business Team Leader
            </CardSubtitle>
            <CardText>4th Year Mechatronics Engineering Student</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col className="ml-auto mr-auto" md="12">
        <CardGroup>
          <Card className="card-avatar">
            <CardImg
              src={require("assets/img/team/Business/sarah.webp")}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle style={{ fontSize: "20px" }}>Sarah Walid</CardTitle>
              <CardSubtitle>IT Member</CardSubtitle>
              <CardText>4th Year Mechatronics Engineering Student</CardText>
            </CardBody>
          </Card>
          <Card className="card-avatar">
            <CardImg
              src={require("assets/img/team/Business/Muhammed.webp")}
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle style={{ fontSize: "20px" }}>
                Muhammed Ghazaly
              </CardTitle>
              <CardSubtitle>Media and Marketing Member</CardSubtitle>
              <CardText>2nd Year Mechatronics Engineering Student</CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </Col>
    </div>
  );
}
