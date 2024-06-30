import React from 'react';
import { Box, Text, Link, Flex, Button } from '@chakra-ui/react';
import { FaYoutube, FaFilePdf } from 'react-icons/fa';
import { Link as RouterLink } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons';

const CornellEADS = () => {
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
            <Button 
                as={RouterLink} 
                to="/blog" 
                position="absolute" 
                top="20px" 
                left="50px" 
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
            <Text textAlign="center" mb="20px">
                Blog coming soon!
                <br />
                In the meanwhile, you can read this debrief letter!
            </Text>
            <Link
                href="files/DebriefLetter.pdf"
                target="_blank"
                rel="noopener noreferrer"
                fontSize="16px"
                color="blue"
                textDecoration="underline"
                display="flex"
                alignItems="center"
                mb="20px"
            >
                <FaFilePdf style={{ marginRight: '8px' }} />
                Debrief Letter Here
            </Link>
            <br/>
            <Text textAlign="center" mb="20px">
                Or you can watch this video!
            </Text>
            <Link
                href="https://www.youtube.com/watch?v=qM4sSyjf8vM&ab_channel=karis"
                target="_blank"
                rel="noopener noreferrer"
                fontSize="16px"
                color="blue"
                textDecoration="underline"
                display="flex"
                alignItems="center"
            >
                <FaYoutube style={{ marginRight: '8px' }} />
                Video Link Here
            </Link>
        </Box>
    );
};

export default CornellEADS;
