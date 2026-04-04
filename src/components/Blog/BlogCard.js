import { VStack, Image, Heading, Text, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, time, description, image, imagePosition = "center", path }) => {
  const [isOnBlock, setIsOnBlock] = useState(false);
  const navigate = useNavigate();

  return (
    <VStack
      cursor="pointer"
      onMouseEnter={() => setIsOnBlock(true)}
      onMouseLeave={() => setIsOnBlock(false)}
      onClick={() => navigate(path)}
      width="260px"
      height="320px"
      borderRadius={10}
      border="1.5px solid #aaa"
      boxShadow={isOnBlock ? "md" : "sm"}
      background={isOnBlock ? "#26c6da" : "#f8f9fb"}
      overflow="visible"
      spacing={0}
      transition="background 0.2s ease, box-shadow 0.2s ease"
    >
      <Box mx={2} mt={4} width="calc(100% - 16px)" flexShrink={0}>
        <Image
          src={image}
          objectFit="cover"
          objectPosition={imagePosition}
          width="100%"
          height="200px"
          borderRadius={8}
        />
      </Box>
      <Box px={2} pt={2} pb={2} width="100%">
        <Heading fontSize="95%" textAlign="center" mb={1}>{title}</Heading>
        <Heading fontSize="75%" textAlign="center" color="#666" fontWeight="medium" mb={1}>{time}</Heading>
        <Text fontSize="72%" textAlign="center" noOfLines={3} color="#444">{description}</Text>
      </Box>
    </VStack>
  );
};

export default BlogCard;
