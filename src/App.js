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

import CornellEADS from "./components/Blog/CornellEADS/CornellEADS";
import FirstMonthBlog from "./components/Blog/FirstMonthCornell/FirstMonthBlog";



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
              <Route path = "/" element = {<Home />} />
              <Route path = "/about" element = {<About />} />
              <Route path = "/blog" element = {<Blog />} />
              <Route path = "/cornelleads" element = {<CornellEADS />} />
              <Route path = "/first-month-Cornell" element = {<FirstMonthBlog />} />
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
