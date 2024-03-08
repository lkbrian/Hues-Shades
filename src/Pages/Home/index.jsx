import { Box} from "@chakra-ui/react";
import WhyUs from "../../components/WhyUs";
import HeroSection from "../../components/HeroSection";
import Countup from "../../components/Countup";

function Home() {

  return (
    <Box height={"auto"} minH={"100vh"}>
      <HeroSection/>
      <WhyUs />
      <Countup />
    </Box>
  );
}

export default Home;
