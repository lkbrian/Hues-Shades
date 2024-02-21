import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";

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
      justifyContent={"center"}
      alignItems={"center"}
      bg={"#111"}
    >
      <Box
        p={"10px"}
        display={"flex"}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        width={{base:"100%",md:"80%"}}
        gap={'20px'}
        flexWrap={'wrap'}
        flexDirection={{base:"column",md:"row"}}
      >             
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"8px"}
          textAlign={'center'}
        >
          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
            Usefull links
          </Text>
          <NavLink to={"/"} >
            Home
          </NavLink>
          <NavLink to={"/About"} >
            About
          </NavLink>
          <NavLink to={"/Contact"}>Contact</NavLink>
          <NavLink to={"/Services"}>Services</NavLink>
          <NavLink to={"/Gallery"}>Gallery</NavLink>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"column"}
          textAlign={'center'}
          gap={"12px"}
        >
          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
            Contact info
          </Text>
          <Text>Email: huesshades.info@gmail.com</Text>
          <Text>Phone: +254 712 926862</Text>
          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
            Social links
          </Text>
          <Flex flexDirection={'column'}
            alignItems={'center'}
            gap={'3px'}
            >
            <Box display={'flex'} gap={'8px'} alignItems={'center'}>
              <FaFacebookSquare fontSize={'1.4rem'} />
              <Link  href="#" target="_blank" mx={2}>
           huesshades
          </Link>
            </Box>
            <Box display={'flex'} gap={'8px'} alignItems={'center'}>
            <PiInstagramLogoFill fontSize={'1.4rem'} />
            <Link href="#" target="_blank" mx={2}>
            huesshades1
          </Link>
          </Box>
          <Box display={'flex'} gap={'8px'} alignItems={'center'}>
          <FaLinkedin fontSize={'1.4rem'} />
          <Link href="#" target="_blank" mx={2}>
            LinkedIn 
          </Link>
          </Box>
          
        </Flex>

        </Box>
        <Box display={"flex"}
          flexDirection={"column"}
          textAlign={'center'}
          gap={"4px"}>
          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
            Address
          </Text>
          <Text>1st Avenue, Eastleigh,</Text>
          <Text> Kamkunji, Nairobi, Kenya</Text>
          <Text>Postal Code: 0 0610.</Text>

          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
            Opening Hours
          </Text>
          <Text>Monday - Friday: 5:00 AM - 10:00 PM</Text>
          <Text>Saturday: 5:00 AM - 10:00 PM</Text>
          <Text>Sunday: 2:00pm - 10:00pm</Text>
        </Box>
        <Flex flexDirection={"column"}>
          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
            Newsletter
          </Text>
          <Text>Subscribe to our newsletter</Text>
        </Flex>
      </Box>
      {/* lower section */}
      <Flex
        gap={{base:"8px",md:"20px"}}
        w={"70%"}
        pt={"10px"}
        borderTop={"1px solid #d4d4d4"}
        justifyContent={"center"}
        alignItems={'center'}
        flexDirection={{base:"column",md:"row"}}
      >
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
        <Text>&copy;2024 hues&shades.All rights reserved.</Text>
      </Flex>
    </Box>
  );
}

export default Footer;
