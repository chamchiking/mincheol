import React from "react";
import { Container, Row } from "react-bootstrap";
import { Card } from "semantic-ui-react";
import Footer from "../../components/Footer";
import ProjectCard from "./components/ProjectCard";
import {project_list} from "./contents/project";

export default function Project() {
  return (
    <>
      <Container className="my-5">
        <h1>Project!!</h1>
        <br />
        <br />
        <br />
        <Card.Group centered>
          {project_list.map((project)=> (
            <ProjectCard
              img={project.img}
              title={project.title}
              shortText={project.shortText}
            />
          ))}
        </Card.Group>
      </Container>
      <Footer></Footer>
    </>
  );
}
