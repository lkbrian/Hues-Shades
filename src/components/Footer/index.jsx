import { Box, Flex, Image,  Text } from "@chakra-ui/react";
import logo from "/logo/hues-logo.png"


function Footer() {
  return (
    // the whole footer
    <Box
    className="footer"
      // position={"absolute"}
      width={"100%"}
      // bottom={0}
      p={"12px"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={{base:"flex-start",md: "center" }}
      alignItems={"center"}
      bg={"#111"}
    >
      {/* lower section */}
      <Flex
        gap={{base:"8px",md:"20px"}}
        w={"100%"}
        justifyContent={"space-evenly"}
        alignItems={'center'}
        flexDirection={{base:"column",md:"row"}}
        fontSize={{base:".8rem",md:"1rem"}}
        
      ><Image src={logo} h={'60px'} />
      <Flex gap={4}flexWrap={"wrap"}justify={"center"}>
      <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
        <Text>&copy;2024 hues&shades.All rights reserved.</Text>
      </Flex>
      </Flex>
    </Box>
  );
}

export default Footer;
