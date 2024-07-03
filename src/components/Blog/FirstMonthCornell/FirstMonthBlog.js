import React, { useState } from 'react';
import { Heading, Box, Image, Text, Divider, Button, Input, Textarea, FormControl, FormLabel} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons';

const FirstMonthBlogDraft = () => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const handleCommentChange = (e) => setComment(e.target.value);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() !== "") {
            setComments([...comments, comment]);
            setComment("");
        }
    };

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
            <Heading align="center" fontSize="2.5rem" mt="20mm">
                The Beginning (of Many Beginnings)
            </Heading>
            <br />
            <br />
            <Heading align="center">
                June 2024
            </Heading>
            

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/FirstMonthBlog/fallRetreat22Boys.jpg" 
                    alt="Freshman Blog Cover Pic"
                    mt="20px" 
                    w={{ base: "350px", sm: "60%" }}  
                    minWidth="260px" 
                    maxW="60%"
                    h="auto" 
                    display="block"
                    mx = "auto"
                    borderRadius= "15px"
                    
                />
                <Text mt="4" fontStyle="italic">How did we get here?</Text>
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                
                Now that I am halfway through college, I wanted to take a moment to look back on my past two years, perhaps in the form of this blog. 
                Specifically, the first month of the past two years. 
                It felt like a journey, and it's hard to believe that I still have two years ahead of me. 
                <br />
                <br /> 
                Throughout this blog, you’ll come to see how Cornell became my second home. 
                Actually, my first home as I found myself getting homesick when I was back home with on Long Island.

                <br />
                <br />
                I invite you to join me on my journey back to Fall 2022.
                <br />
                <br />
                <Box textAlign="center" fontSize="1.25em" fontWeight="bold">
                    Wednesday, August 17th: The Beginning
                </Box>
                {/* <Text as="span" fontSize="1.25em" fontWeight="bold">
                    Wednesday, August 17th: The Beginning
                </Text> */}
                <br />

                I arrive at Cornell with a mix of emotions. 
                <br /> 
                <br />   
                Excited to move in and meet new people but also nervous that I'll feel lonely. 
                <br /> 

                Happy that I'm free from my parents but scared because I'm free from my parents.
                <br />
                <br />
                After saying my final goodbyes to my family, this journey called college began. 
            </Box>
            
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/FirstMonthBlog/Movein.jpeg" 
                    alt="Saying Bye to my Family"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="80%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                    
                    
                />
                <Text mt="4" fontStyle="italic">My family sends me off</Text>
            </Box>
            < br/>
            <Box textAlign="left" mt="20px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
            I vividly remember walking my first steps as a student on campus, looking for new and familiar faces, perhaps some other Korean students. 
            Most of these steps were with my roommate and long-time childhood friend, Shreyas.
                <br />
                <br /> We shared many firsts at Cornell together. First conversation in Ithaca, first dining hall experience, first night away from home in our dorm room.
                
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" mt="20px" w="100%">
                <Box mx="5%" textAlign="center" w="25%">
                    <Image 
                    src="images/BlogImages/FirstMonthBlog/TallShreyas.jpg" 
                    alt="Cornell Memories"  
                    w="100%"  
                    h="auto" 
                    display="block"
                    borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">Shreyas is pretty tall</Text>
                </Box>
                <Box mx="5%" textAlign="center" w="25%">
                    <Box borderRadius="15px" overflow="hidden">
                    <video width="100%" height="auto" controls>
                        <source src="images/BlogImages/FirstMonthBlog/BowlShreyas.MP4" type="video/mp4" />
                    </video>
                    </Box>
                    <Text mt="4" fontStyle="italic">Shreyas is not pretty good at bowling</Text>
                </Box>
            </Box>
            < br/>
            <Box textAlign="left" mt="20px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                We didn't really know what to do or where to go, except to follow all the orientation events for first-year students. 
                I felt like I was in a whole different world, but at least we had each other. 
                <br />
                <br />
                <Box textAlign="center" fontSize="1.25em" fontWeight="bold">
                Thursday, August 18th - Friday, August 19th: The Beginning of a Lasting Friendship
                </Box>

                <br /> 
                The next day, Cornell hosted a First-Year Festival at Barton Hall. 
                This festival gave me the opportunity to play games, win prizes, and meet other first-year students. 
                <br />
                <br /> 
                This is where I met Robin. 
                <br />
                <br /> 
                In our very brief conversation, we were able to introduce ourselves, 
                talk about our faith, and exchange phone numbers. 
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/bartonText.jpg" 
                        alt="first text when I met Robin at Barton"  
                        mt="20px" 
                        w={{ base: "350px", sm: "70%" }}  
                        minWidth="200px" 
                        maxW="70%"
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                        
                    />
                    <Text mt="4" fontStyle="italic">We exchanged phone numbers</Text>
                </Box>
                <br />
                <br /> Little did we know, that interaction started a lasting friendship, 
                and we clicked instantly in a lot of ways. The best part was, he was also{" "}
                <Text as="span" fontFamily="'Times New Roman', sans-serif" textDecoration="line-through">
                    korean
                </Text>{" "}
                {" "}
                <Text as="span" fontFamily="'Times New Roman', sans-serif" textDecoration="line-through">
                    handsome
                </Text>{" "}
                Christian.
                <br/>
                <br/>
                We decided to eat together at Morrison the next morning.
                We had the following conversation below.
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/firstTextRobin.jpg"
                        alt="my first conversation with Robin"
                        mt="20px" 
                        w={{ base: "350px", sm: "50%" }}
                        minWidth="200px"   
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                        maxW="55%"
                    />
                    <Text mt="4" fontStyle="italic">We had our first conversation</Text>
                </Box>
                
                <br />
                <br/> And just as we planned, we grabbed some breakfast at Morrison.
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/RobinSamFirstMeal.jpg"
                        alt="First Meal with Robin"
                        mt="20px" 
                        w={{ base: "350px", sm: "70%" }}
                        minWidth="200px"  
                        maxW="70%"
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                        
                    />
                    <Text mt="4" fontStyle="italic">We don’t know the dude next to me</Text>
                </Box>
                <br />
                <br />

                <Box textAlign="center" fontSize="1.25em" fontWeight="bold">
                    Friday, August 19th - Sunday, August 21st: The Beginning with Emmaus Road
                </Box>

                <br />
                I had a friend that I knew from back at home that was also at Cornell, Matt. 
                After a few conversations back at home and a couple text messages shown below, 
                the three of us decided to check out some events and fellowships together. 
                <br />
                <br />
            

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/FirstMonthBlog/textMattLim.jpg"
                    alt="text Matt"
                    mt="20px"  
                    w={{ base: "350px", sm: "50%" }}
                    minWidth="200px"  
                    maxW="50%"
                    h="auto" 
                    display="block"
                    mx = "auto"
                    borderRadius= "15px"
                />
                <Text mt="4" fontStyle="italic">"another dude" = Robin</Text>
            </Box>
            <br/>
            <br /> Throughout the weekend, I met many cool people with their own unique talents and learned how they got into Cornell. 
            A few, I could tell, lucked out. It was super cool nonetheless. 
            <Box display="flex" justifyContent="center" alignItems="center" mt="20px" w="100%">
                <Box mx="5%" textAlign="center" w="170%">
                    <Image 
                    src="images/BlogImages/FirstMonthBlog/oweekend2.jpg" 
                    alt="o-week"  
                    w={{ base: "350px", sm: "100%" }}
                    minWidth="175px"  
                    maxW="100%"  
                    h="auto" 
                    display="block"
                    borderRadius="15px"
                    />
                </Box>
                <Box display="flex" flexDirection="column" ml="0px" > {/* Stack second and third images vertically */}
                    <Box mx="5%" textAlign="center" w="80%">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/oweekend1.JPG" 
                        alt="o-week"  
                        w={{ base: "350px", sm: "100%" }}
                        minWidth="175px"
                        maxW="100%"  
                        h="auto" 
                        display="block"
                        borderRadius="15px"
                    />
                    </Box>
                    <Box mx="5%" textAlign="center" w="80%" mt="40px">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/oweekend3.JPG" 
                        alt="o-week"  
                        w={{ base: "350px", sm: "100%" }}
                        minWidth="175px"
                        maxW="100%"   
                        h="auto" 
                        display="block"
                        borderRadius="15px"
                    />
                    </Box>
                </Box>
            </Box>
            <Text textAlign= "center" mt="4" fontStyle="italic">
                I think some of these friends lucked out 
            </Text>
            <br />
            Before I knew it, orientation week came to a close and my first weekend was well spent. 
            I spent most of my time at a church called Emmaus Road (we call it by its initials, ER). 
            I played lots of games with the people I met there, attended the beginning-of-the-year BBQ, went to Sunday service, and much more. 
            <br />
            <br />
            {/* <Text as="span" fontSize="1.25em" fontWeight="bold">
                Monday, August 22 - Friday, August 26st: "The Beginning of{" "}
                <Text as="span" fontStyle="italic">Cornell</Text> "
            </Text> */}
            <Box textAlign="center" fontSize="1.25em" fontWeight="bold">
                Monday, August 22nd - Friday, August 26th: The Beginning (Actually)
            </Box>

            <br />
            After all the orientation fun, it was time to be what I came here to be – an academic weapon. 
            On the first day of school, I was ready to tackle any class and take on any challenge.
            <br />
            <br />However, I started to realize, the first week of school wasn’t gonna be loaded with work. 
            <br />
            <br />Actually, there was almost no work.
            <br />
            <br /> Robin and I pretty much did everything together ever during our first academic week here. 
            We ate together, “studied” together, went bowling together, and took naps throughout campus together. 
           <br/>
           <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/FirstMonthBlog/CornellRain.JPG" 
                    alt="walking in the Cornell rain together"
                    mt="20px" 
                    w={{ base: "350px", sm: "70%" }}
                    minWidth="200px"  
                    maxW="70%"
                    h="auto" 
                    display="block"
                    mx = "auto"
                    borderRadius= "15px"
                />
                <Text mt="4" fontStyle="italic">Walking in the Cornell rain together</Text>
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/FirstMonthBlog/CornellSun.JPG"
                    alt="Walking in the Cornell sun together"
                    mt="20px" 
                    w={{ base: "350px", sm: "70%" }}
                    minWidth="200px"  
                    maxW="70%"
                    h="auto" 
                    display="block"
                    mx = "auto"
                    borderRadius= "15px"
                />
                <Text mt="4" fontStyle="italic">Walking in the Cornell sun together</Text>
            </Box>
           
            <br/>
            <br />We even had nightly “debriefs,” when we would break down our day and talk about any cool / interesting stuff that happened.
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/FirstMonthBlog/debrief.jpg"
                    alt="debrief"
                    mt="20px" 
                    w={{ base: "350px", sm: "50%" }}
                    minWidth="200px"  
                    maxW="50%"
                    h="auto" 
                    display="block"
                    mx = "auto"
                    borderRadius= "15px"
                />
                <Text mt="4" fontStyle="italic">Debrief in Ganędagǫ Hall music room</Text>
            </Box>
            <br/>

            </Box>

                  
            <Box textAlign="left" mt="20px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                We also got close and hung out a lot with these two cool sophomores from ER, Esther and Michelle. 
                <br/>
                <br/>

                Including our first Texas Roadhouse experience in Ithaca. 
                
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/texasRoadhouseJisoo.jpg" 
                        alt="at Texas Roadhouse with Jisoo and sophomores"  
                        mt="20px" 
                        w={{ base: "350px", sm: "70%" }}
                        minWidth="200px"  
                        maxW="70%"
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">Jisoo (bottom-right) drove us</Text>
                </Box>
                <br/>
                <br/>
                They made Cornell feel a bit more like home.
                They even invited us a few times to hangout in their double at Ganędagǫ.
                <br/>
                <br/>
                I think we were invited...
                <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/FirstMonthBlog/withMichigan.jpg"
                    alt="with Michelle aka Michigan"
                    mt="20px" 
                    w={{ base: "350px", sm: "75%" }}
                    minWidth="200px"  
                    maxW="75%"
                    h="auto" 
                    display="block"
                    mx = "auto"
                    borderRadius= "15px"
                />
                <Text mt="4" fontStyle="italic">We liked to call Michelle "Mich" or "Michl" or "Michigan"</Text>
            </Box>
                <br/>
                <br/>
                But regardless, after a couple of nights, we noticed that these sophomores started to tire pretty easily. 
                Maybe it was the sophomore slump? (Yes, sophomore slump is real 🥲.)
                <br/>
                <br/> Towards the end of our first week, we started to wonder, where are the other freshmen from ER at?? 
                <br/>
                <br/> 
                <Box textAlign="center" fontSize="1.25em" fontWeight="bold">
                    Saturday, August 27nd - Wednesday, August 31st: The Beginning of Brotherhood
                </Box>

                <br/> 
                Now into our second weekend at Cornell and after a weekend filled with meeting more new faces at ER, I remember meeting a fellow dark-skinned Asian, Yongjin.
                <br/>
                <br/> 
                Insert Yongjin, Matt, Robin, and I together. 
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/brotherhoodSlope.jpg" 
                        alt="brothers at the slope"
                        mt="20px" 
                        w={{ base: "350px", sm: "60%" }}
                        minWidth="185px"  
                        maxW="60%"
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">One of our first moments together</Text>
                </Box> 
                <br/>
                <br/> 
                Now we had a brotherhood. Or the beginnings of one.
            
            </Box>
            
            <Box textAlign="left" mt="20px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                We had fun by hanging out, sitting on the slope, watching the sunset, and finding other ways to entertain ourselves on campus.
                The nights were filled with conversations between the boys.
                <br/>
                <br/> 
                
                <Box mx="auto" textAlign="center" w="40%" display="flex" flexDirection="column" alignItems="center">
                    <Box borderRadius="15px" overflow="hidden" w="100%">
                        <video width="100%" height="auto" controls>
                            <source src="images/BlogImages/FirstMonthBlog/milttamJump.mp4" type="video/mp4" />
                        </video>
                    </Box>
                    <Text mt="4" fontStyle="italic">Peak entertainment</Text>
                </Box>
                <br/>

                <br/> Meanwhile, our classes were getting more intense, and the deadlines for our first problem sets were rapidly approaching.
                <br/>
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/brotherhood.jpg" 
                        alt="studying at dorm lounge"
                        mt="20px" 
                        w={{ base: "350px", sm: "70%" }}
                        minWidth="200px"  
                        maxW="70%"
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">No entertainment</Text>
                </Box>
                <br/>
                <Box textAlign="center" fontSize="1.25em" fontWeight="bold">
                    Thursday, September 1st - Saturday, September 17th: The Beginning of Cornell Family
                </Box>
                <br/>
                As a new month turned and August slipped away, 
                we realized that our small freshman group was lacking one thing: sisters. 
                Robin and I remembered two freshmen sisters that we met during orientation weekend, Ellie and Erin. 
                <br/>
                <br/>We decided to reach out to Ellie over text together, as this was a new and tall task. 
                We then had the conversation on text below.  
                <br/>
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/textEllieYu.jpg"
                        alt="text Ellie"
                        mt="20px" 
                        w={{ base: "350px", sm: "40%" }}
                        minWidth="200px"  
                        maxW="40%"
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">first conversation with Ellie</Text>
                </Box>
                <br/>
                <br/>
                And in short: we must’ve not been boring to hang out with! 
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/postEllieText.jpg"
                        alt="text Ellie"
                        mt="20px" 
                        w={{ base: "350px", sm: "100%" }}
                        minWidth="190px"  
                        maxW="100%"
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">One hour later...</Text>
                </Box>
                <br/>
                <br/>
                Throughout the next few days, we spent more time with Ellie and Erin. It started by grabbing meals together.
                
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/squadMeal.jpg"
                        alt="eating at 4 Seasons with the squad"
                        mt="20px" 
                        w={{ base: "350px", sm: "70%" }}
                        minWidth="200px"  
                        maxW="70%"
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">09/04 - Our first meal together at 4 Seasons</Text>
                </Box>
                <br/>
                <br/>
                Then we hung out afterwards. We spent some late nights studying or yapping. Making goofy Tiktoks. Watching movies. Karaoke nights. 
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/brotherhoodKiss.jpg"
                        alt="me Robin and YJ kiss"
                        mt="20px" 
                        w={{ base: "350px", sm: "70%" }}
                        minWidth="200px"  
                        maxW="70%" 
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">09/09 - Our first selfie</Text>
                </Box>
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/atRobinRoom.JPG"
                        alt="everyone at Robin's single"
                        mt="20px" 
                        w={{ base: "350px", sm: "70%" }}
                        minWidth="200px"  
                        maxW="70%" 
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">09/11 - And first group selfie</Text>
                </Box>
                <br/>
                <br/>
                As the weeks went on, we spent more and more time together, growing closer with each passing day.
                <br/>
                <br/>
                And coincidentally, the day that marked my first month at Cornell was the day that ER went apple-picking. 
                <br/>
                <br/>
                It was a fun outing when our church visited a nearby farm to pick delicious, ripe apples.
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/applePicking.jpg"
                        alt="apple picking"
                        mt="20px" 
                        w={{ base: "350px", sm: "70%" }}
                        minWidth="200px"  
                        maxW="70%" 
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">09/17 - Holding ripe apples with Diddy (in crutches) </Text>
                </Box>

                <Box textAlign="center" position="relative" mt={50} >
                    <Divider borderColor="black" borderStyle="dotted" borderWidth="1px" />
                    <Text 
                        position="absolute" 
                        top="50%" 
                        left="50%" 
                        transform="translate(-50%, -50%)" 
                        bg="lightblue" 
                        px={2} 
                        color="black"
                    >
                        CUT
                    </Text>
                </Box>
                <br/>
                <br/>
                I’ll end this blog entry here, as writing about the memories made and the people met throughout my freshman year would make this one too long. 

                But as my freshman year went on, our freshman group grew bigger and bigger.
                <Box mx="15%" textAlign="center">
                    <Image 
                        src="images/BlogImages/FirstMonthBlog/freshmanClass.jpg"
                        alt="freshman class at ER spring Retreat"
                        mt="20px" 
                        w={{ base: "350px", sm: "70%" }}
                        minWidth="200px"  
                        maxW="70%" 
                        h="auto" 
                        display="block"
                        mx = "auto"
                        borderRadius= "15px"
                    />
                    <Text mt="4" fontStyle="italic">Freshman Class at ER Spring Retreat 2023</Text>
                </Box>

                <br/>
                <br/>
                There are some things that are forgettable from my first year at Cornell, such as the freshman fifteen and awkward interactions. 
                But the unforgettable parts are the memories made along the way, the conversations I had, and the friendships that blossomed. 
                <br/>
                <br/>
                I realized that as this “friend group” began to grow closer together and in numbers throughout the year, 
                we weren’t really a friend group. 
                We were all brothers and sisters with a heart of curiosity, kindness, and most importantly, a mustard seed of faith. 
                <br/>
                <br/>
                My freshman year was marked by so many more memories and people that a short entry could never capture in its entirety. 
                But taking a glance back, it was fun making my first memories at Cornell with this bunch. 
                <br/>
                <br/>
                Seeing us all running this race and continue to go through thick and thin together is something I look forward to!
                <br/>
                <br/>
                <br/>
                -Samuel Park
                <br/>
                <br/>
                <br/>
                <footer class="small-footer-text">

                    <p>Thank you for reading! Stay tuned for more blogs like this! And shoutout Racha for being my blog consultant 😆.</p>
                    {/* <p>© 2024 Samuel Park. All rights reserved.</p> */}
                </footer>
            </Box>     


            <Box mt={8} w="100vw" bg="#7CB9E8" p={4} borderRadius="md" boxShadow="md">
                <Heading as="h3" size="lg" mb={4} >Leave a Comment</Heading>
                <form onSubmit={handleCommentSubmit}>
                    <FormControl id="comment" isRequired>

                        <Textarea 
                            value={comment}
                            onChange={handleCommentChange}
                            placeholder="Write your comment here..."
                            size="sm"
                            resize="vertical"
                            textAlign="center"
                        />
                    </FormControl>
                    <Button mt={4} colorScheme="blue" type="submit" >Submit</Button>
                </form>
                <Divider my={8} />
                <Heading as="h3" size="lg" mb={4}>Comments</Heading>
                {comments.length === 0 ? (
                    <Text>No comments yet. Be the first to comment!</Text>
                ) : (
                    comments.map((comment, index) => (
                        <Box key={index} p={4} bg="gray.100" borderRadius="md" mb={4}>
                            <Text>{comment}</Text>
                        </Box>
                    ))
                )}
            </Box>       

        </Box>
    );
}

export default FirstMonthBlogDraft;
