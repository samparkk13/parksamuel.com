import { Heading, Box, Image, Text, Divider, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons';

const KoreaBlog = () => {

    return (
        
        <Box bg="lightblue" maxW="100vw" minH="100vh" overflowY="auto" overflowX = "hidden" p={4} d="flex" flexDirection="column" alignItems="center">
            <Button 
                as={Link}  
                to="/blog" 
                position="absolute" 
                top="20%" 
                left="5%" 
                bg="#7CB9E8" 
                color="black"
                border="2px solid black" 
                borderRadius="50%" 
                p="10px" 
                _hover={{ bg: "#6AA9D8" }}
                _focus={{ boxShadow: "none" }}
                textDecoration="none"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <ArrowBackIcon boxSize="24px" />
            </Button>
            <br />
            <Heading align="center" fontSize="2.5rem" mt="20mm">
                The Motherland
            </Heading>
            <br />
            <br />
            <Heading align="center">
                July 2024
            </Heading>


            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/meAndCuzs.jpg" 
                    alt="me and my cousins"
                    mt="20px" 
                    w={{ base: "350px", sm: "60%" }}  
                    minWidth="260px" 
                    maxW="50%"
                    h="auto" 
                    display="block"
                    mx = "auto"
                    borderRadius= "15px"
                    
                />
                <Text mt="4" fontStyle="italic">me and my cousins</Text>
            </Box>
            <br/>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
            The summer of 2023 was a great couple months in my life. A time back at home and a time to recharge.
            <br />
            <br />
            As well as a time to visit Korea and the many extended family members there.
            <br />
            <br />
            Going to Korea is a once in a blue moon type of opportunity for many reasons. Plane ticket cost, length of flight, time commitment… the list goes on. 
            <br />
            <br />
            I figured that this time of my life would be an ideal time to take a quick trip to Korea. And so I decided to spend a little over two weeks with family and friends there.
            <br />
            <br />
            Throughout this blog, I will be reviewing some of my favorite meals and sharing some memorable places I visited. 
            <br />
            <br />
            REST OF THE BLOG IS TO COME...
            </Box>
        </Box>
    );
};

export default KoreaBlog