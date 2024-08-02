import { Heading, Box, Image, Text, Divider, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ArrowBackIcon } from '@chakra-ui/icons';
import './KoreaBlog.css';

const KoreaBlog = () => {

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
                The Motherland
            </Heading>
            <br />
            <br />
            <Heading align="center">
                July 2024
            </Heading>


            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/meAndCuzs.jpg" 
                    alt="me and my cousins"
                    mt="20px" 
                    w={{ base: "350px", sm: "60%" }}  
                    minWidth="260px" 
                    maxW="50%"
                    h="auto" 
                    display="block"
                    mx = "auto"
                    borderRadius= "15px"
                    
                />
                <Text mt="4" fontStyle="italic">me with my cousins</Text>
            </Box>
            <br/>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                I was born and raised in the United States. 
                <br/>
                <br/>
                I’ve lived my entire life in Long Island, NY.
                <br/>
                <br/>
                When people ask me where I am from, most of the time my answer is “New York”. 
                <br/>
                <br/>
                But my appearance and the household culture that I grew up in does not reflect a typical New Yorker.
                <br/>
                <br/>
                I may have been born in New York, but my ancestral roots trace back to South Korea. 
                <br/>
                <br/>
                However, traveling to Korea is a once in a blue moon opportunity for many reasons. 
                The length of the plane ride, plane ticket cost, the length of the plane ride… the list goes on. 
 
            </Box>
            
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/milttamPlane.jpg" 
                    alt="milttam sleeping on plane"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">The 15-hour plane ride knocks people out</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                When “cheap” (~$1300 round trip) plane tickets to Korea suddenly became available due to a new airline, the opportunity to visit presented itself.

            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/planeFood.jpg" 
                    alt="delicious plane food"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">The 15-hour plane ride is compensated with great Korean meals</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                Throughout this blog, I’ll reflect on my stay in Korea, sharing reviews of my favorite meals and highlighting some of the most memorable places I visited. 
                <br/>
                <br/>


                {/* 

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                However, any fears that I had about this daunting flight or traveling alone went away after my first plane meal.
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/planeFood.jpg" 
                    alt="delicious plane food"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">The start of some amazing meals</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                When I arrived, I was greeted by my aunt, my cousin, and their dog. 
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/dogCousin.jpg" 
                    alt="dog"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">I don't think she liked me a lot</Text>
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                Later that day, I met up with the rest of my cousins. 
                <br/>
                <br/>
                They showed me around Hangang River, one of the most popular spots in Korea. 
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/awkwardPic.jpg" 
                    alt="pic with cousins"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">My cousins didn’t like to take the classic shoulder to shoulder picture</Text>
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/hangangSelfie.jpg" 
                    alt="selfie with cousins"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">I decided to take a selfie instead</Text>
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                They also told me that eating chicken by the river was very popular. 
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/chickenHangang.jpg" 
                    alt="selfie with cousins"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">Chicken</Text>
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/hangangRiver.jpg" 
                    alt="the Hangang River"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">By the River</Text>
            </Box>
            
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                This kicked off the start of my many adventures that I had in Korea.

                <br/>
                <br/> */}




                <Box textAlign="center" fontSize="2.0em" fontWeight="bold">
                    Top Five Foods
                </Box>
                <br/>
                <Box textAlign="left" fontSize="1.15em" fontWeight="bold">
                    5. Malatang
                </Box>
                Malatang is not actually a Korean dish, but a Chinese dish, similar to a hot pot dish but flavored with Sichuan pepper and dried chili pepper. 
                This was my first time trying this dish, and it was definitely very memorable because of the long-lasting effect it had on my tongue. 
                <br/>
                <br/>
                I realized afterwards that this numbing sensation that I felt on my tongue comes mainly from the Sichuan peppers, a key ingredient in this dish.
                <br/>
                <br/> 
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/malatang.jpg" 
                    alt="malatang"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic"><b>“Hydroxy-alpha-sanshool”</b> is a molecule found in plants and it is believed to be responsible for this numbing and tingling sensation.</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                There are many local stores that sell Malatang across Seoul. 
                
                This specific dish was served near Gangnam area in Seoul, at a restaurant called 중경마라탕 강남역점. 
                <br/>
                <br/>
                <Box textAlign="left" fontSize="1.15em" fontWeight="bold">
                    4. Yookhwe Nakji Tangtang-ee (sliced raw beef with chopped raw baby octopus) 
                </Box>
                This unique dish consisted of sliced red raw beef, with live baby octopus on top. A side of egg yolk is also a very popular pick. 
                <br/>
                <br/>
                Personally, I thought this was a quirky dish, and the squid is RAW to the point that it is still alive and slightly moving. The taste, however, was amazing, and the raw egg yolk was like the cherry on top. 

            </Box>
        
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/beefSquid.jpg" 
                    alt="Yookhwe"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">Yes, the squid moves on the plate</Text>
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                Again, there are many local restaurants across Seoul that sell this dish. I would definitely try this dish again in the future when given the opportunity.
                <br/>
                <br/>
                <Box textAlign="left" fontSize="1.15em" fontWeight="bold">
                    3. Jogae-Gui (Grilled Clams)
                </Box>
                This may not sound very appetizing, and it may not be if you are not a seafood lover. 
                I thought it was one of the best clams I ever had, and the rest of the seafood was super fresh as well. 
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/seafood.jpg" 
                    alt="Jogae-Gui"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">pre-grilled</Text>
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                The clams were from a local restaurant called 해저수산 (Seabed Sliced Raw Fish) in Busan, and it was truly a hidden local gem. 
                <br/>
                <br/>
                <Box textAlign="left" fontSize="1.15em" fontWeight="bold">
                    2. Jokbal (Pork Feet)
                </Box>
                This could easily have taken the top spot. 
                The restaurant specializes in pork feet, and serves them with an array of traditional Korean side dishes. 
                The meat was very soft and tender, and the side dishes, including garlic, lettuce, and corn cheese, made this meal complete. 
                It was an experience that could only be had in Korea. 
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/porkFeet.jpg" 
                    alt="Pork Feet"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic"> <b>"banchan"</b> - a small Korean side dish <br/> there were many <b>banchans</b> with this meal</Text>
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                This dish was served at a restaurant in Gangnam, Seoul called 완미족발 (Wanmi Jokbal). 

            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/sohee.jpg" 
                    alt="Pork Feet"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">Thank you So-hee noona and her then boyfriend (now husband) for bringing me to this amazing place</Text>
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                
                <Box textAlign="left" fontSize="1.15em" fontWeight="bold">
                    1. Gamjatang (Pork Back-Bone Soup)
                </Box>

                This is the one—a true masterpiece. 
                Gamjatang isn't usually my first choice when craving Korean food, but I couldn't stop drinking the soup. 
                It struck the perfect balance of spice, thickness, and savoriness. 
                The meat had an incredible texture, soft but still firmly attached to the bone, not floating around in the soup.
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/gamjatang.jpg" 
                    alt="Pork Feet"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">c'mon somebody</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                This dish was served at the Sindonggung Gamjatang (신동궁감자탕) at the Myeongdong (명동) branch.
  
                
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/gamjatangYJ.jpg" 
                    alt="Pork Feet"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">Thank you Yongjin for bringing me here</Text>

            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="center" fontSize="2.0em" fontWeight="bold">
                        Top 3 Memories
                </Box>
                <br/>
                <Box textAlign="left" fontSize="1.15em" fontWeight="bold">
                    3. Lotte World
                </Box>
                Visiting Lotte World was on my bucket list for my trip to Korea, and going there with some of my college friends was the icing on the cake. 
                This massive amusement park offered thrilling rides at reasonable prices. 
                Although the park was overall crowded and the sun was beating down on us, we made the most of our time. 
                And of course, some friends and I decided to rent school uniforms to relive our youth, resulting in some fun and goofy pictures.
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/lotteImage.jpg" 
                    alt="Inside Lotte World"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">A glance inside!</Text>
            </Box>
            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/lotteUniform.JPG" 
                    alt="Wearing our school uniforms at Lotte World"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">In our school uniforms</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.15em" fontWeight="bold">
                    2. Bukhansan National Park
                </Box>
                About 10 miles north of Korea’s capital lies Bukhansan National Park, 
                which includes beautiful hiking trails and views that look down on Seoul as well as across the border to North Korea. 
                There are many hiking trails available, and each come with its own difficulty. 
                I hiked with my cousins on an easier trail, and the view at the top was breathtaking. 
                I had a tough time choosing the pictures that best captured this experience, but I finally settled on the ones below.
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/hikingPic.jpg" 
                    alt="hiking Bukhansan with my cousins"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">with the cuzssss</Text>
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/viewMT.jpg" 
                    alt="view from the summit of Bukhansan Mountain"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">view of Seoul at the summit</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.15em" fontWeight="bold">
                    1. South Korea vs Peru Friendly Match
                </Box>
                As a huge soccer fan, attending a Korea National team game of any level was a dream come true for me. 
                Experiencing it in Korea was beyond my wildest dreams. 
                Doing so with my friends was absolutely unforgettable. 
                The atmosphere at Busan Asiad Main Stadium was mind-blowing, and we were only at a friendly game. 
                Years down the road, I think I’ll still remember the exhilarating emotions of cheering on our national team with the rest of the 50,000 fans present.
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/outsideStadium.JPG" 
                    alt="view from outside the stadium"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">the line outside the stadium</Text>
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/insideStadium.JPG" 
                    alt="view from outside the stadium"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">inside the stadium</Text>
            </Box>

            <Box mx="15%" textAlign="center">
                <Image 
                    src="images/BlogImages/Korea/selfieSoccer.JPG" 
                    alt="view from outside the stadium"  
                    mt="20px" 
                    w={{ base: "350px", sm: "80%" }}  
                    minWidth="250px" 
                    maxW="45%"
                    h="auto" 
                    display="block"
                    mx="auto"
                    borderRadius="15px"
                />
                <Text mt="4" fontStyle="italic">Korea may have lost but our hearts were won</Text>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="center" fontSize="2.0em" fontWeight="bold">
                    Vlog
                </Box>
                Lastly, I created a short vlog that captures some precious memories in Busan, South Korea. 

            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
                <Box className="image-container">
                    <a href="https://youtu.be/ZMgqc3sUB5I?si=azz9xBjN6Kw9Jd38" target="_blank" rel="noopener noreferrer">
                        <Image 
                            src="images/BlogImages/Korea/youtubeBusan.jpg" 
                            alt="Vlog thumbnail" 
                            className="image" 
                            width= "350px"
                            height="auto"
                        />
                        <Box className="overlay">
                            <Image src="images/BlogImages/Korea/Youtube_logo.png" alt="YouTube Logo" className="youtube-logo" />
                        </Box>
                    </a>
                </Box>
            </Box>

            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="center" fontSize="2.0em" fontWeight="bold">
                    My Final Thoughts
                </Box>
                If you have reached this far into my blog, thanks for reading! 
                I hope you enjoyed reading this blog as much as I did reminiscing about these special places and moments.
                <br/>
                <br/>
                In the past, I resented my culture due to my parents' constant nagging and strict disciplines. 
                Now, I wish I had embraced my heritage more fully, staying true to the country that shaped a part of me. 
                After all, this is where my roots lie.
                <br/>
                <br/>
                Maybe I’ll write more blogs on my travels to protect moments like these. 
            
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

export default KoreaBlog