import React from 'react';
import FallingParticles from './FallingParticles';
import DisappearingText from './DisappearText';
import profPic from './profPicLarge.jpg';
import AboutLinks from './AboutLinks';

const About = () => {
    return ( 
        <div style={styles.container}>
            <FallingParticles />
            <div style={styles.content}>
                <div style={styles.leftContent}>
                    <h1>About Me</h1>
                    <p>
                        <br/>
                        Hi! I’m Samuel, a third-year studying Computer Science at Cornell University with a minor in Artificial Intelligence.                    
                        <br/>
                        <br/> Currently, my interests lie in software engineering, web development, and robotics.
                        <br/>
                        <br/> In my free time, I love to golf 🏌️‍♂️, travel 🌍, and see snow fall ☃️. 
                        <br/>
                        <br/> Feel free to reach out anytime for a chat!
                    </p>
                    <DisappearingText />
                </div>
                <div style={styles.rightContent}>
                    <div style={styles.imageContainer}>
                        <img src={profPic} alt="About Me" style={styles.image} />
                    </div>
                    <div style={styles.linksContainer}>
                        <AboutLinks />
                    </div>
                </div>
            </div>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "lightblue",
        width: "100vw",
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", // Align items vertically
        paddingTop: '50px', // Add some padding at the top
        position: "relative",
    },
    content: {
        display: "flex",
        maxWidth: "800px", // Adjust the max width of the content
        padding: "0 20px", // Add padding around the content
        margin: "0 auto", // Center the content horizontally
    },
    leftContent: {
        flex: 1, // Take up remaining space
        textAlign: "left", // Align content to the left
        zIndex: 1, // Ensure the content is above the particles
    },
    rightContent: {
        flex: 1, // Take up remaining space
        textAlign: "right", // Align content to the right
        zIndex: 1, // Ensure the content is above the particles
        display: "flex",
        flexDirection: "column", // Stack elements vertically
        marginTop: "-50px"
    },
    imageContainer: {
        marginBottom: "20px", // Add space between image and links
        marginRight: "-20px", // this is to control the horizontal location of image
    },
    image: {
        width: '250px', // Adjust the size of the image as needed
        height: 'auto',
        borderRadius: 200 // Optional: makes the image round 
    },
    linksContainer: {
        display: "flex",
        alignItems: "center",
        marginLeft: "auto", // Push the links to the right
    },
    particleCanvas: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
};

export default About;
