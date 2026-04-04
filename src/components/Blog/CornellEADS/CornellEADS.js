import React from 'react';
import { Box, Text, Link, Flex } from '@chakra-ui/react';
import { FaYoutube, FaFilePdf } from 'react-icons/fa';
import BlogLayout from '../BlogLayout';

const CornellEADS = () => {
    return (
        <BlogLayout>
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
        </BlogLayout>
    );
};

export default CornellEADS;
