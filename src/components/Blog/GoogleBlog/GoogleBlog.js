import { Heading, Box, Image, Text, Divider } from "@chakra-ui/react";
import BlogLayout from '../BlogLayout';

const GoogleBlog = () => {
    return (
        <BlogLayout>
            <Heading align="center" fontSize="2.5rem" mt="20mm">
                How I became a Software Engineer at Google!
            </Heading>
            <br />
            <br />
            <Heading align="center">
                April 2026
            </Heading>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Google/google.PNG" 
                    alt="google logo"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic"></Text>
            </Box>


            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" lineHeight="2.0">
                I recently went through and passed Google’s interview process for the L3 Software Engineer role. 
                This post is a quick reflection on the timeline, my experience, and the lessons that I learned. 
            </Box>

            </BlogLayout>
    );
}

export default GoogleBlog;
