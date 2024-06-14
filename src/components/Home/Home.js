import { Heading } from "@chakra-ui/react";
import { Row, Col, Container } from "react-bootstrap";
import Type from "./Type";

export default function Home() {
    return (
      <div style={styles.container}>
        <Container >
          <Heading my="30px" p="10px" textAlign="center">
            Welcome to Sam's Developing Website!
          </Heading>

          <Row>
            <Col>
            <div className="large-font">
              <Type />
            </div>
            </Col>
          </Row>
          
        </Container>
      </div>
    );
}

const styles = {
  container: {
      backgroundColor: "lightblue",
      width: "100vw",
      height: "90vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center", // Align items vertically
      paddingTop: '50px', // Add some padding at the top
      position: "relative",
  },
}
