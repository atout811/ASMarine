import React from "react";
import "./teams.css";

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

export default function SWTeam() {
  return (
    <div className="software">
      <Col className="ml-auto mr-auto">
        <h2 className="title">Software Team</h2>
      </Col>
      <Col className="ml-auto mr-auto" md="6">
        <Card inverse className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/gabry.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Ahmed Gabry</CardTitle>
            <CardSubtitle style={{ color: "#66615b" }}>
              Software Team Leader
            </CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
      </Col>

      <CardGroup>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/Yasmine.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Yasmine Aly</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/AhmedNasr.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Ahmed Nasr</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/SalmaAlaa.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Salma Alaa</CardTitle>
            <CardSubtitle>SoftwareTeam Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/AbdelrahmanBishr.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>
              Abdelrahman Bishr
            </CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/SalmaDiaa.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Salma Diaa</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/HabibaMohamed.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Habiba Mahmoud</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/SarahWalid.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Sarah Walid</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/YasminElnaggar.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Yasmin Elnagar</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/AbdelrahmanWael.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Abdelrahman Wael</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
      </CardGroup>
      <CardGroup>
        <Card className="card-avatar">
          <CardImg
            src={require("assets/img/team/Software/AhmedKhaled.webp")}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Ahmed Khaled</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg src={require("assets/img/logo.jpg")} alt="Card image cap" />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Lamees Kamal</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
        <Card className="card-avatar">
          <CardImg src={require("assets/img/logo.jpg")} alt="Card image cap" />
          <CardBody>
            <CardTitle style={{ fontSize: "20px" }}>Yara Yasser</CardTitle>
            <CardSubtitle>Software Team Member</CardSubtitle>
            <CardText>4th Year Software Engineering Student</CardText>
          </CardBody>
        </Card>
      </CardGroup>
    </div>
  );
}
