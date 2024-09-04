import { Heading, Box, Image, Text, Divider, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons';


const BethpageBlackBlog = () => {

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
            <br />
            <br />
            <Heading align="center" fontSize="2.5rem" mt="20mm">
                Bethpage Black: A Test of Character, Mentality, and Grit
            </Heading>
            <br />
            <br />
            <Heading align="center">
                June 2024
            </Heading>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/BethpageBlackBlog/warningHorizontal.jpg" 
                    alt="the view of hole 1"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">the view of hole 1</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                
                On a warm summer evening, the sun hung low in the sky, casting a golden glow near the horizon. 
                The air was still, filled with the sweet scent of freshly cut grass from the nearby golf greens 
                and the faint hum of bush crickets starting their evening song. 
                Drops of sweat trickled down my back, mingling with the lingering heat of the day. 
                I stood there, pumping gas into my Toyota RAV4, my muscles pleasantly sore after a grueling 4-hour round of golf. 
                As I leaned against the car, taking in the serene moment, a thought suddenly crossed my mind: what is it like to golf on the infamous Bethpage Black Course? 
                <br />
                <br /> 
                Rich in tradition and deeply rooted in golf's history, 
                Bethpage's renowned Black course is known as one of the toughest and most prestigious challenges in the sport. 
                Everyone I spoke with who had played there before gave me the same advice: "You have to see it to truly understand."
                <br />
                <br />
                Throughout the rest of summer, I found myself on approximately 15 different golf courses. 
                Many in Long Island, one in Ithaca, and even a couple in Florida. 
                <br />
                <br />
                But that thought from earlier would not leave my mind. 
                What is it really like to play on the notorious black course? 
                What is it like to play on a course at the same level as the pros?
                <br />
                <br />

                <Box textAlign="center" fontSize="1.25em" fontWeight="bold">
                    Preparation
                </Box>

                <br />

                My close college friend Robin and I decided we had to try the course before we went back to school, 
                and before it got too busy with preparations for hosting the famous Ryder Cup in 2025.

                <br /> 
                <br />   
                We decided to camp out at my house the night before, about a 15 minute drive from Bethpage. 
                We tried to reserve a tee time throughout the week online, but did not succeed. 
                I have heard many stories of people sleeping overnight at the course or waking up before sunrise to get tee times, so I was prepared.  
                <br /> 
                <br />

                That night before the big day, we were watching Grant Horvat’s Bethpage Black youtube video. 
                It was at this moment when it hit me: in just twelve hours time, I would be playing on the black course at Bethpage State Park. 
                <br />
                <br />
                We set our alarms at 3:10 AM the morning of our big day, with hopes to get to Bethpage before 4 AM. 
                When we arrived at Bethpage, there were already multiple cars ahead of us. 
                We were able to get the 19th spot in the parking lot, referencing the order of who gets out first in the morning, 
                and then waited with excitement for the attendant to show up and hand ticket numbers to reserve a tee time. 

                
            </Box>
            
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/BethpageBlackBlog/selfie.jpg" 
                    alt="camping out in the car at 4AM"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">camping out in the car at 4AM</Text>
            </Box>


            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                As expected, the attendant showed up a little past 5 AM, and after getting our ticket number, we drove to the clubhouse to reserve our time in person. 

            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/BethpageBlackBlog/ticket.jpg" 
                    alt="ticket number"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">our ticket number</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                The earliest available time for 2 at Bethpage Black was at 9:40 AM, so Robin and I booked that. 
                I was honestly pretty surprised that we got our time as late as we did, as I was expecting a time at least before 8 AM. 
                Especially after hearing that the first hour of tee times every day were reserved for those who wait in the parking lots. 
                But a tee time is a tee time.

            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/BethpageBlackBlog/receipt.jpg" 
                    alt="our receipt for our tee time"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">not bad prices for NY state residents - $70 each</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                With now a bit less than 4 hours to kill until our tee time, and now with much lower adrenaline levels, 
                we decided to go back home, eat, recharge, and then come back for our time. 
                A nice breakfast and a 2-hour nap later, we were ready to go.
                <br /> 
                <br />
                I set a goal for myself, which was just to break 100. 
                I figured that even breaking 100 would be tough to come by, 
                especially considering the course toughness and the fact that we have to walk the course. 
                No carts are allowed on the course to preserve the course conditions.
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/BethpageBlackBlog/gallery.jpg" 
                    alt="me and Robin in front of the famous warning sign"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">for ‘highly skilled golfers’</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="center" fontSize="1.25em" fontWeight="bold">
                    The Course Itself
                </Box>

                <br />
                We were paired up with two other middle-aged men, Steven and Dave. 
                I was just thankful that they were playing the same colored tees as we were. I think they were as well. 
                <br />
                <br />
                <Box textAlign="left" fontSize="1.1em" fontWeight="bold">
                    Hole 1
                </Box>

                Definitely one of the most nerve-wracking parts of hitting Bethpage Black was the first hole. 
                It wasn’t the typical foursome start. 
                With the gallery of those waiting to tee off behind you on your first shot of the day, 
                it felt like I was teeing off with my life on the line. 
                <br/>
                <br/>
                Thankfully, my first shot of the day wasn’t too terrible. 
                Decent contact, my typical left-to-right sliced ball trajectory, 
                leading to a shot of about 215 yards with the help of the elevated tee box. 
                <br/>
                <br/>
                The problem about my first shot, and this was something that I figured out very quickly, 
                was that my ball landed in the right rough. Now, this rough isn’t your typical rough. 
                It is a 2-inch area of thick, tall grass that is more dense than the George Washington traffic at rush hour. 
                Having a ball end up here almost always means an automatic extra stroke just to get it out of this grass. 
                <br/>
                <br/>
                I encountered my second problem shortly after: the greens. 
                I have never played on greens faster than the ones on Bethpage Black. 
                I three-putted the first two holes, both for double bogey, 
                after getting decent looks for par just because I was not expecting the greens to be this quick. 
                And the greens are also definitely harder than most. 
                <br/>
                <br/>
                <Box textAlign="left" fontSize="1.1em" fontWeight="bold">
                    Hole 3
                </Box>
                Now with some nerves out of the way, we approached a much easier-looking par 3. 
                Officially marked as the 17th handicapped hole on the scorecard, 
                I thought to myself before teeing off, “lets treat this as a typical par 3 on any course”. 
                <br/>
                <br/>
                After hitting a decent 7-iron onto the green, I hit at least a 40-ft putt for birdie, reading the lie perfectly. 
                This was my only hole that I parred or better throughout the day, but it was a hole I won’t forget for a while. 
                My first birdie on Bethpage Black! 
                <br />
                <br />
                <Box textAlign="left" fontSize="1.1em" fontWeight="bold">
                    Hole 9
                </Box>
                I wanted to reiterate here that this black course is simply beautiful, with very well-maintained fairways and greens. 
                I was just at peace with the clear skies and the sun beating down on my back. 
                <br/>
                <br/>
                However, the hilly terrain and the beating sun started to catch up to us. 
                It forced me to use my one and only mulligan on this hole after hitting a 15-yd drive. 
                I still carded a bogey thankfully, and I realized here that anything bogey or better is a very respectable hole.
                <br />
                <br />
                <Box textAlign="left" fontSize="1.1em" fontWeight="bold">
                    Hole 15
                </Box>
                Although there are no official names for the holes on Bethpage Black, the 15th should be rightly named "Mount Everest.” 
                As you get closer to the green, the ground begins to elevate.  
                The green is perched on a high cliff, about 50 feet above the fairway, and reaching it feels like you'll be in heaven. 

                Stretching 430 yards from the white tees, this hole is officially marked as the #1 handicapped hole. 
                After an errant tee shot that landed left of the fairway with about a 180 yd carry, I had some yardage to make up. 
                I decided to lay up my second shot on the fairway, and hit an 8-iron out of the fescue onto the fairway. 
                With my third shot, I was able to perch my shot onto the green. I two-putted from there, finishing the hole with a very very respectable bogey. 
                <br />
                <br />
                <Box textAlign="left" fontSize="1.1em" fontWeight="bold">
                    Hole 16-17
                </Box>
                After having a great chance of breaking 100 and hitting my goal with three holes to go, 
                I blew my opportunity by shooting 7 over on the last 3 holes combined. 
                I’d say it was a mix of tired legs, heat, and a weak mental. 
                However, I have to say that the last 3 holes are a visual beast. 


            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/BethpageBlackBlog/17hole.jpg" 
                    alt="me and Robin walking on the 17th hole"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">walking on the beautiful par-3 17th</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">

                <Box textAlign="left" fontSize="1.1em" fontWeight="bold">
                    Hole 18
                </Box>
                As we trudged up the slope to the 18th hole tee box, it felt like we were soldiers returning home after winning a victorious war. 
                With each step, I reflected on the round we had just conquered. 
                There were plenty of moments of humiliation and frustration, but what stood out were the brief instances of triumph and victory. 
                <br/>
                <br/>
                As I looked back on the day, I couldn’t help but feel a surge of pride. 
                I had navigated through one of the most daunting and humbling courses known to golf.
                <br />
                <br />

                <Box textAlign="center" fontSize="1.25em" fontWeight="bold">
                    Closing Remarks
                </Box>
                <br />
                I was nervous that this course would make me dislike the sport of golf itself. 
                The thought of this course scarring me for life was a possibility running through my mind. 
                But after hitting this course, I realized this wasn’t the case. 
                <br/>
                <br/>
                I realized that this is why we play golf. 
                It’s the love, passion, and experience that we all seek, one golf shot at a time. 
                Golf allows us to step away from the hustle and bustle of our daily lives for a few hours, 
                bringing us back to that childlike joy of falling in love with the game—carefree and full of possibilities. 
                <br/>
                <br/>
                Seeing what just 18 holes of golf is capable of makes me want to play the sport of golf again. And again. And again. 

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
            
export default BethpageBlackBlog