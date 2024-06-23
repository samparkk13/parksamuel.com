import { FaYoutube, FaFilePdf } from 'react-icons/fa';

const CornellEADS = () => {
    return ( 
        <div style={styles.container}>
            <div style={styles.text}>
                First blog coming soon!
                <br />In the meanwhile, you can read this debrief letter!
            </div>
            <a href="files/DebriefLetter.pdf" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <FaFilePdf style={{ marginRight: '8px' }} />
                Debrief Letter Here
            </a>
            <br />
            <br />
            <div style={styles.text}>
                Or you can watch this video!
                <br />
            </div>
            <a href="https://www.youtube.com/watch?v=qM4sSyjf8vM&ab_channel=karis" target="_blank" rel="noopener noreferrer" style={styles.link}>
                <FaYoutube style={{ marginRight: '8px' }} />
                Video Link Here
            </a>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "lightblue",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    text: {
        textAlign: "center", // Center the text horizontally
        marginBottom: '20px', // Add some margin at the bottom of the text
    },
    link: {
        fontSize: '16px',
        color: 'blue',
        textDecoration: 'underline',
        display: 'flex',
        alignItems: 'center',
    },
}

export default CornellEADS;
