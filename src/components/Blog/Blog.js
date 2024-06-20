import { Heading, VStack } from "@chakra-ui/react";
import Data from "./Data.json";
import BlogBlock from "./BlogCard";

const Blog = () => {
    return ( 
        <div style={styles.container}>
            <VStack marginTop={10} minHeight="100vh">
                <Heading marginBottom={10} fontSize = '40px'>BLOGS</Heading>
                {Data.map((data) => (
                    <BlogBlock
                        path={data.path}
                        title={data.title}
                        time={data.time}
                        description={data.description}
                        image={data.image}
                    />
                ))}
            </VStack>
        </div>
     );
     
}

const styles = {
    container: {
        backgroundColor: "lightblue",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Align items vertically
        paddingTop: '50px', // Add some padding at the top
        position: "relative",
    },
}
 
export default Blog;