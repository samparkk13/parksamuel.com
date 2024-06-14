
const Blog = () => {
    return ( 
        <div style={styles.container}>
            <p>
                Blogs coming soon! Stay tuned
            </p>
            
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
}
 
export default Blog;