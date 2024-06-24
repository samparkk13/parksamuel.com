const FirstMonthBlog = () => {
    return ( 
        <div style={styles.container}>
            <div style={styles.text}>
                 Currently Writing...
            </div>
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
    },
}
 
export default FirstMonthBlog;