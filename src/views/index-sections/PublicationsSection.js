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
import { Table } from "reactstrap";

function TeamsSection() {
  return (
    <>
      <div className="section text-center">
        <Container>
          <Col className="ml-auto mr-auto">
            <h2 className="title">Publications</h2>
          </Col>
          <Col>
            <h6>
              ASmarine takes pride in its contribution to Academia and the
              research community through<br></br> its IEEE and journal
              publications.
            </h6>
            <br></br>
          </Col>
          <Table style={{ fontSize: "16px" }}>
            <tbody>
              <tr>
                <th scope="row">2019</th>
                <td>
                  <a href="https://92e196ad-10b7-42f2-a6b3-357b979c3744.filesusr.com/ugd/1a9ed7_02c4545933ca48f1b7454358ed823c56.pdf">
                    Technical Journal Paper
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">2020</th>
                <td>
                  <a href="https://ieeexplore.ieee.org/abstract/document/9047757">
                    Dynamic Model and Control of an Autonomous Underwater
                    Vehicle (ITCE'20 Conference,Aswan, Egypt)
                  </a>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      </div>
    </>
  );
}

export default TeamsSection;
