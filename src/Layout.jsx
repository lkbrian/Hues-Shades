import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import Footer from "./components/Footer";
import AppGallery from "./Pages/AppGallery";
import BackToTop from "./components/BackToTop";
// import { images } from "../../assets/galleryImages/images";

function Layout() {
  return (
    <Box
      bg={"#f5f5f5"}
      color={"#111"}
      minH={"100vh"}
      display={"flex"}
      flexDirection={"column"}
      position={"relative"}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AppGallery" element={<AppGallery />} />
      </Routes>
      <BackToTop/>
      <Footer />
    </Box>
  );
}

export default Layout;
