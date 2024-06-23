import { Heading, Box, Image, Text } from "@chakra-ui/react";

const FirstMonthBlog = () => {
    return (
        <Box bg="lightblue" w="100vw" minH="100vh" overflowY="auto" p={4} d="flex" flexDirection="column" alignItems="center">
            <Heading align="center" fontSize="2.5rem" mt="20mm">
                Recapping my First Memories at Cornell
            </Heading>
            <br />
            <Heading align="center">
                June 2024
            </Heading>
            <Box textAlign="left" mt="60px" mx="200px" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                Now that I am halfway through college, I wanted to take a moment to look back on my past 2 years. Specifically the first month of the past 2 years. It felt like a journey, and it's hard to believe that I still have 2 years left. But at the same time, it did go by so fast.
                <br />
                <br /> Cornell became like my second home, or even my first home. When I started to get homesick, it was when I was back home with my family…
                <br />
                <br /> But I wanted to take a moment and relive the start of my freshman year, perhaps in the form of this blog.
                <br />
                <br /> My story begins on my move-in date: Wednesday, August 17th, 2022.
            </Box>
            <Image 
                src="images/BlogImages/FirstMonthBlog/Movein.jpeg" 
                alt="Cornell Memories"  
                mt="20px" 
                w="600px"  
                h="auto" 
                display="block"
                mx = "auto"
            />
            <Box textAlign="left" mt="20px" mx="200px" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                After saying my final goodbyes to my family, my journey by myself began. I remember vividly walking my first steps as a student on campus, looking for some new or familiar faces, some other Korean students, but mostly with my roommate and long-time childhood friend, Shreyas.
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mt="20px" w="100%">
                <Box mx="80px" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/TallShreyas.jpg" 
                        alt="Cornell Memories"  
                        w="320px"  
                        h="auto" 
                        display="block"
                    />
                    <Text mt="4" fontStyle="italic">Shreyas is tall</Text>
                </Box>
                <Box mx="80px" textAlign="center" w="320px" h="auto">
                    <video width="320" height="auto" controls>
                        <source src="images/BlogImages/FirstMonthBlog/BowlShreyas.MP4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Text mt="4" fontStyle="italic">Shreyas picked up bowling</Text>
                </Box>
            </Box>

            <Box textAlign="left" mt="20px" mx="200px" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                We didn't really know what to do or where to go, except to follow all the orientation events for first-year students. I felt like I was in a whole different world but at least we had each other. 
            </Box>


        </Box>
    );
}

export default FirstMonthBlog;
