import React, { useState, useEffect } from "react";
import { CardGroup, Container, Row } from "react-bootstrap";
import Footer from "../../components/Footer";
import ProjectCard from "./components/ProjectCard";

export default function Project() {
  return (
    <>
      <Container className="my-5">
        Project!!
        <CardGroup>
          <ProjectCard
            title={"제목"}
            shortText={"설명"}
          />
          <ProjectCard
            title={"제목"}
            shortText={"설명"}
          />
          <ProjectCard
            title={"제목"}
            shortText={"설명"}
          />
        </CardGroup>
      </Container>
      <Footer></Footer>
    </>
  );
}
