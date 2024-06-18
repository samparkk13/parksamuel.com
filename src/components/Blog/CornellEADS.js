const CornellEADS = () => {
    return ( 
        <div style={styles.container}>
            <div style={styles.text}>
                first blog coming soon 
                <br />In the meanwhile, you can read this debrief letter!
            </div>
            <a href="files/DebriefLetter.pdf" target="_blank" rel="noopener noreferrer" style={styles.link}>
                Debrief Letter Here
            </a>
        </div>
    );
}

const styles = {
    container: {
        backgroundColor: "lightblue",
        width: "100vw",
        height: "90vh",
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
    },
}
 
export default CornellEADS;