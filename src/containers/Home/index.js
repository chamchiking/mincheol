import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Container>
        <h3>Mincheol Cha</h3>

        I am an undergraduate student at Seoul National University, studying ECE.
      </Container>
      <Container>
        <h4>Research area</h4>

      </Container>
      <Container>
        <h4>Featured publications</h4>

      </Container>
      <Footer></Footer>
    </>
  );
}
