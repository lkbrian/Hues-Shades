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
      <Text textAlign={"center"} pt={'4px'} fontSize={"1.1rem"}>Discover the advantages of choosing our products</Text>
    <Flex
      gap={"20px"}
      flexWrap={"wrap"}
      py="20px"
      px={"8px"}
      color={'#111'}
      justifyContent={"flex-start"}
      alignItems={'flex-start'}
    >      
      {ImageDataStub.map((data, index) => {
        return (
          <Box key={index} w={"sm"} className="card" boxShadow={' rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}>
            <Box className="image-container">
              <div className="overlay">
                <Stack mt="2" spacing="3" textAlign={"center"}>
                  <Heading fontSize={"1.6rem"} color={'#fff8ac'}  letterSpacing={'2px'}>{data.name}</Heading>
                  <Text letterSpacing={'1px'} fontSize={'1.05rem'}>{data.description}</Text>
                </Stack>
              </div>

              <Flex h={"400px"} w={"100%"}>
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
