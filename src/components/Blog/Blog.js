import { Heading, Box } from "@chakra-ui/react";
import Data from "./Data.json";
import BlogBlock from "./BlogCard";

const Blog = () => {
    return (
        <Box bg="rgb(212, 213, 218)" w="100vw" minH="100vh" display="flex" flexDirection="column" alignItems="center" pt="80px" pb="80px">
            <Heading mb={10} fontSize="40px">BLOGS</Heading>
            <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                gap="30px"
                maxW="900px"
                w="100%"
                px="20px"
            >
                {Data.map((data, index) => (
                    <BlogBlock
                        key={index}
                        path={data.path}
                        title={data.title}
                        time={data.time}
                        description={data.description}
                        image={data.image}
                        imagePosition={data.imagePosition}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default Blog;
