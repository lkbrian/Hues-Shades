import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { SiSnapcraft } from "react-icons/si";
import { SiThymeleaf } from "react-icons/si";
import { PiUserSwitchDuotone } from "react-icons/pi";
import { GiCutDiamond } from "react-icons/gi";
import { useRef,useState } from "react";

function About() {
  const valuesData = [
    {
      icon: <SiSnapcraft size={50} color={"#111"} />,
      title: "Quality Craftsmanship",
      description:
        "Tailoring designs to reflect each client's unique personality, preferences, and lifestyle for a bespoke experience.",
    },
    {
      icon: <PiUserSwitchDuotone size={60} color={"#111"} />,
      title: "Personalization",
      description:
        "Tailoring designs to reflect each client's unique personality, preferences, and lifestyle for a bespoke experience.",
    },
    {
      icon: <SiThymeleaf size={50} color={"#111"} />,
      title: "Sustainability Focus",
      description:
        "Prioritizing eco-friendly practices and materials to minimize environmental impact while promoting health and well-being.",
    },
    {
      icon: <GiCutDiamond size={50} color={"#111"} />,
      title: "Timeless Elegance",
      description:
        "Creating designs that transcend trends, blending classic elements with modern sensibilities for enduring sophistication.",
    },
  ];
  const read_more = useRef(null)
  const[readmore,setReadmore] = useState(false)
  const toogle_Ourstory =()=>{
    setReadmore(!readmore)
    if(read_more.current){
      read_more.current.style.display = read_more.current.style.display == "inline" ? "none" : "inline"
    }
  }

  return (
    <Box
      id="About"
      minH={"100vh"}
      w={"100%"}
      position={"relative"}
      textAlign={"center"}
    >
      <Flex
        alignItems={"center"}
        letterSpacing={"1px"}
        justifyContent={"center"}
        w={"100%"}
        flexWrap={"wrap"}
      >
        <Box
          h={"400px"}
          order={{ base: "2", lg: "1" }}
          w={{ base: "100%", lg: "50%" }}
        >
          <Image
            src={
              "https://parade.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkxODI2MzQwMTYzMzY0MzM4/best-fall-home-decor-for-mood-boost---edited.jpg"
            }
            objectFit="cover"
            w={"100%"}
            h={"100%"}
            alt="str"
          />
        </Box>
        <Flex
          alignItems={"center"}
          flexDir={"column"}
          borderRadius={"1rem"}
          order={{ base: "1", lg: "2" }} p={"15px"}
        >
          <Heading pb={"4px"} >
            Our Story
          </Heading>
          <Text fontSize={"1.1rem"} w={[300, 500, 600, 800]}  >
            &quot;Founded with a passion for colors and interior design, Hues &
            Shades emerged from the belief that your living space & commercial
            space should be an extension of your unique personality and style.
            <Text ref={read_more} as={"span"} display={{base:"none",md:"inline"}}>
            We understand the transformative power of color and aim to make the
            process of choosing and incorporating hues an exciting and enjoyable
            journey. Our mission is to craft spaces that resonate with you,
            infusing the process with delight. Through attentive listening and
            timeless design, we create environments that inspire and uplift. At
            Hues & Shades, we know every shade tells a story. Let us help you
            narrate yours with vibrant palettes and elegant designs&quot;
            </Text>
            </Text>            
          <Text m={4} as="sup">Founded by Joan Mogiti</Text>
          <Button bg="#111" color={"#fff"} _hover={{bg:"#111"}} onClick={()=>{toogle_Ourstory()}}   display={{base:"block",md:"none"}}>{readmore ?"Read less":"Read more"}</Button>
        </Flex>
      </Flex>

      <Flex
        justifyContent={"center"}
        flexWrap={"wrap"}
        h={"auto"}
        alignItems={"center"}
        flexDir={"row"}
        letterSpacing={"1px"}
        w={"100%"}
      >
        <Flex flexDir={"column"} w={{ base: "100%", lg: "40%" }} p={"10px"}>
          <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
            <Heading fontSize={"1.6rem"} >
              Mission
            </Heading>
            {/* <Box bg={"#111"} borderRadius={"full"} w={"93px"} h={"4px"}></Box> */}
            <Text fontSize={"1.1rem"} w={[300, 500]} my={"10px"}>
              &quot; Our mission is to transform spaces through the artful
              selection and application of exquisite hues and shades, crafting
              environments that are both timeless and deeply personalized.&quot;
            </Text>
          </Box>
          <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
            <Heading fontSize={"1.6rem"} >
              Vision
            </Heading>
            {/* <Box bg={"#111"} borderRadius={"full"} w={"79px"} h={"4px"}></Box> */}
            <Text fontSize={"1.1rem"} w={[300, 500]} mb={"10px"}>
              &quot;Our vision is to pioneer innovation in interior decor,
              inspiring elevated living through unique color palettes and
              exceptional design.&quot;
            </Text>
          </Box>
        </Flex>

        <Box
          h={"400px"}
          w={{ base: "100%", lg: "60%" }}
          overflow={"hidden"}
          order={2}
        >
          <Image
            src={
              "https://www.bhg.com/thmb/sq8cqhphc0TdtATgElc6N9snT6E=/1792x0/filters:no_upscale():strip_icc()/living-room-rug-shelves-7b5d7a52-dcb3e3a7b7e04df99893aeaa76f57d08.jpg"
            }objectFit="cover"
            w={"100%"}
            h={"100%"}
            alt="str"
          />
        </Box>
      </Flex>

      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        flexDirection={{ base: "column", lg: "row-reverse" }} // Reverse order on large screens
      >
        <Flex
          justifyContent={"center"}
          flexWrap={"wrap"}
          alignItems={"center"}
          mt={{ base: "20px", lg: "0" }} // Add margin on large screens
          textAlign={"center"}
          w={{ base: "100%", lg: "50%" }} // Take full width on small screens, half on large screens
          p={{ base: "0", lg: "0 20px" }} // Add padding on large screens
          gap={"20px"}
        >
        <Heading w={"100%"}>Values</Heading>
          {valuesData.map((item, index) => (
            <Box
              key={index}
              display={"flex"}
              flexDir={"column"}
              alignItems={"center"}
              gap={2}
              borderRadius={"md"}
              py={"10px"}
              px={"15px"}
            >
              {item.icon}
              <Heading fontSize={"1.2rem"}>{item.title}</Heading>
              <Text fontSize={"1.1rem"} w={[350]}>
                {item.description}
              </Text>
            </Box>
          ))}
        </Flex>
        
        {/* Background Image */}
        <Box
          w={{ base: "100%", lg: "50%" }} // Take full width on small screens, half on large screens
          h={{base:"500px","md":"100vh",lg:"500px"}}
        >
          <Image
            src={
              "https://www.thespruce.com/thmb/Wb8gJqlCR66Ild5c3ySyEkhD7W0=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/living-room-decor-ideas-5442837-hero-8b6e540e13f9457a84fe9f9e26ea2e5c.jpg"
            }
            alt="Background"
            objectFit="cover"
            w={"100%"}
            h={"100%"}
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
