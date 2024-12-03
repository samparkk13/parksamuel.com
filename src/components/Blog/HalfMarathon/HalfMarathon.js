import { Heading, Box, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons';


const HalfMarathon = () => {

    return (
        
        <Box bg="lightblue" maxW="100vw" minH="100vh" overflowY="auto" overflowX = "hidden" p={4} d="flex" flexDirection="column" alignItems="center">
            <Button 
                as={Link}  
                to="/blog" 
                position="absolute" 
                top="20%" 
                left="5%" 
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
            <br />
            <br />
            <Heading align="center" fontSize="2.25rem" mt="20mm">
                Cambridge Half Marathon
            </Heading>
            <br />
            <br />
            <Heading align="center">
                November 2024
            </Heading>

            {/* <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
            Some items that are on my life-long bucket list include:
                <Box as="ul" mt="10px" ml="20px" fontWeight="medium" fontFamily="'Times New Roman', sans-serif">
                    <Box as="li" mb="5px">Skiing in Switzerland</Box>
                    <Box as="li" mb="5px">Seeing the Northern Lights</Box>
                    <Box as="li" mb="5px">Chasing a tornado</Box>
                    <Box as="li">Stepping on the moon</Box>
                </Box>
            </Box> */}

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
            Some items that are on my life-long bucket list include:
            <ul>
                <li>Skiing in Switzerland</li>
                <li>Seeing the Northern Lights</li>
                <li>Chasing a tornado</li>
                <li>Stepping on the moon</li>
            </ul>


            <br />

            Okay, fine… That last one definitely won’t happen. But ‘run a half-marathon’? That certainly wasn’t on my bucket list just one month ago.

            <br />
            <br />

            Fast forward one month, and I was standing right before the starting line waiting to run 13.1 miles. 
            A moment I never saw coming was now about to become a reality.
            </Box>
            
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/atStartingLine.jpg" 
                    alt="at the Starting Line"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">How did we get here?</Text>
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
            Yes, in the span of 4 weeks, I decided to sign up and train for a half marathon. 
            <br />
            <br />

            Coming to make the decision was pretty simple. 
            All it took were a few clicks on a computer screen and figuring out some logistical details for the trip. 
            <br />
            <br />

            The training, not so much. It sounded like a daunting task at first, but thankfully I wasn’t alone. 
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/joshjesstaylor.jpg" 
                    alt="picture of josh and taylor and jess"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="60%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">meet josh, jess, and taylor (pictured left to right)</Text>
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
            <br />

            After bringing together this fearsome group of four, we decided to take on the training to run this Cambridge half-marathon. 
            <br />
            <br />
            Our training plan started off light. 
            For the first two weeks, we ran about 10-15 miles per week. 
            A few short runs of around 2-3 miles throughout the week and a long(er) run towards the end of the week of around 5-6 miles. 
            <br />
            <br />

            The views on some of our runs were immaculate.
            
            </Box>
            
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/greatView.jpg" 
                    alt="beautiful view while running"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">Fall foliage + Ithaca hills = perfection</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                However, on others, not so much. 
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/noGreatView.jpg" 
                    alt="not a beautiful view while running"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">On many of my runs, I would stare at the back of Jess & Taylor’s heads</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                And of course, we always stretched before every run to prevent cramps and injuries. 
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/stretch.jpg" 
                    alt="stretching at Williams Lot"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">the usual pre-run williams lot stretch</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                But sore legs after runs, especially the long runs, were all a part of the process. 
                <br />
                <br />
                Slowly but surely, we would build the distance of our long runs. 
                <br />
                <br />
                By week 3, we hit 8 miles for our long run. For our last week until the half, we ran 10 miles. 
                All the while, we would fit in shorter runs throughout the week, averaging a total of 15-20 miles per week for the last 2 weeks. 
                <br />
                <br />
                Those 4 weeks of training honestly went by so fast, and in the blink of an eye, we were leaving Ithaca and were on our way to Boston.
                <br />
                <br />
                During our time in Boston, we began to load on carbohydrates for our half. 

            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/carb.jpg" 
                    alt="carb meal"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">Carbing up in Little Italy</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                And we had people that would tell us to as well. 
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/dane.jpg" 
                    alt="carb meal"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">Dane: ‘CARB UP!’ </Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                We also made sure to get good sleep the night before the half. A 7 AM start meant a wakeup time of 5 AM. 
                <br />
                <br />
                By 30 minutes before the race, the streets in Cambridge were fill with other half-marathoners
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/beforeHalf.jpg" 
                    alt="carb meal"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">many many heads</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                It was a surreal sight. Four weeks of training and preparation had all led to this moment. 
                The air was filled with anticipation and the adrenaline was kicking in. 
                Cheers echoed around us, and we felt the support of everyone there. 
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/robinFan.jpg" 
                    alt="carb meal"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">Robin was our #1 supporter</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                Before I knew it, I was pressing the start button on my Apple Watch as we crossed the starting line, 
                officially beginning our 13.1 mile half-marathon. 

                

            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/riverView.jpg" 
                    alt="view of Charles River"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">📍 Charles River</Text>
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/harvardStadium.jpg" 
                    alt="Harvard Stadium"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">📍 Harvard Stadium</Text>
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/joshLydiaPace.jpg" 
                    alt="pacing with Josh and Lydia"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">W/ Josh + Lydia @Harvard Stadium</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                As each mile went on, I could feel my legs getting heavier and heavier. But each mile passed meant we were a mile closer to the finish. 
                <br />
                <br />
                Josh and I finally crossed the finish line, barely breaking the 2 hour mark. For us, that was a huge accomplishment in itself. 
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/HalfMarathon/jessTaylorAfter.jpg" 
                    alt="Jess and Taylor after finishing the half"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="40%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">the post half feeling</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                The views throughout the run, the adrenaline, and pacing with friends made those 13.1 miles much more bearable. 
                <br />
                <br />
                Looking back, it's crazy to believe that I signed up and trained to run a half in the span of a month. 
                At least I can proudly check 'run a half-marathon' off my bucket list — a feat I never expected to add, let alone accomplish.
                <br/>
                <br/>
                <br/>
                -Samuel Park
                <br/>
                <br/>
                <br/>
                <footer class="small-footer-text">
                    <p>© 2024 Samuel Park. All rights reserved.</p>
                </footer> 
            </Box>


        </Box>
    
    );
};
        
export default HalfMarathon