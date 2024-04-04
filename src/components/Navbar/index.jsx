import React from "react";
import { Box,DrawerFooter,Flex, Image, Text, useDisclosure } from "@chakra-ui/react";
import { CgMenuRightAlt } from "react-icons/cg";
import { NavLink } from "react-router-dom";
import hslogo from "/logo/hues-logo.png"
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
      py={"20px"}overflow={"hidden"}
      pr={'10px'}
    >      
      <Image src={hslogo} h={'60px'} />
      <Flex
        as="nav"
        gap={{ base: "12px", md: "30px" }}
        display={{ base: "none", md: "flex" }}
        pr={"10px"}
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
        <NavLink className={"links"} to={"/AppGallery"} >
          Gallery
        </NavLink>
      </Flex>
      <Flex display={{ base: "flex", md: "none" }} pr={'4px'}>
        <Box cursor={'pointer'}  borderRadius={'8px'} ref={btnRef} bg={'none'} onClick={onOpen}>
        <CgMenuRightAlt color={"#fff8ac"} fontSize={'2rem'}/>
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
              <NavLink className={"links drawer-link"} to={"/AppGallery"}smooth="true" onClick={()=>{onClose();}}>
                Gallery
              </NavLink>
            </DrawerBody>
            <DrawerFooter>
            <Text color={"#d4d4d4"} fontSize={'.8rem'} textAlign={"center"}>&copy;2024 hues&shades.All rights reserved.</Text>
          </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Flex>
  );
}

export default Navbar;
