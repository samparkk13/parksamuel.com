import React from 'react';
import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react';
import FallingParticles from './Snow/FallingParticles';
import DisappearingText from './DisappearText';
import juneProfPicSmall from './ProfilePics/juneProfPicSmall.jpg';
import juneProfPic2 from './ProfilePics/juneProfPic2.jpg';
import AboutLinks from './AboutLinks';

const About = () => {
    return (
        <Box bg="lightblue" minW = "100vw" minH="100vh" overflowY="auto" p={4} d="flex" flexDirection="column" alignItems="center">
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
                <Box flex="1" textAlign={{ base: "center", md: "left" }}>
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

                <Box flex="1" textAlign="center" ml={{ base: 0, md: 8 }}>
                    <Image 
                        src={juneProfPicSmall}
                        alt="Profile Pic"
                        mt="20px" 
                        w={{ base: "80%", md: "100%" }}  
                        maxWidth="250px" 
                        borderRadius="200px"
                        mx="auto"
                        mb={4}
                    />
                    <AboutLinks />
                </Box>
            </Flex>

            <FallingParticles />
            <DisappearingText />
        </Box>

    // return (
    //     <Box
    //         bg="lightblue"
    //         width="100vw"
    //         height="100vh"
    //         display="flex"
    //         justifyContent="center"
    //         alignItems="center"
    //         paddingTop="0px"
    //         position="relative"
    //         overflow="auto"
    //     >
    //         <FallingParticles />
    //         <Flex
    //             maxWidth="800px"
    //             padding="0 20px"
    //             margin="0 auto"
    //             flexDirection={{ base: 'column', md: 'row' }}
    //             alignItems="center"
    //             zIndex={1}

    //         >
    //             <Box flex={1} textAlign="left" zIndex={1} padding="20px">
    //                 <Heading as="h1">About Me</Heading>
    //                 <br/>
    //                 <Text mt={4}>
    //                     Hi! I’m Sam, a third-year studying Computer Science at Cornell University with a minor in Artificial Intelligence.
    //                 </Text>
    //                 <br/>
    //                 <Text mt={4}>
    //                     Currently, my interests lie in software engineering, web development, and robotics.
    //                 </Text>
    //                 <br/>
    //                 <Text mt={4}>
    //                     In my free time, I love to golf 🏌️‍♂️, travel 🌍, and see snow fall ☃️.
    //                 </Text>
    //                 <br/>
    //                 <Text mt={4}>
    //                     Feel free to reach out anytime for a chat!
    //                 </Text>
    //                 <DisappearingText />
    //             </Box>
    //             <Flex
    //                 flex={1}
    //                 flexDirection="column"
    //                 alignItems="center"
    //                 paddingTop={{ base: '20px', md: '0' }}
    //                 zIndex={1}
    //             >
    //                 <Box marginBottom="20px" marginLeft= "16%">
    //                     <Image
    //                         src={juneProfPicSmall}
    //                         alt="About Me"
    //                         w={{ base: "250px", sm: "50%" }}  
    //                         minWidth="80%" 
    //                         maxW="50%"
    //                         height="auto"
    //                         borderRadius="200"
    //                     />
    //                 </Box>
    //                 <Box display="flex" flexDirection="column" alignItems="center" marginTop="10px">
    //                     <AboutLinks />
    //                 </Box>
    //             </Flex>
    //         </Flex>
    //     </Box>
    );
};

export default About;
