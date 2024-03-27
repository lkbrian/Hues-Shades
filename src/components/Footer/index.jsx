import { Box, Flex, Image,  Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { FaFacebookSquare,FaTiktok } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import logo from "../../../logo/flg.png"

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
      <Box
        p={"10px"}
        display={"flex"}
        justifyContent={{base:"flex-start",md: "space-evenly" }}
        // alignItems={"center"}
        width={{base:"100%",md:"80%"}}
        gap={'30px'}
        flexWrap={'wrap'}
        flexDirection={{base:"row",md:"row"}}
      > <Box display={{base: "none",md: "flex"}} alignSelf={"center"}>
        <Image src={logo} alt="Hues & Shades" h={"120px"}/>
        </Box>          
        <Box
          
          flexDirection={"column"}
          gap={"8px"}
          display={{base: "none",sm: "flex"}}
          textAlign={{base: 'start',md :"center"}}
        >
          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
          links
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
          textAlign={{base: 'start',md :"center"}}
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
          <Text>Phone: +254 741 624223</Text>
          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
            Social links
          </Text>
          <Flex flexDirection={'column'}
            alignItems={{base: 'start',md :'center'}}
            gap={'3px'}
            >
            <Box display={'flex'} gap={'8px'} alignItems={'center'}>
              <FaFacebookSquare fontSize={'1.4rem'} />
              <Link  href="https://www.facebook.com/profile.php?id=100087406458189&mibextid=ZbWKwL" target="_blank" mx={2}>
           hues & shades
          </Link>
            </Box>           
          <Box display={'flex'} gap={'8px'} alignItems={'center'}>
          <FaTiktok fontSize={'1.4rem'} />
          <a href="https://vm.tiktok.com/ZMMJ9yhXM/" target="_blank" mx={2}>
            hues & shades
          </a>
          </Box>
          <Box display={'flex'} gap={'8px'} alignItems={'center'}>
            <PiInstagramLogoFill fontSize={'1.4rem'} />
            <a href="https://www.instagram.com/huesshades1?igsh=MTk1eWYyNnNjZGJpbQ==" target="_blank" mx={2}>
            huesshades1
          </a>
          </Box>
        </Flex>

        </Box>
        <Box display={"flex"}
          flexDirection={"column"}
          textAlign={{base: 'start',md :"center"}}
          gap={"4px"}>
          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
            Address
          </Text>
          

          <Text>4th Street 1st avenue,</Text>
          <Text>Sahl Mall forthville,</Text>
          <Text>Postal Code: 00610.</Text>

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
        {/* <Flex flexDirection={"column"} textAlign={{base: 'start',md :}>
          <Text
            fontWeight={"bold"}
            letterSpacing={"2px"}
            color={"#fff7a2"}
          >
            Newsletter
          </Text>
          <Text>Subscribe to our newsletter</Text>
          <Box display={'flex'} gap={'20px'} py={'12px'}>
            <Input type="email" placeholder="Enter your mail..." />
            <Button color={'black'}bg={'#fff8ac'} letterSpacing={'2px'} w={'30%'} fontSize='sm'>subscribe</Button>
          </Box>
        </Flex> */}
      </Box>
      {/* lower section */}
      <Flex
        gap={{base:"8px",md:"20px"}}
        w={{base:"100%",md:"70%"}}
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
