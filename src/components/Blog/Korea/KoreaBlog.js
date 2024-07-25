import { Heading, Box, Image, Text, Divider, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons';
import './KoreaBlog.css';

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
                <Text mt="4" fontStyle="italic">me with my cousins</Text>
            </Box>
            <br/>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                I was born and raised in the United States. 
                <br/>
                <br/>
                I’ve lived my entire life in Long Island, NY.
                <br/>
                <br/>
                When people ask me where I am from, most of the time my answer is “New York”. 
                <br/>
                <br/>
                But my appearance and the household culture that I grew up in does not reflect a typical New Yorker.
                <br/>
                <br/>
                I may have been born in New York, but my ancestral roots trace back to South Korea. 
                <br/>
                <br/>
                Traveling to Korea is a once in a blue moon opportunity for many reasons. Plane ticket cost, the prior planning required, plane ticket availability… the list goes on. 
                <br/>
                <br/>
                Because of the aforementioned reasons, I have not been to Korea in many years. 
                <br/>
                <br/>
                When “cheap” plane tickets to Korea suddenly became available due to a new airline, the opportunity to visit presented itself.
                <br/>
                <br/>
                I figured that this time of my life would be an ideal time to take a quick trip to the motherland. And so I decided to spend a little over two weeks with family and friends there.
                <br/>
                <br/>
                Throughout this blog, I will be reviewing some of my favorite meals and sharing some memorable places I visited. 
                <br/>
                <br/>

                

            </Box>
           
        </Box>
    );
};

export default KoreaBlog