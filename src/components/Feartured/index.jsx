import Marquee from "react-fast-marquee";
import { Heading, Box, Flex, Image, Text, Avatar, Circle } from "@chakra-ui/react";
import curtain from "../../assets/0f5.jpg";
import plant from "../../assets/plant.jpg";
import chandalier from "../../assets/0c0.jpg";
import rodes from "../../assets/0j5.jpg";
import mounting from "../../assets/0g9.jpg";

function Featured() {
  const items = [
    { image: chandalier, product: "Chandalier Lights" },
    { image: plant, product: "Faux plants" },
    { image: mounting, product: "Wall Mountings" },
    { image: rodes, product: "Curtain Rodes" },
    { image: curtain, product: "Curtains" },
  ];
  const reviewData = [
    {
      name: "Segun Mutua",
      image: "https://bit.ly/prosper-baba",
      rating: "⭐⭐⭐⭐⭐",
      review:
        "I recently embarked on a home redecoration project and found Hues and Shades to be the best option. They offered an extensive range of options, and I was impressed by the quality of their products.The furniture and decor items I purchased exceeded my expectations. The delivery process was smooth, and the items arrived well-packaged and in pristine condition. Hues and Shades is the go-to for anyone looking to elevate their home's interior design, and I highly recommend them.",
    },
    {
      name: "Christian Otieno",
      image: " https://bit.ly/code-beast",
      rating: "⭐⭐⭐⭐",
      review:
      "Hues and Shades redefine excellence in interior design. Their extensive, trend-forward product range effortlessly adapts to diverse styles. With impeccable customer service, they excel in sourcing specific items. The materials' quality ensures enduring satisfaction. As an interior designer, Hues and Shades consistently elevates my creative journey, making every project a masterpiece. I recommend them"}
  ];
  return (
    <>
      <Heading pt={"20px"} textAlign={"center"}>
        Featured Products
      </Heading>

      <Marquee
        className="marquee"
        autoFill
        speed={20}
        gradientWidth={120}
        gradient
        gradientColor="#111"
        pauseOnHover
        delay={8}
      >
        <Flex gap={{ base: "60px", md: "120px", lg: "150px" }} mr={"125px"} px={"20px"}>
          {items.map((item, index) => (
            <Box key={index} w={"280px"} h={"250"} color={"#fff"}>
              <Image
                src={item.image}
                borderRadius={"50%"}
                objectFit={"contain"}
              />
              <Text textAlign={"center"} fontSize={"1.2rem"} mt={"10px"}>
                {item.product}
              </Text>
            </Box>
          ))}
        </Flex>
      </Marquee>
      <Heading py={"16px"} textAlign={"center"}>
        Testimonials
      </Heading>            
      <Box p={"20px"}display={'flex'} justifyContent={"space-evenly"} flexWrap={'wrap'}gap={"20px"}>
        {reviewData.map((data, index) => (
          <Flex
            gap={4}
            flexDirection={"column"}
            maxW="md"
            alignItems={"center"}
            justifyContent={"center"}
            textAlign={"center"}
            key={index}
          >
            <Circle
              borderWidth="2px"
              borderColor="#111"
              p={"4px"}
            >
            <Avatar size={"2xl"} name={data.name} src={data.image} /></Circle>
            <Heading fontSize={"1.3rem"}>{data.name}</Heading>
            <Text fontSize={"1.15rem"}>Rating:{data.rating}</Text>
            <Text
              fontStyle={"italic"}
              letterSpacing={"1px"}
              maxw={"500px"}
              fontSize={"1.1rem"}
            >
              &quot;{data.review}&quot;
            </Text>
          </Flex>
        ))}
      </Box>
    </>
  );
}

export default Featured;
