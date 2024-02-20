import { Flex, Heading } from "@chakra-ui/react";
// import { NavHashLink as Link } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      alignItems={"center"}
      px={"50px"}
      py={"20px"}
      // position={"fixed"}
      // bg={"#333333"}
      // zIndex={3}
    >
      <Heading
        bgGradient="linear(to-br,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
        bgClip={"text"}
      >
        Hues & Shades
      </Heading>
      <Flex as="nav" gap={"20px"}>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/About"}>About</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
        <NavLink to={"/Services"}>Services</NavLink>
        <NavLink to={"/Gallery"}>Gallery</NavLink>
      </Flex>
    </Flex>
  );
}

export default Navbar;
