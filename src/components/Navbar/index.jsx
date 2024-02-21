import { Flex, Heading } from "@chakra-ui/react";
// import { NavHashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      bg={'#111'}
      alignItems={"center"}
      px={{base:'20px' ,lg: '50px'}}
      py={"20px"}
      // position={"fixed"}
      // bg={"#333333"}
      // zIndex={3}
    >
      <Heading
        bgGradient="linear(to-br,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
        bgClip={"text"}
        size={'lg'}
      >
        Hues & Shades
      </Heading>
      <Flex as="nav" gap={{base:'20px' ,md: '50px'}}>
        <NavLink className={'links'}  to={"/"}>Home</NavLink>
        <NavLink className={'links'}  to={"/About"}>About</NavLink>
        <NavLink className={'links'}  to={"/Contact"}>Contact</NavLink>
        <NavLink className={'links'}  to={"/Services"}>Services</NavLink>
        <NavLink className={'links'}  to={"/Gallery"}>Gallery</NavLink>
      </Flex>
    </Flex>
  );
}

export default Navbar;
