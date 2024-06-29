import { Heading, Button, Box, Container, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Type from "./Type";

const Home = () => {
  return (
    <Box
      bg="lightblue"
      width="100vw"
      height="90vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      paddingTop="0"
      position="relative"
    >
      <Container centerContent>
        <Heading fontSize="50px" mt="30px" p="10px" textAlign="center">
          Samuel Park
        </Heading>
        <Text fontSize="2xl" className="large-font">
          <Type />
        </Text>
        <Box mt="20px" textAlign="center">
          <Button
            as={Link}
            to="/about"
            bg="#7CB9E8"
            color="black"
            border="2px solid black"
            px="20px"
            py="10px"
            borderRadius="30px"
            fontSize="16px"
            cursor="pointer"
            transition="background-color 0.3s ease"
            _hover={{ bg: "#6AA9D8" }}
            textDecoration="none"
          >
            More About Me!
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
