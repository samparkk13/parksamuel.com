import { Box, Text, Heading, Divider } from '@chakra-ui/react';
import './About.css';

const About = () => {
    return (
        <Box className="about-page-bg">
            <Box className="about-card">

                {/* About Me */}
                <Box className="about-section">
                    <Heading className="section-heading">about me</Heading>
                    <Text className="about-blurb">
                        Hi! I'm Sam, a student studying Computer Science at Cornell University with an intended minor in Artificial Intelligence.
                        Currently, my interests lie in software engineering, but I am also enthusiastic about fintech and meteorology.
                    </Text>
                    <Box className="main-links">
                        <a className="main-link" href="https://github.com/samparkk13" target="_blank" rel="noopener noreferrer">github</a>
                        <span className="link-sep"> · </span>
                        <a className="main-link" href="https://www.linkedin.com/in/samparkk13/" target="_blank" rel="noopener noreferrer">linkedin</a>
                        <span className="link-sep"> · </span>
                        <a className="main-link" href="mailto:sam13park@gmail.com">email</a>
                    </Box>
                </Box>

                <Divider className="section-divider" />

                {/* Education */}
                <Box className="about-section">
                    <Heading className="section-heading">education</Heading>
                    <Box className="section-list">
                        <Box className="section-row">
                            <Text className="section-year">2022 — 2026</Text>
                            <Box className="section-info">
                                <Text className="section-org">Cornell University</Text>
                                <Text className="location-text">Ithaca, NY</Text>
                                <Text className="degree-text">Bachelor of Science in Computer Science</Text>
                                <Box className="badge-row">
                                    {['AI', 'Robotics', 'Algorithms', 'Databases'].map(s => (
                                        <span key={s} className="skill-badge">{s}</span>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className="section-row" mt={4}>
                            <Text className="section-year">relevant coursework</Text>
                            <Box className="section-info">
                                {['CS 4820: Analysis of Algorithms', 'CS 3780: Machine Learning', 'CS 4414: Systems Programming', 'CS 4782: Deep Learning', 'CS 3700: Artificial Intelligence', 'CS 2110: Object-Oriented Programming and Data Structures'].map(course => (
                                    <Text key={course} className="comment-text">— {course}</Text>
                                ))}
                            </Box>
                        </Box>
                <br/>
                <Box className="section-row" mt={4}>
                            <Text className="section-year">other coursework</Text>
                            <Box className="section-info">
                                {['ECON 4210: Money & Credit', 'EAS 3420: Atmospheric Dynamics'].map(course => (
                                    <Text key={course} className="comment-text">— {course}</Text>
                                ))}
                            </Box>
                        </Box>

                <Divider className="section-divider" />

                {/* Experience */}
                <Box className="about-section">
                    <Heading className="section-heading">experience</Heading>
                    <Box className="section-list">

                        <Box className="section-row">
                            <Text className="section-year">2026 — 2026</Text>
                            <Box className="section-info">
                                <Text className="section-org">Robinhood Markets</Text>
                                <Text className="location-text">New York, NY</Text>
                                <Text className="degree-text">Incoming Software Engineer Intern - Backend</Text>
                                <Text className="comment-text">// money movement</Text>
                            </Box>
                        </Box>

                        <Box className="section-row">
                            <Text className="section-year">2025 — 2025</Text>
                            <Box className="section-info">
                                <Text className="section-org">Walmart Global Tech</Text>
                                <Text className="location-text">Sunnyvale, CA</Text>
                                <Text className="degree-text">Software Engineer Intern</Text>
                                <Text className="comment-text">// search engine & marketing</Text>
                                <Box className="badge-row">
                                    {['Python', 'SQL', 'Azure'].map(s => (
                                        <span key={s} className="skill-badge">{s}</span>
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                        <Box className="section-row">
                            <Text className="section-year">2024 — 2024</Text>
                            <Box className="section-info">
                                <Text className="section-org">Manna Hot Bagel Inc</Text>
                                <Text className="location-text">Brooklyn, NY</Text>
                                <Text className="degree-text">Software Engineer Intern</Text>
                                <Text className="comment-text">// frontend + web development</Text>
                                <Box className="badge-row">
                                    {['React', 'JavaScript', 'CSS'].map(s => (
                                        <span key={s} className="skill-badge">{s}</span>
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>

                <Divider className="section-divider" />

                {/* Projects */}
                <Box className="about-section">
                    <Heading className="section-heading">projects</Heading>
                    <Box className="section-list">

                        <Box className="section-row">
                            <Text className="section-year">2025</Text>
                            <Box className="section-info">
                                <Text className="section-org">Portfolio Analysis Bot</Text>
                                <Text className="comment-text">// LLM-based financial portfolio analysis through natural conversation</Text>
                                <Box className="badge-row">
                                    {['Python', 'LangChain', 'Flask', 'JavaScript', 'HTML/CSS'].map(s => (
                                        <span key={s} className="skill-badge">{s}</span>
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                        <Box className="section-row">
                            <Text className="section-year">2025</Text>
                            <Box className="section-info">
                                <Text className="section-org">Settlers of Catan</Text>
                                <Text className="comment-text">// terminal-based virtual Settlers of Catan game supporting up to 4 players</Text>
                                <Box className="badge-row">
                                    {['OCaml', 'VSCode', 'Git'].map(s => (
                                        <span key={s} className="skill-badge">{s}</span>
                                    ))}
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>

            </Box>
        </Box>
    );
};

export default About;
