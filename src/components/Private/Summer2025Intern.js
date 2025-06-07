import { Heading, Box, Flex, Image, List, ListItem } from "@chakra-ui/react";

const Summer2025Intern = () => {

    return (
        
        <Box bg="lightblue" maxW="100vw" minH="100vh" overflowY="auto" overflowX = "hidden" p={4} d="flex" flexDirection="column" alignItems="center">
            <Heading align="center" fontSize="2.5rem" mt="20mm">
                A Summary of my Internship Hunt for Summer 2025
            </Heading>
            <br />
            <br />
            <Heading align="center">
                July 2024 - May 2025
            </Heading>

            <Box textAlign="left" mt="30px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                Hi there! I'm excited to share an overview of my 2025 summer internship recruitment journey.
                Here, I’ll walk you through the recruitment processes for the some companies I applied to or interviewed with, along with my personal insights throughout. 
                In total, I submitted 206 applications, all for software engineering intern roles. 
                I hope my experiences can offer some helpful perspective on the recruiting process, but feel free to reach out if you have any questions about anything!
            </Box>
            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    Walmart Global Tech
                </Box>
                <Box mx="0%" display="flex" justifyContent="flex-start">
                    <Image 
                        src="images/Logos/WalmartGlobalTech.JPG"
                        alt="Walmart Logo"
                        mt="20px" 
                        w={{ base: "350px", sm: "30%" }}
                        minWidth="200px"  
                        maxW="30%" 
                        h="auto" 
                        display="block"
                        borderRadius= "15px"
                    />
                </Box>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Position:
                    </Box>
                    <Box fontWeight="medium">
                        2025 Summer Intern: Software Engineer II
                    </Box>
                    {/* <Box fontWeight="bold" ml="auto" mr = {6} textAlign="right">
                        Location: 
                    </Box>
                    <Box fontWeight="medium">
                        Sunnyvale, CA
                    </Box> */}

                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Location:
                    </Box>
                    <Box fontWeight="medium">
                        Sunnyvale, CA
                    </Box>

                </Flex>

                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Timeline:
                    </Box>
                    <Box fontWeight="medium">
                        Applied online without referral (05/05) <span>&rarr;&nbsp;</span> 
                        completed candidate assessment (05/07) <span>&rarr;&nbsp;</span> 
                        received Karat interview invitation (05/22) <span>&rarr;&nbsp;</span> 
                        completed first round technical interview via Karat (05/30) <span>&rarr;&nbsp;</span> 
                        received final round interview invitation (06/04) <span>&rarr;&nbsp;</span> 
                        completed final round interview with senior SWE (06/05) <span>&rarr;&nbsp;</span> 
                        passed interviews but on hiring pause (07/01) <span>&rarr;&nbsp;</span> 
                        <b>RECEIVED OFFER!</b> (09/26)
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Thoughts:
                    </Box>
                    <Box fontWeight="medium">
                        This was my first interview process for summer 2025 and the process as a whole wasn't too difficult from a technical POV. 
                        The process definitely gave me a morale boost after not being able to land an internship all throughout sophomore year for the summer. 
                        The Karat interview were LC easy / medium and final round was all behavioral. I was able to get through the first technical question 
                        and the second one I had the pseudocode down and about half of the function written up before they called time. The behavioral round was
                        pretty chill with a senior SWE working at WGT. 
                        <br/>
                        <br/>
                        One thing to note: the company overall moves pretty slow, maybe because they were also hiring very early on compared to other companies.
                        My recruiter also had a very slow response time and was out of office multiple times when I tried reaching out. I received my offer in September
                        after beginning to recruit in them in May, but I guess I learned that the market is pretty tough right now and I am honestly just thankful
                        for the opportunity. 
                    </Box>
                </Flex>
            </Box>



            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    The Trade Desk
                </Box>
                <Box mx="0%" display="flex" justifyContent="flex-start">
                    <Image 
                        src="images/Logos/theTradeDesk.jpeg"
                        alt="The Trade Desk Logo"
                        mt="20px" 
                        w={{ base: "350px", sm: "30%" }}
                        minWidth="200px"  
                        maxW="30%" 
                        h="auto" 
                        display="block"
                        borderRadius= "15px"
                    />
                </Box>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Position:
                    </Box>
                    <Box fontWeight="medium">
                        2025 Software Engineering Summer Intern
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Location:
                    </Box>
                    <Box fontWeight="medium">
                        New York, NY
                    </Box>

                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Timeline:
                    </Box>
                    <Box fontWeight="medium">
                        Applied (06/24) <span>&rarr;&nbsp;</span> 
                        Received OA (07/20) <span>&rarr;&nbsp;</span> 
                        Attended Open House (07/23) <span>&rarr;&nbsp;</span> 
                        Completed OA (08/03) <span>&rarr;&nbsp;</span> 
                        <b>Ghosted</b>
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Thoughts: 
                    </Box>
                    <Box fontWeight="medium">
                        I was actually invited to their open house, where I was exposed to the company and many of its workers.
                        The open house was actually pretty awesome: workplace smack in midtown NYC, good benefits, and great people. 
                        <br/>
                        <br/>
                        I received a 423/600 on the codesignal, probably the reason why I got ghosted for a company like here. I kind of regretted
                        my overall performance on this OA because I know that I could have performed much better with more practice and preparation. 
                        But it was one of my earlier processes, and I knew that I could improve on my mistakes from this process.
                        <br/>
                        <br/>
                        I will definitely be applying here again once new grad positions open up, I think the work that the company did and 
                        the work-life balance was amazing. 

                        
                    </Box>
                </Flex>
            </Box>



            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    Palantir
                </Box>
                <Box mx="0%" display="flex" justifyContent="flex-start">
                    <Image 
                        src="images/Logos/PalantirLogo.jpeg"
                        alt="Palantir Logo"
                        mt="20px" 
                        w={{ base: "350px", sm: "30%" }}
                        minWidth="200px"  
                        maxW="30%" 
                        h="auto" 
                        display="block"
                        borderRadius= "15px"
                    />
                </Box>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Position:
                    </Box>
                    <Box fontWeight="medium">
                        Software Engineer, Internship
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Location:
                    </Box>
                    <Box fontWeight="medium">
                        Various Locations
                    </Box>

                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Timeline:
                    </Box>
                    <Box fontWeight="medium">
                        Received referral (07/08) <span>&rarr;&nbsp;</span> 
                        Applied online with referral (07/11) <span>&rarr;&nbsp;</span> 
                        Received OA (07/16) <span>&rarr;&nbsp;</span> 
                        Completed OA - passed 15/15 test cases for first question, 3/15 test cases for second question, and 9/9 test cases for last question (07/20) <span>&rarr;&nbsp;</span> 
                        <b>Rejected</b> (07/25)
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Thoughts:
                    </Box>
                    <Box fontWeight="medium">
                        I wish I could have moved on a <i>little</i> more in this process, I thought I had a decent shot to move at least to the interviews 
                        and I was fairly proud of how I did on the OA. I wanted to make it somewhat further in the process for the 
                        experience and to practice but it is what it is. I honestly would not have gotten the OA if it wasn't for the referral.
                        <br/>
                        <br/>
                        I heard the Palantir recruitment was notoriously long, so I wasn't too disappointed. Definitely was a great 
                        learning experience, andI kept on putting my head down and applying.
                    </Box>
                </Flex>
            </Box>



            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    JP Morgan
                </Box>
                <Box mx="0%" display="flex" justifyContent="flex-start">
                    <Image 
                        src="images/Logos/JPMorganLogo.jpeg"
                        alt="J.P. Morgan Logo"
                        mt="20px" 
                        w={{ base: "350px", sm: "30%" }}
                        minWidth="200px"  
                        maxW="30%" 
                        h="auto" 
                        display="block"
                        borderRadius= "15px"
                    />
                </Box>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Position:
                    </Box>
                    <Box fontWeight="medium">
                        2025 Software Engineer Program - Summer Internship – United States
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Location:
                    </Box>
                    <Box fontWeight="medium">
                        Various Locations
                    </Box>

                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Timeline: 
                    </Box>
                    <Box fontWeight="medium">
                        Applied online (07/23) <span>&rarr;&nbsp;</span> 
                        received OA (07/23) <span>&rarr;&nbsp;</span> 
                        completed OA - passed 15/15 test cases for both questions (07/26) <span>&rarr;&nbsp;</span> 
                        <b>Rejected</b> (09/25)
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Thoughts:
                    </Box>
                    <Box fontWeight="medium">
                        I applied with referral at first, but I bombed the OA + the OA was super difficult. 
                        Honestly, I was in disbelief, so I reapplied with another email w/out a referral and received the OA again, which was much much easier. 
                        I got a perfect score and solved it in pretty good time complexity too IMO. I guess a lot of others got perfect OA score
                        too with resumes that the company liked more because I got 
                        rejected for the CFG hackathon even after having a great OA.
                    </Box>
                </Flex>
            </Box>




            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    Salesforce
                </Box>
                <Box mx="0%" display="flex" justifyContent="flex-start">
                    <Image 
                        src="images/Logos/Salesforce.jpg"
                        alt="J.P. Morgan Logo"
                        mt="20px" 
                        w={{ base: "350px", sm: "30%" }}
                        minWidth="200px"  
                        maxW="30%" 
                        h="auto" 
                        display="block"
                        borderRadius= "15px"
                    />
                </Box>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Position:
                    </Box>
                    <Box fontWeight="medium">
                        Summer 2025 Intern - Software Engineer
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Location:
                    </Box>
                    <Box fontWeight="medium">
                        Various Locations
                    </Box>

                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Timeline: 
                    </Box>
                    <Box fontWeight="medium">
                        Applied online with referral (08/06) <span>&rarr;&nbsp;</span> <b>Ghosted</b>
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Thoughts:
                    </Box>
                    <Box fontWeight="medium">
                        I applied with referral, and I was hoping that I would hear back sometime during the fall recruitment cycle.
                        However, I didn't ever hear back from them at all, no rejection email either. Not too disappointed, as Salesforce 
                        is a great company, but I wish I was able to get the OA at least for the experience.
                    </Box>
                </Flex>
            </Box>




            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    Workday
                </Box>
                <Box mx="0%" display="flex" justifyContent="flex-start">
                    <Image 
                        src="images/Logos/workday.jpg"
                        alt="J.P. Morgan Logo"
                        mt="20px" 
                        w={{ base: "350px", sm: "30%" }}
                        minWidth="200px"  
                        maxW="30%" 
                        h="auto" 
                        display="block"
                        borderRadius= "15px"
                    />
                </Box>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Position:
                    </Box>
                    <Box fontWeight="medium">
                        Software Development Engineer Intern
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Location:
                    </Box>
                    <Box fontWeight="medium">
                        Atlanta, GA
                    </Box>

                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Timeline: 
                    </Box>
                    <Box fontWeight="medium">
                        Applied online with referral (10/01) <span>&rarr;&nbsp;</span> 
                        received OA (10/20) <span>&rarr;&nbsp;</span> 
                        completed OA (10/25) <span>&rarr;&nbsp;</span> 
                        passed resume and OA (12/12) <span>&rarr;&nbsp;</span> 
                        1st round hiring manager interview (12/18) <span>&rarr;&nbsp;</span> 
                        2nd round technical interview (12/20) <span>&rarr;&nbsp;</span> 
                        <b>Rejected</b> (01/07)
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Thoughts:
                    </Box>
                    <Box fontWeight="medium">
                        I remember the OA consisting of 3 questions, all LC easy / medium. 
                        The first one was a dictionary question, the second one was a FactorSum, and the last questions was a variation of sliding window. 
                        I passed all the test cases. The 1st round interview was a pretty chill behavioral interview with the team's SDE manager. All behavioral
                        questions and STAR responses. The second round was a technical interview with a SDE on the team, and we went through LC-style coding 
                        questions. I was able to get through 1st problem and solve 2nd problem but not most efficiently. both problems seemed to be LC easy/mid questions.
                        <br/>
                        <br/>
                        Honestly, looking back at this recruitment process I think there were definitely areas that I could have brushed up on, but the interview experience
                        nice to have under my belt. Mock interviews and having better prepped answers to behavioral questions that align better with the company values 
                        were some of the takeaways that I had from this process.
                    </Box>
                </Flex>
            </Box>


            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    Google
                </Box>
                <Box mx="0%" display="flex" justifyContent="flex-start">
                    <Image 
                        src="images/Logos/GoogleLogo.jpeg"
                        alt="Google Logo"
                        mt="20px" 
                        w={{ base: "350px", sm: "30%" }}
                        minWidth="200px"  
                        maxW="30%" 
                        h="auto" 
                        display="block"
                        borderRadius= "15px"
                    />
                </Box>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Position:
                    </Box>
                    <Box fontWeight="medium">
                        Software Engineering Intern, BS, Summer 2025
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Location:
                    </Box>
                    <Box fontWeight="medium">
                        Various Locations
                    </Box>

                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Timeline:
                    </Box>
                    <Box fontWeight="medium">
                        Applied online with referral (10/01) <span>&rarr;&nbsp;</span> <b>Rejected</b>
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Thoughts:
                    </Box>
                    <Box fontWeight="medium">
                        I did not hear from Google after applying right when the application opened in October. 
                        Again, not disappointed with the result, as Google is another great company. Hopefully, new grad recruiting
                        for Google will be different *fingers crossed*.
                    </Box>
                </Flex>
            </Box>


            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    Amazon
                </Box>
                <Box mx="0%" display="flex" justifyContent="flex-start">
                    <Image 
                        src="images/Logos/amazonLogo.jpg"
                        alt="Google Logo"
                        mt="20px" 
                        w={{ base: "350px", sm: "30%" }}
                        minWidth="200px"  
                        maxW="30%" 
                        h="auto" 
                        display="block"
                        borderRadius= "15px"
                    />
                </Box>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Position:
                    </Box>
                    <Box fontWeight="medium">
                        Software Development Engineer Internship - 2025 (US)
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Location:
                    </Box>
                    <Box fontWeight="medium">
                        Seattle, WA
                    </Box>

                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Timeline:
                    </Box>
                    <Box fontWeight="medium">
                        Applied online with referral (10/21) <span>&rarr;&nbsp;</span>
                        Shortlisted from OA (12/12) <span>&rarr;&nbsp;</span>
                        <b>Rejected</b> (05/08)
                        

                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Thoughts:
                    </Box>
                    <Box fontWeight="medium">
                        I took the 2-hour OA for Amazon over the summer, and tbh I don't remember much from it except for the fact that it was pretty long.
                        I remember passing 15/15 test cases on the first question and 10/15 test cases on the second, but that's all I can remember. 
                        The OA also had a lengthy behavioral section. 
                        <br />
                        <br />
                        After about 2 months of silence, I heard from a recruiter that I had been moved onto the final interview because I passed the 
                        OA portion from when I took it over the summer. For that next month, I was on the LC grind, waiting to hear back to schedule my final 
                        round interview. However, I ended up not hearing back from the scheduling team, even after multiple attempts to reach out to my recruiter
                        and the recruiter saying to stay patient as the scheduling team was busy. 
                        <br />
                        <br />
                        This recruitment process was a pretty big disappointment, especially after preparing for 
                        months for the final round interview 
                        expecting it to get scheduled. I guess a positive from this experience that 
                        I can take away is that I was able to brush up on my DSA skills lol. 
                    </Box>
                </Flex>
            </Box>



            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    Github
                </Box>
                <Box mx="0%" display="flex" justifyContent="flex-start">
                    <Image 
                        src="images/Logos/githubLogo.jpeg"
                        alt="Google Logo"
                        mt="20px" 
                        w={{ base: "350px", sm: "30%" }}
                        minWidth="200px"  
                        maxW="30%" 
                        h="auto" 
                        display="block"
                        borderRadius= "15px"
                    />
                </Box>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Position:
                    </Box>
                    <Box fontWeight="medium">
                        Software Engineering Intern
                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em" alignItems="center">
                    <Box fontWeight="bold" mr={6}>
                        Location:
                    </Box>
                    <Box fontWeight="medium">
                        Remote
                    </Box>

                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Timeline:
                    </Box>
                    <Box fontWeight="medium">
                        Applied online (11/06) <span>&rarr;&nbsp;</span>
                        Received OA (12/10) <span>&rarr;&nbsp;</span>
                        Completed OA (12/17) <span>&rarr;&nbsp;</span>
                        Passed resume and OA (1/03) <span>&rarr;&nbsp;</span>
                        Behavioral screen with recruiter (1/07) <span>&rarr;&nbsp;</span>
                        Final round interview (1/21) <span>&rarr;&nbsp;</span>
                        <b>Rejected</b> (02/21)

                    </Box>
                </Flex>
                <br/>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="bold" mr={6}>
                        Thoughts:
                    </Box>
                    <Box fontWeight="medium">
                        The recruiter I talked to during the behavioral screen was one of the most chill dudes I talked to.
                        He was very nice and relaxed, making this screen a very smooth process. 
                        <br/>
                        <br/>
                        I heard back about the final round interview a few days afterwards, which was a 45-minute behavioral and a 45-minute technical interview back-to-back.
                        The behavioral interview were just situational questions bombarded at me and I tried to answer them as best as I could from 
                        my knowledge and past experience. The technical interview was much more chill and I was given a LC style question, which I was able to solve in 
                        the given time. I had some time left over to optimize my solution, but I ran out of time before I was able to cook one up. The interviewer was 
                        really nice though and as I was implementing my solution, I felt like I was able to really explain my thought process well to her. 
                        <br/>
                        <br/>
                        Even though I wasn't able to pass the final round interview, 
                        it was a great recruitment process with fast response times and good communication. 
                        All the workers seemed very kind and this was a company that I would love to recruit for again if possible 
                        in the future.

                    </Box>
                </Flex>
            </Box>
            <br/>
            <br/>
            <br/>

            <Box textAlign="left" mt="30px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Box textAlign="left" fontSize="1.5em" fontWeight="bold">
                    Concluding Thoughts
                </Box>
                This doesn't capture every single application I submitted or reflect the hours spent preparing, 
                whether it was grinding LC, looking for different roles, or navigating the ups and downs of internship hunting. 
                But I’ve tried to highlight the companies that had the most impact on me or taught me something meaningful throughout the process. 
                Below are a few other companies I applied to but either didn’t hear back from or was ultimately rejected.
            </Box>
            <br/>



            <Box textAlign="left" mt="60px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontSize="1.5em" fontWeight="bold" mr={6}>
                        Other Notable Companies I applied to:
                    </Box>
                </Flex>
                <Flex textAlign="left" fontSize="1.0em">
                    <Box fontWeight="medium">
                        <List styleType="disc">
                            <ListItem>Apple</ListItem>
                            <ListItem>Wells Fargo</ListItem>
                            <ListItem>Tiktok</ListItem>
                            <ListItem>Capital One</ListItem>
                            <ListItem>Roblox</ListItem>
                            <ListItem>Microsoft</ListItem>
                            <ListItem>Paypal</ListItem>
                            <ListItem>Goldman Sachs</ListItem>
                            <ListItem>NVIDIA</ListItem>
                            <ListItem>LinkedIn</ListItem>
                            <ListItem>Netflix</ListItem>
                            <ListItem>Datadog</ListItem>
                            <ListItem>Bloomberg (w/referral)</ListItem>
                            <ListItem>Uber</ListItem>
                            <ListItem>Meta</ListItem>
                            <ListItem>Niantic</ListItem>
                            <ListItem>OpenAI</ListItem>
                            <ListItem>Databricks</ListItem>
                            <ListItem>Spotify</ListItem>
                            <ListItem>DoorDash</ListItem>
                            <ListItem>Robinhood</ListItem>
                            <ListItem>SpaceX</ListItem>
                            <ListItem>DoorDash</ListItem>
                            <ListItem>Notion</ListItem>
                            <ListItem>Twitch</ListItem>
                            
                        </List>
                    </Box>
                </Flex>
            </Box>

            <Box textAlign="left" mt="30px" mx="15%" fontWeight="medium" fontFamily="'Times New Roman', sans-serif" lineHeight="2.0">
                Let me know if you have any questions about any of the above recruitment processes and I will try to answer to my best knowledge and memory!
            </Box>

        </Box>
    );
};

export default Summer2025Intern