import React from "react";
import Footer from "../../components/Footer";
import "react-vertical-timeline-component/style.min.css";
import Timeline from "./components/Timeline";
import AnimatedText from "react-animated-text-content";
import Container from "../../components/Container";
import { Image} from "semantic-ui-react";
import { Box } from '@chakra-ui/react'
import VoxelDog from "../../components/voxel-dog";

export default function Home() {
  const src = "mincheol.png";
  return (
    <>
      <br />
      <br />
      <Container>
        <VoxelDog />
        <br/><br/><br/><br/>
        <Box borderRadius="lg" bg="greenyellow" p={3} align="center">
          Hello I'm a Full Stack Developer
        </Box>
        <AnimatedText
          type="chars"
          animationType="bounce"
          interval={0.06}
          duration={0.8}
          tag="h3"
          includeWhiteSpaces
          rootMargin="20%"
        >
          Mincheol Cha
        </AnimatedText>
        <Image src={src} size="small" floated="left" rounded />
        <p>
          I am an undergraduate student at Seoul National University, studying
          ECE.
        </p>
      </Container>
      <Container>
        <h4>Featured publications</h4>
      </Container>
      <Container>
        <h4>Experience</h4>
        <Timeline />
      </Container>
      <Footer></Footer>
    </>
  );
}
