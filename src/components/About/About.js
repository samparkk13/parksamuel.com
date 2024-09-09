import React from 'react';
import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react';
import FallingParticles from './Snow/FallingParticles';
import DisappearingText from './DisappearText';
import ProfPicLarge from './ProfilePics/2024profpic.JPG';
import AboutLinks from './AboutLinks';
import './About.css';  // Import the CSS file

const About = () => {
    return (
        <Box className="about-container">
            <Heading className="about-heading">
                About Me
            </Heading>

            <Flex className="about-flex">
                <Box className="about-text">
                    <Text>
                        Hi! I’m Sam, a third-year studying Computer Science at Cornell University with an intended minor in Artificial Intelligence.
                        <br/><br/>
                        Currently, my interests lie in software engineering, web development, and robotics.
                        <br/><br/>
                        In my free time, I’m always looking for someone to play 18 holes of golf with. 
                        I also love to travel and talk about my faith. 
                        And if you couldn't tell, winter is my favorite season ☃️.
                        <br/><br/>
                        Feel free to reach out anytime for a chat!
                    </Text>
                </Box>

                <Box className="about-image-container">
                    <Image 
                        src={ProfPicLarge}
                        alt="About Me"
                        className="about-image"
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




        // <Box
        //     bg="lightblue" w = "90vw" minH="80vh" overflowY="auto" overflowX="hidden" p={80} d="flex" flexDirection="column" alignItems="center"
        // >
        //     <FallingParticles />
        //     <Flex
        //         maxWidth="900px"
        //         padding="0 20px"
        //         margin="0 auto"
        //         flexDirection={{ base: 'column', md: 'row' }}
        //         alignItems="center"

        //     >
        //         <Box flex={1} textAlign="left"padding="20px">
        //             <Heading as="h1">About Me</Heading>
        //             <br/>
        //             <Text mt={4}>
        //                 Hi! I’m Sam, a third-year studying Computer Science at Cornell University with a minor in Artificial Intelligence.
        //             </Text>
        //             <br/>
        //             <Text mt={4}>
        //                 Currently, my interests lie in software engineering, web development, and robotics.
        //             </Text>
        //             <br/>
        //             <Text mt={4}>
        //                 In my free time, I love to golf 🏌️‍♂️, travel 🌍, and see snow fall ☃️.
        //             </Text>
        //             <br/>
        //             <Text mt={4}>
        //                 Feel free to reach out anytime for a chat!
        //             </Text>
        //             <DisappearingText />
        //         </Box>
        //         <Flex
        //             flex={1}
        //             flexDirection="column"
        //             alignItems="center"
        //             paddingTop={{ base: '20px', md: '0' }}
        //         >
        //             <Box marginBottom="20px" marginLeft= "15%">
        //                 <Image
        //                     src={juneProfPicSmall}
        //                     alt="About Me"
        //                     w={{ base: "250px", sm: "50%" }}  
        //                     minWidth="80%" 
        //                     maxW="50%"
        //                     height="auto"
        //                     borderRadius="200"
        //                 />
        //             </Box>
        //             <Box display="flex" flexDirection="column" alignItems="center" marginTop="10px">
        //                 <AboutLinks />
        //             </Box>
        //         </Flex>
        //     </Flex>
        // </Box>