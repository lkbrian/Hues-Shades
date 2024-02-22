// import React from "react";
import {
  Box,
  // Card,
  // CardBody,
  Flex,
  Heading,
  Image,
  // SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ImageDataStub } from "./ImageDataStub";
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
              <div className="overlay">
                <Stack mt="2" spacing="3" textAlign={"center"}>
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>{data.description}</Text>
                </Stack>
              </div>

              <Flex h={"500px"} w={"100%"}>
                <Image
                  objectFit={"cover"}
                  w={"100%"}                  
                  src={data.image}
                  alt="profile"
                  borderRadius="lg"
                />
              </Flex>
            </Box>
          </Box>
        );
      })}
    </Flex>
    </>
  );
};

export default WhyUs;
