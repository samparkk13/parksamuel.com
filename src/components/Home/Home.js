import { Heading, Button, Box, Container, Text, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Type from "./Type";
import './Home.css';  // Import the CSS file

const Home = () => {
  return (
    <Flex className="home-container">
      <Container centerContent className="home-content">
        <Heading className="home-heading">Samuel Park</Heading>
        <Text className="home-text">
          <Type />
        </Text>
        <Box mt="40px" textAlign="center">
          <Button
            as={Link}
            to="/about"
            className="home-button"
            textDecoration="none"
          >
            More About Me!
          </Button>
        </Box>
      </Container>
    </Flex>
  );
};

export default Home;
