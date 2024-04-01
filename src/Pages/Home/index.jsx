import { Box} from "@chakra-ui/react";
import WhyUs from "../../components/WhyUs";
import HeroSection from "../../components/HeroSection";
// import Countup from "../../components/Countup";
import Featured from "../../components/Feartured";

function Home() {

  return (
    <Box height={"auto"} minH={"100vh"}>
      <HeroSection/>
      <WhyUs />
      {/* <Countup /> */}
      <Featured/>
    </Box>
  );
}

export default Home;
