import { Heading, VStack, Box } from "@chakra-ui/react";
import Data from "./Data.json";
import BlogBlock from "./BlogCard";

const Blog = () => {
    return ( 
        <Box bg="lightblue" w="100vw" minH="100vh" display="flex" justifyContent="center" alignItems="center" pt="50px">
            <VStack mt={10} minH="100vh">
                <Heading mb={10} fontSize="40px">BLOGS</Heading>
                {Data.map((data, index) => (
                    <BlogBlock
                        key={index}
                        path={data.path}
                        title={data.title}
                        time={data.time}
                        description={data.description}
                        image={data.image}
                    />
                ))}
            </VStack>
        </Box>
    );
}

export default Blog;
