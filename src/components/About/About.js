import React from 'react';
import FallingParticles from './Snow/FallingParticles';
import DisappearingText from './DisappearText';
import profPic from './ProfilePics/profPicLarge.jpg';
import AboutLinks from './AboutLinks';

const About = () => {
    return (
        <div style={styles.container}>
            <FallingParticles />
            <div style={styles.content}>
                <div style={styles.leftContent}>
                    <h1>About Me</h1>
                    <p>
                        <br /> Hi! I’m Samuel, a third-year studying Computer Science at Cornell University with a minor in Artificial Intelligence.
                        <br />
                        <br /> Currently, my interests lie in software engineering, web development, and robotics.
                        <br />
                        <br /> In my free time, I love to golf 🏌️‍♂️, travel 🌍, and see snow fall ☃️.
                        <br />
                        <br /> Feel free to reach out anytime for a chat!
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
};

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
        // overflowY: "auto", // Allow the container to scroll vertically if content overflows
        boxSizing: "border-box", // Ensure padding is included in the height calculation
    },
    content: {
        display: "flex",
        maxWidth: "800px", // Adjust the max width of the content
        padding: "0 20px", // Add padding around the content
        margin: "0 auto", // Center the content horizontally
        flexDirection: "row", // Default to row layout
        alignItems: "center",
        boxSizing: "border-box", // Ensure padding is included in the width calculation
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
        alignItems: "center",
        paddingTop: '20px', // Add padding at the top
    },
    imageContainer: {
        marginBottom: "20px", // Add space between image and links
        marginLeft: "10px", // Add margin left
    },
    image: {
        width: '250px', // Adjust the size of the image as needed
        height: 'auto',
        borderRadius: 200, // Optional: makes the image round 
        marginRight: "10px", // Small margin to the right
    },
    linksContainer: {
        display: "flex",
        flexDirection: "column", // Stack the links vertically
        alignItems: "center",
        marginTop: "10px", // Add some space between the image and the links
    },
    particleCanvas: {
        position: "absolute",
        bottom: 0,
        left: 0,
    },
    // Add media query for responsive design
    '@media (max-width: 768px)': {
        content: {
            flexDirection: "column", // Stack the content vertically
            alignItems: "center", // Center the items horizontally
            height: "auto", // Ensure the content takes up the necessary height
        },
        rightContent: {
            alignItems: "center", // Center the right content items horizontally
            marginTop: "20px", // Add some space between the left and right content
        },
        image: {
            marginRight: 0, // Remove right margin for the image
            marginBottom: "10px", // Add bottom margin for spacing
        },
    },
};

export default About;
