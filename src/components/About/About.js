import React from 'react';
import { Box, Image, Text, Heading, Flex } from '@chakra-ui/react';
import FallingParticles from './Snow/FallingParticles';
import DisappearingText from './DisappearText';
import juneProfPicSmall from './ProfilePics/juneProfPicSmall.jpg';
import AboutLinks from './AboutLinks';

const About = () => {
    return (
        <Box
            bg="lightblue"
            width="100vw"
            height="90vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            paddingTop="50px"
            position="relative"
            overflowY="auto"
        >
            <FallingParticles />
            <Flex
                maxWidth="800px"
                padding="0 20px"
                margin="0 auto"
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems="center"
                zIndex={1}
            >
                <Box flex={1} textAlign="left" zIndex={1} padding="20px">
                    <Heading as="h1">About Me</Heading>
                    <br/>
                    <Text mt={4}>
                        Hi! I’m Samuel, a third-year studying Computer Science at Cornell University with a minor in Artificial Intelligence.
                    </Text>
                    <br/>
                    <Text mt={4}>
                        Currently, my interests lie in software engineering, web development, and robotics.
                    </Text>
                    <br/>
                    <Text mt={4}>
                        In my free time, I love to golf 🏌️‍♂️, travel 🌍, and see snow fall ☃️.
                    </Text>
                    <br/>
                    <Text mt={4}>
                        Feel free to reach out anytime for a chat!
                    </Text>
                    <DisappearingText />
                </Box>
                <Flex
                    flex={1}
                    flexDirection="column"
                    alignItems="center"
                    paddingTop={{ base: '20px', md: '0' }}
                    zIndex={1}
                >
                    <Box marginBottom="20px" marginLeft={{ base: '0', md: '10px' }}>
                        <Image
                            src={juneProfPicSmall}
                            alt="About Me"
                            width="250px"
                            height="auto"
                            borderRadius="200"
                        />
                    </Box>
                    <Box display="flex" flexDirection="column" alignItems="center" marginTop="10px">
                        <AboutLinks />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
};

export default About;
