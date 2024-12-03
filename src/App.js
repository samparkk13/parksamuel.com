import React, { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import NotFound from './components/NotFound/NotFound';

import { VStack } from "@chakra-ui/react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import KoreaBlog from "./components/Blog/Korea/KoreaBlog";
import FirstMonthBlog from "./components/Blog/FirstMonthCornell/FirstMonthBlog";
import BethpageBlackBlog from "./components/Blog/BethpageBlackBlog/BethpageBlackBlog";
import HalfMarathon from "./components/Blog/HalfMarathon/HalfMarathon";

import Summer2025Intern from "./components/Private/Summer2025Intern";



function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}


function App() {

  return (
    <div>
      <Navbar />

      <VStack>
        <Router>
          <ScrollToTop />

          <div className="App" >
            
            <Routes>
              {/* Routes */}
              <Route path = "/" element = {<Home />} />
              <Route path = "/about" element = {<About />} />
              <Route path = "/blog" element = {<Blog />} />
              <Route path = "/KoreaBlog" element = {<KoreaBlog />} />
              <Route path = "/CornellBeginnings" element = {<FirstMonthBlog />} />
              <Route path = "/BethpageBlack" element = {<BethpageBlackBlog />} />
              <Route path = "/HalfMarathon" element = {<HalfMarathon />} />

              {/* Hidden Routes */}
              <Route path="/Summer2025Internships" element={<Summer2025Intern />} />

              {/* Not Found Route */}
              <Route path="*" element={<NotFound />} />

    
            </Routes>
          </div>
          
        </Router>
      </VStack>
      <Footer />
    </div>
  );
}

export default App;
