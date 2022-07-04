import React from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import "react-vertical-timeline-component/style.min.css";
import Timeline from "./components/Timeline";

export default function Home() {
  return (
    <>
      <Container>
        <h3>Mincheol Cha</h3>I am an undergraduate student at Seoul National
        University, studying ECE.
        <br/><br/><br/><br/><br/>
      </Container>
      <Container>
        <h4>Experience</h4>
        <Timeline />
        <br/><br/><br/><br/><br/>
      </Container>
      <Container>
        <h4>Featured publications</h4>
      </Container>
      <Footer></Footer>
    </>
  );
}
