import { Heading , Button} from "@chakra-ui/react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Type from "./Type";

const Home = () => {
  return (
      <div style={styles.container}>
        <Container>
          <Heading style={styles.heading}>
            Samuel Park
          </Heading>

          <div className="large-font">
             <Type />
          </div>

          <div style={styles.buttonContainer}>
            <Button as={Link} to="/about" style={styles.button}>
              More About Me!
            </Button>
          </div>
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
      alignItems: "center",
      paddingTop: "0px",
      position: "relative",
  },
  heading: {
    fontSize: "50px",
    marginTop: "30px",
    padding: "10px",
    textAlign: "center",
  },
  buttonContainer: {
    marginTop: '20px',
    textAlign: 'center',
  },
  button: {
    backgroundColor: "#7CB9E8",
    color: "black",
    border: "2px solid black", // added black outline to buttons
    padding: "10px 20px",
    borderRadius: "30px",
    fontSize: "16px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textDecoration: 'none', // added to remove underline in text
  },
}

export default Home;