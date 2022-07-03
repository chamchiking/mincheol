import React from "react"
import { Card } from "react-bootstrap";

export default function ProjectCard({img, title, shortText}) {
  return (
    <>
      <Card className="m-2 b-2" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {shortText}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
