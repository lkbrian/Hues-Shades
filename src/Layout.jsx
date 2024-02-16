import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./components/Pages/About";
import Contact from "./components/Pages/Contact";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";

function Layout() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Services />
      <Footer />
    </>
  );
}

export default Layout;
