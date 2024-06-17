import React, { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import CornellEADS from "./components/Blog/CornellEADS";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    
    <Router>
      <ScrollToTop />

      <div className="App" >
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/blog" element = {<Blog />} />
          <Route path = "/first-blog" element = {<CornellEADS />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
