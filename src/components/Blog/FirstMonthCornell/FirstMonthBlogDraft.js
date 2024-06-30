import { Box, Text } from "@chakra-ui/react";

const FirstMonthBlog = () => {
    return (
        <Box
            bg="lightblue"
            width="100vw"
            height="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            position="relative"
        >
            <Text textAlign="center" mb="20px">
                Currently Writing...
            </Text>
        </Box>
    );
};

export default FirstMonthBlog;

