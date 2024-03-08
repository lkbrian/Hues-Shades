import { Box, Center, Heading, Image, Text } from "@chakra-ui/react";
import aboutImage from "../../assets/0h9.jpg"

function About() {
  return (
    <Box id="About" minH={"100vh"} m={"auto"}>
      <Center maxW={"60vw"}>
        <Box textAlign={"center"} letterSpacing={"1px"}>
          <Heading>Our Story</Heading>
          <Box>
            <Image src={aboutImage} float={'left'} h={'450px'}/>
            <Text >
              &quot;Founded with a passion for colors and design, Hues & Shades
              emerged from the belief that your living space should be an
              extension of your unique personality and style. We understand the
              transformative power of color and aim to make the process of
              choosing and incorporating hues an exciting and enjoyable
              journey.&quot;
            </Text>
          </Box>
        </Box>
      </Center>
    </Box>
  );
}

export default About;
