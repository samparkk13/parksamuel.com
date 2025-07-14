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
      marginBottom={'40px'}
      borderRadius={12}
      boxShadow={isOnBlock ? "md" : "sm"} // Apply box shadow on hover
      textColor="black"
      width={"75%"}   // Adjusted width
      background={isOnBlock ? "linear-gradient(to right, #7CB9E8, #9CD7F1)" : "lightcyan"} // Gradient background on hover
      p={15} // Padding for the whole card
    >
    <VStack>
      <HStack>  
      <Image 
        src={image} 
        objectFit='cover' 
        borderRadius={20}
        sx={{
          boxSize: ['40%', '40%', '20%'], 
        }} 
      />
          <VStack marginTop={5} marginBottom={5} marginRight={5} marginLeft={5}>
            <Heading fontSize="135%" textAlign="center">{title}</Heading>
            <Heading fontSize="90%" textAlign="center">{time}</Heading> 
            <Text fontSize="80%" textAlign="left">{description}</Text> 
          </VStack>
        </HStack>
      </VStack>
    </HStack>
  );
};

export default BlogCard;
