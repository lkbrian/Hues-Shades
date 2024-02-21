<<<<<<< HEAD
// import React from "react";
import {
  Box,
  // Card,
  // CardBody,
  Flex,
  Heading,
  Image,
  // SimpleGrid,
=======
import React from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
>>>>>>> d2409f5 ({Enhance}:Added an ImageDataStub & displayed the card item)
  Stack,
  Text,
} from "@chakra-ui/react";
import { ImageDataStub } from "./ImageDataStub";
<<<<<<< HEAD
import "./style.css";

const WhyUs = () => {
  return (
    <>
    <Heading textAlign={'center'} pt={'30px'}>Why Choose Us</Heading>
      <Text textAlign={"center"} p={'8px'}>Our Advantages</Text>
    <Flex
      gap={"20px"}
      flexWrap="wrap"
      py="50px"
      px="20px"
      color={'#111'}
    >      
      {ImageDataStub.map((data, index) => {
        return (
          <Box key={index} maxW="md" className="card" boxShadow={' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}>
            <Box className="image-container">
=======
import './style.css'

const WhyUs = () => {
  return (
    <Flex
      direction={"row"}
      gap={"3"}
      alignItems={"center"}
      justifyItems={"center"}
      flexWrap={"wrap"}
      pt={"50px"}
    >
      {ImageDataStub.map((data, index) => {
        return (
          <Card maxW="sm" className="card">
            <CardBody className="image-container">
>>>>>>> d2409f5 ({Enhance}:Added an ImageDataStub & displayed the card item)
              <div className="overlay">
                <Stack mt="2" spacing="3" textAlign={"center"}>
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>{data.description}</Text>
                </Stack>
              </div>

<<<<<<< HEAD
              <Flex h={"500px"} w={"100%"}>
                <Image
                  objectFit={"cover"}
                  w={"100%"}                  
=======
              <Flex h={"200px"} w={"100%"}>
                <Image
                  w={"100vw"}
                  key={index}
>>>>>>> d2409f5 ({Enhance}:Added an ImageDataStub & displayed the card item)
                  src={data.image}
                  alt="profile"
                  borderRadius="lg"
                />
              </Flex>
<<<<<<< HEAD
            </Box>
          </Box>
        );
      })}
    </Flex>
    </>
=======
            </CardBody>
          </Card>
        );
      })}
    </Flex>
>>>>>>> d2409f5 ({Enhance}:Added an ImageDataStub & displayed the card item)
  );
};

export default WhyUs;
