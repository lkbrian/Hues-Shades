import React from "react";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ImageDataStub } from "./ImageDataStub";
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
              <div className="overlay">
                <Stack mt="2" spacing="3" textAlign={"center"}>
                  <Heading size="md">Living room Sofa</Heading>
                  <Text>{data.description}</Text>
                </Stack>
              </div>

              <Flex h={"200px"} w={"100%"}>
                <Image
                  w={"100vw"}
                  key={index}
                  src={data.image}
                  alt="profile"
                  borderRadius="lg"
                />
              </Flex>
            </CardBody>
          </Card>
        );
      })}
    </Flex>
  );
};

export default WhyUs;
