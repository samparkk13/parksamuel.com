import { VStack, HStack, Image, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ title, time, description, image, path }) => {
  const [isOnBlock, setIsOnBlock] = useState(false);
  const navigate = useNavigate();

  return (
    <HStack
      id="block"
      cursor="pointer"
      onMouseEnter={() => setIsOnBlock(true)}
      onMouseLeave={() => setIsOnBlock(false)}
      onClick={() => navigate(path)}
      marginBottom={6}
      borderRadius={12}
      boxShadow={isOnBlock ? "md" : "sm"} // Apply box shadow on hover
      textColor="black"
      width={"1000px"}   // Adjusted width
      background={isOnBlock ? "linear-gradient(to right, #7CB9E8, #9CD7F1)" : "lightcyan"} // Gradient background on hover
      p={10} // Padding for the whole card
    >

      <Image src={image} boxSize="200px" objectFit='cover' borderRadius={20} /> 
      <VStack align="start" spacing={10} width="100%">
        <Heading fontSize="25px" textAlign="center">{title}</Heading>
        <Heading fontSize="16px" textAlign="center">{time}</Heading> 
        <Text fontSize="14px" textAlign="left">{description}</Text> 
      </VStack>
    </HStack>
  );
};

export default BlogCard;
