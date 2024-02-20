import { Box } from "@chakra-ui/react";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Services from "./components/Pages/Services";
import Footer from "./components/Footer";
import Gallery from "./components/Pages/Gallery";

function Layout() {
  return (
    <Box bg={"RGBA(0, 0, 0, 0.80)"} color={"#fff"} minH={"100vh"} display={"flex"} flexDirection={'column'}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
      </Routes>          
      <Footer />
    </Box>
  );
}

export default Layout;
