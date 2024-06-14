import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


function App() {

  return (
    
    <Router>

      <div className="App" >
        <Navbar />
        
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/blog" element = {<Blog />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
