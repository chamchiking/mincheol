import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <Container>
        <hr className="my-5"></hr>
        <Row>
          <Col sm={4} md={4}>
            <p>
              Mincheol's theme.
              <br />
              Built with
              <a href="https://reactjs.org"> React</a>
              <br />
              <br />
              Up-to-date as of July3,2022
            </p>
          </Col>
          <Col sm={8} md={8} className="relative">
            <div className="relative">
              <div className="absolute left-2 top-0">
                <FontAwesomeIcon icon={faGithub} /> Github
              </div>
            </div>
            <br />
            <div className="relative">
              <div className="absolute left-2 top-0">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </>
  );
}
