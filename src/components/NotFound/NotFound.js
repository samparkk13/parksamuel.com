import { Text } from "@chakra-ui/react";
import { Link as LinkRouter } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <Text
        align="center"
        fontSize="2.5rem"
        fontWeight="medium"
        pt="0vh"
        mb="0"
        pb="0"
      >
        Uh oh!
      </Text>
      <Text
        align="center"
        fontSize="1.5rem"
        fontWeight="medium"
        mt="0"
        pt="0"
      >
        The requested URL was not found on this server.
      </Text>
      <LinkRouter to="/">
        <Text
          align="center"
          fontSize="6rem"
          fontWeight="bold"
          mt="4vh"
        >
          ❄️ 
        </Text>
        <Text
          align="center"
          fontSize="1.5rem"
          fontWeight="bold"
          mt="0"
        >
          Take Me Back
        </Text>
      </LinkRouter>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "lightblue",
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "0px",
    position: "relative",
  },
};

export default NotFound;
