import React from "react";
import { Container, Row } from "react-bootstrap";
import { Item } from "semantic-ui-react";
import Footer from "../../components/Footer";
import BlogItem from "./components/BlogItem";
import { blog_list } from "./contents/blog";

export default function Blog() {
  return (
    <>
      <Container>
        <h1>Blog!!!!</h1>
        <br />
        <br />
        <br />
        <br />
        <Item.Group>
          {blog_list.map((blog)=> (
            <BlogItem
              img={blog.img}
              header={blog.header}
              description={blog.description}
            />
          ))}
        </Item.Group>
      </Container>
      <Footer></Footer>
    </>
  );
}
