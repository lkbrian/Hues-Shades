import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
function HeroSection() {
  const swiperOptions = {
    effect: "cube",
    direction: "horizontal",
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    cubeEffect: {
      slideShadows: true,
    },
  };

  const slides = [
    {
      title: "Welcome to Hues & Shades",
      subtitle: "Where Elegance Meets Functionality",
      text: "Welcome to Hues & Shades, where luxury meets functionality. Our curated collection of curtains brings elegance and style to any space, transforming it into a haven of comfort and beauty. From timeless classics to modern designs, we offer a wide range of fabrics, colors, and patterns to suit every taste and preference.",
    },
    {
      title: "Elevate Your Space",
      subtitle: "Discover Our Exquisite Collection",
      text: "Quality craftsmanship is at the heart of everything we do. Each curtain in our collection is meticulously crafted using premium materials and attention to detail, ensuring durability and long-lasting beauty. Whether you're seeking blackout curtains for a peaceful night's sleep or sheer drapes to infuse your room with natural light, we have the perfect solution for you.",
    },
    {
      title: "Craftsmanship at its Finest",
      subtitle: "Quality Products for Every Space",
      text: "Elevate your interior design with Hues & Shades. Visit us today to explore our stunning selection of curtains and discover how our expert team can help you find the perfect window treatments for your home. With our commitment to excellence and personalized service, we're here to make your decorating dreams a reality.",
    },
  ];

  return (
    <Box
      h={"55vh"}
      bgImage="url('src/assets/home.jpg')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize={"cover"}
      backdropFilter={blur("1px")}
      id="Home"
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={4000}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        {...swiperOptions}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        {" "}
        <Box
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></Box>
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Flex direction={"column"} justifyContent={"center"}>
              <Box className="title" data-swiper-parallax="-300">
                <Heading
                  fontSize={{base:"1.6rem", sm: "1.8rem", lg: "2.4rem" }}
                  letterSpacing={"2px"}
                  textAlign={"center"}
                >
                  {slide.title}
                  <br />
                  {slide.subtitle}
                </Heading>
              </Box>

              <div className="text" data-swiper-parallax="-100">
                <Text
                  as={"p"}
                  fontSize={{ base: "1.4rem", sm: "1.2rem" }}
                  display={{ base: "none", sm: "block" }}
                  w={[300, 500, 600]}
                  textAlign={"center"}
                  letterSpacing={"1px"}
                >
                  {slide.text}
                </Text>
              </div>
            </Flex>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default HeroSection;
