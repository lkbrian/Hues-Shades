import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import ourstoryimg from "../../assets/story.png";
import mvvimage from "../../assets/Interior-design.gif";

function About() {
  return (
    <Box id="About" minH={"100vh"} m={"auto"}>
      <Flex maxW={"60vw"} mt={"20px"} flexDirection={"column"}>
        {/* our story */}
        <Flex alignItems={"center"} flexWrap={"wrap"}>
          <Image src={ourstoryimg} float={"right"} h={"380px"} />
          <Box textAlign={"center"} letterSpacing={"1px"}>
            <Heading pb={"10px"}>Our Story</Heading>
            <Text fontSize={"1.1rem"} w={[300, 500]}>
              &quot;Founded with a passion for colors and interior design, Hues
              & Shades emerged from the belief that your living space &
              commercial space should be an extension of your unique personality
              and style. We understand the transformative power of color and aim
              to make the process of choosing and incorporating hues an exciting
              and enjoyable journey.&quot;
            </Text>
          </Box>
        </Flex>
        {/* mission vision & values */}
        <Flex alignItems={"center"} mt={"10px"}>
          <Box letterSpacing={"1px"}>
            <Heading fontSize={"1.5rem"}>
              Mission
            </Heading>
            <Text fontSize={"1.1rem"} w={[300, 500]} mb={"10px"}>
              &quot;Transform spaces with exquisite hues and shades, creating
              timeless, personalized interiors that evoke beauty and
              comfort.&quot;
            </Text>
            <Heading fontSize={"1.5rem"}>
              Vision
            </Heading>
            <Text fontSize={"1.1rem"} w={[300, 500]} mb={"10px"}>
              &quot;Pioneer innovation in interior decor, inspiring elevated
              living through unique color palettes and exceptional design.&quot;
            </Text>
            <Heading fontSize={"1.5rem"}>
              Values
            </Heading>
            <Text fontSize={"1.1rem"} w={[300, 500]} mb={"10px"}>
              <em>Creativity</em> : Embrace originality, infusing each project
              with imaginative solutions that transcend conventional boundaries.
            </Text>
            <Text fontSize={"1.1rem"} w={[300, 500]}>
              <em>Client-Centric Approach</em> : Prioritize client satisfaction,
              fostering collaborative relationships and exceeding expectations
              through transparent communication and tailored design solutions.
            </Text>
          </Box>
          <Image src={mvvimage} />
        </Flex>
      </Flex>
    </Box>
  );
}

export default About;
