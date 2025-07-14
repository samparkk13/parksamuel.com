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


