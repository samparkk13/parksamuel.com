import React from 'react';
import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react';
import FallingParticles from './Snow/FallingParticles';
import DisappearingText from './DisappearText';
import juneProfPicSmall from './ProfilePics/juneProfPicSmall.jpg';
import AboutLinks from './AboutLinks';

const About = () => {
    return (
        <Box bg="lightblue" minW = "100vw" minH="100vh" overflowY="auto" overflowX="hidden" p={4} d="flex" flexDirection="column" alignItems="center">
            <Heading align="center" fontSize="2.5rem" mt="20mm">
                About Me
            </Heading>

            <Flex
                mt={8}
                mx="10%"
                flexDirection={{ base: "column", md: "row" }}
                justifyContent={{ base: "center", md: "space-between" }}
                alignItems="center"
                textAlign={{ base: "center", md: "left" }}
            >
                <Box flex="3" textAlign={{ base: "center", md: "left" }}>
                    <Text>
                        Hi! I’m Sam, a third-year studying Computer Science at Cornell University with a minor in Artificial Intelligence.
                        <br/><br/>
                        Currently, my interests lie in software engineering, web development, and robotics.
                        <br/><br/>
                        In my free time, I love to golf 🏌️‍♂️, travel 🌍, and see snow fall ☃️.
                        <br/><br/>
                        Feel free to reach out anytime for a chat!
                    </Text>
                </Box>

                <Box flex="2" textAlign="center" ml={{ base: 0, md: 8 }} zIndex="1000">
                    <Image 
                        src={juneProfPicSmall}
                        alt="About Me"
                        w={{ base: "250px", sm: "50%" }}  
                        minWidth="70%" 
                        maxW="50%"
                        height="auto"
                        borderRadius="200"
                        
                    />
                    <AboutLinks />
                </Box>
            </Flex>

            <FallingParticles />
            <DisappearingText />
        </Box>



    );
};

export default About;
