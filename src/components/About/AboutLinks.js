import React from 'react';
import { FaEnvelope, FaYoutube } from 'react-icons/fa';

const AboutLinks = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <a href="mailto:sp994@cornell.com" style={{ margin: '10px 0', textDecoration: 'none', color: '#333', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FaEnvelope size={24} style={{ cursor: 'pointer' }} /> 
                <span style={{ marginLeft: '8px' }}>sam13park@gmail.com</span>
            </a>
           
            <a href="https://www.youtube.com/@samparkk13" target="_blank" rel="noopener noreferrer" style={{ margin: '10px 0', textDecoration: 'none', color: '#333', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <FaYoutube size={24} style={{ cursor: 'pointer' }} /> 
                <span style={{ marginLeft: '8px' }}>YouTube</span>
            </a>
        </div>
    );
}

export default AboutLinks;


// import React from 'react';
// import { FaEnvelope } from 'react-icons/fa';
// import { GrPersonalComputer } from "react-icons/gr";

// const AboutLinks = () => {
//     return (
//         <div style={styles.container}>
//             <a href="mailto:sp994@cornell.com" style={styles.link}>
//                 <FaEnvelope size={24} style={styles.icon} /> 
//                 <span style={styles.text}>sam13park@gmail.com</span>
//             </a>
           
//             <a href="https://samparkk13.github.io/" target="_blank" rel="noopener noreferrer" style={styles.link}>
//                 <GrPersonalComputer size={24} style={styles.icon} /> 
//                 <span style={styles.text}>Portfolio</span>
//             </a>
//         </div>
//     );
// }

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         flexDirection: 'column', // Align items vertically
//     },
//     link: {
//         margin: '10px 0', // Add vertical margin between links
//         textDecoration: 'none',
//         color: '#333',
//         display: 'flex',
//         flexDirection: 'row', // Align items vertically
//         alignItems: 'center',
//     },
//     icon: {
//         cursor: 'pointer',
//     },
//     text: {
//         marginLeft: '8px', // Add space between email and icon
//     }
// };

// export default AboutLinks;
