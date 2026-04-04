import { Box } from "@chakra-ui/react";

const BlogLayout = ({ children }) => {
    return (
        <Box bg="rgb(212, 213, 218)" maxW="100vw" minH="100vh" overflowY="auto" overflowX="hidden" p={4} d="flex" flexDirection="column" alignItems="center" fontFamily="'Fira Mono', monospace" fontSize="0.85em">
            {children}
        </Box>
    );
};

export default BlogLayout;
