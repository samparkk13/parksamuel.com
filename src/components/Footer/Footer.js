import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return ( 
        <nav className="footer">
            <h1>© 2024 Samuel Park</h1>
            <div className="links">
            <a href="https://www.linkedin.com/in/samparkk13/" target="_blank" rel="noopener noreferrer">
                         <FaLinkedin size={20} />
                     </a>
                     <a href="https://github.com/samparkk13" target="_blank" rel="noopener noreferrer">
                         <FaGithub size={20}/>
                     </a>
                     <a href="https://www.instagram.com/samparkk13/" target="_blank" rel="noopener noreferrer">
                         <FaInstagram size={20} />
                     </a>
            </div>
        </nav>
     );
}
 
export default Footer;


// import React, { useEffect, useState } from 'react';
// import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//     const [isFooterAtBottom, setIsFooterAtBottom] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const scrollHeight = document.documentElement.scrollHeight;
//             const clientHeight = document.documentElement.clientHeight;

//             setIsFooterAtBottom(scrollHeight === clientHeight);
//         };

//         window.addEventListener('scroll', handleScroll);
        
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div>
//             <div style={isFooterAtBottom ? styles.footerAtBottom : styles.footer}>
//             © 2024 Samuel Park
//                 <div style={styles.footerLinks}>
//                     <a href="https://www.linkedin.com/in/samparkk13/" target="_blank" rel="noopener noreferrer">
//                         <FaLinkedin size={20} style={styles.icon} />
//                     </a>
//                     <a href="https://github.com/samparkk13" target="_blank" rel="noopener noreferrer">
//                         <FaGithub size={20} style={styles.icon} />
//                     </a>
//                     <a href="https://www.instagram.com/samparkk13/" target="_blank" rel="noopener noreferrer">
//                         <FaInstagram size={20} style={styles.icon} />
//                     </a>
//                 </div>
//             </div>
//         </div>
//     );
// }

// const styles = {
//     leftText: {
//         left: 0,
//         padding: '10px',
//         float: 'left', // Align text to the left
//     },

//     footer: { 
//         display: 'flex',
//         position: 'relative',
//         bottom: 0,
//         left: 0,
//         right: 0,
//         width: '100%',
//         textAlign: 'center',
//         padding: '10px',
//         zIndex: 1000,
//         backgroundColor: '#7CB9E8',
//         justifyContent: 'space-between', // Align items evenly along the main axis
//     },
//     footerLinks: {
//         display: 'flex',
//         justifyContent: 'flex-end', // Align icons to the far right
//     },
//     icon: {
//         margin: '0 5px',
//         cursor: 'pointer',
//     }
// };
// export default Footer;


// import React from 'react';
// import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//     return (
//         <div style={styles.footer}>
//             © 2024 Samuel Park
//         </div>
//     );
// }

// const styles = {
//     footer: {
        
//         position: 'relative',
//         bottom: 0, // Adjust the distance from the bottom of the screen
//         left: 0,
//         right: 0,
//         width: '100%',
//         textAlign: 'center',
//         padding: '10px',
//         zIndex: 1000, // Ensure it is on top of other elements
//         backgroundColor: '#7CB9E8', 
//     }
// };

// export default Footer;