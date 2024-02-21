import React from "react";
import { Box,Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { CgMenuLeftAlt } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      justifyContent={"space-between"}
      w={"100%"}
      bg={"#111"}
      alignItems={"center"}
      py={"20px"}
      // position={"fixed"}
      // bg={"#333333"}
      // zIndex={3}
    >
      <Heading
        bgGradient="linear(to-br,#BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C)"
        bgClip={"text"}
        size={"lg"}
        pl={"12px"}
      >
        Hues & Shades
      </Heading>
      <Flex
        as="nav"
        gap={{ base: "12px", md: "30px" }}
        display={{ base: "none", md: "flex" }}
        pr={"20px"}
      >
        <NavLink className={"links"} to={"/"} >
          Home
        </NavLink>
        <NavLink className={"links"} to={"/About"} >
          About
        </NavLink>
        <NavLink className={"links"} to={"/Contact"} >
          Contact
        </NavLink>
        <NavLink className={"links"} to={"/Services"} >
          Services
        </NavLink>
        <NavLink className={"links"} to={"/Gallery"} >
          Gallery
        </NavLink>
      </Flex>
      <Flex display={{ base: "flex", md: "none" }} pr={'20px'}>
        <Box cursor={'pointer'} border={'2px solid #fff8ac'} borderRadius={'8px'} ref={btnRef} bg={'none'} onClick={onOpen}>
        <CgMenuLeftAlt color={"#fff8ac"} fontSize={'2rem'}/>
        </Box>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />         
          <DrawerContent  bg={'#111'}>
            <DrawerCloseButton color={'#fff8ac'}/>
            <DrawerHeader></DrawerHeader>

            <DrawerBody display={'flex'} flexDirection={'column'} gap={'20px'}>
              <NavLink className={"links drawer-link"} to={"/"}smooth="true" onClick={()=>{onClose();}}>
                Home
              </NavLink>
              <NavLink className={"links drawer-link"} to={"/About"}smooth="true" onClick={()=>{onClose();}}>
                About
              </NavLink>
              <NavLink className={"links drawer-link"} to={"/Contact"}smooth="true" onClick={()=>{onClose();}}>
                Contact
              </NavLink>
              <NavLink className={"links drawer-link"} to={"/Services"}smooth="true" onClick={()=>{onClose();}}>
                Services
              </NavLink>
              <NavLink className={"links drawer-link"} to={"/Gallery"}smooth="true" onClick={()=>{onClose();}}>
                Gallery
              </NavLink>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
}

export default Navbar;
