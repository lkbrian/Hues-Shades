// import { useEffect } from 'react';
// import { Splide } from '@splidejs/react-splide';
import { Heading, Box, Flex } from "@chakra-ui/react";
// import '@splidejs/splide/dist/css/splide.min.css'; // Import the Splide CSS
// import '@splidejs/splide-extension-auto-scroll/dist/css/splide-extension-auto-scroll.min.css'; // Import the AutoScroll extension CSS
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

function Featured() {
  // useEffect(() => {
  //   // Initialize Splide with AutoScroll extension on component mount.
  //   const splide = new Splide('.splide', {
  //     perPage: 3,
  //     pagination: false,
  //     gap: '2rem',
  //     autoScroll: true,
  //     interval: 4000,
  //   }).mount({ AutoScroll });

  //   return () => {
  //     // Destroy Splide instance on component unmount.
  //     splide.destroy();
  //   };
  // }, []); // Empty dependency array ensures this effect runs once on mount.

  return (
    <>
      <Heading py={"12px"} textAlign={"center"}>
        Featured Products
      </Heading>
      <Flex
        height={"320px"}
        bg={"#111"}
        alignItems={"center"}
        gap={"2rem"}
        justifyContent={"center"}
      >
        {/* <Splide options={{}} className="splide"> */}

        <Box w={"200px"} h={"200px"} bg={"#fff"} color={"#111"}>
          curtains
        </Box>

        <Box w={"200px"} h={"200px"} bg={"#fff"} color={"#111"}>
          plants
        </Box>
        <Box w={"200px"} h={"200px"} bg={"#fff"} color={"#111"}>
          Lightings
        </Box>
        {/* Add more div elements for additional slides */}
        {/* </Splide> */}
      </Flex>
      <Heading py={"12px"} textAlign={"center"}>
        Testimonials
      </Heading>
    </>
  );
}

export default Featured;
