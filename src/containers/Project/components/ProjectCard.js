import React from "react";
// import { Card } from "react-bootstrap";
import { Card, Image } from "semantic-ui-react";

export default function ProjectCard({ img, title, shortText }) {
  return (
    <Card className="m-2 b-2" style={{ width: "18rem" }}>
      <Image variant="top" src={img} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{shortText}</Card.Description>
      </Card.Content>
    </Card>
  );
}
