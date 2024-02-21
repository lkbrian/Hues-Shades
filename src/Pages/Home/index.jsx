import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { Parallax, Pagination, Navigation,Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import WhyUs from "../../components/WhyUs";

function Home() {
  const swiperOptions = {
    effect: 'cube', // Use 'cube' directly as the effect
    direction: 'horizontal',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    cubeEffect: {
      slideShadows: true,
    },
  };
  return (
    <Box  height={"auto"} minH={'100vh'} >
      <Box
        // h={"100vh"}
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
          modules={[Parallax, Pagination, Navigation,Autoplay]}
          className="mySwiper"
        >
          <Box
            slot="container-start"
            className="parallax-bg"
            data-swiper-parallax="-23%"
          ></Box>
           <SwiperSlide >
            <Flex direction={'column'}  mt={{ base: ' 20px', md: "40px", lg: "56px" }}>
            <Box  className="title" data-swiper-parallax="-300" >
             <Heading fontSize={{base:"1.8rem",lg:"2.4rem"}}letterSpacing={'2px'}>Welcome to Hues & Shades: <br />Where Elegance Meets Functionality</Heading>
            </Box>
            
            <div className="text" data-swiper-parallax="-100">
              <Text as={"p"} fontSize={'1.2rem'} w={[300, 500, 600]}>
             Welcome to Hues & Shades, where luxury meets functionality. 
             Our curated collection of curtains brings elegance and style to any space,
              transforming it into a haven of comfort and beauty. From timeless classics to modern designs, 
              we offer a wide range of fabrics, colors, and patterns to suit every taste and preference.
              </Text>
            </div>
            </Flex>
          
          </SwiperSlide>
        
          <SwiperSlide>
            <Flex  direction={'column'}  mt={{ base: ' 20px', md: "40px", lg: "56px" }}>
          <div className="title" data-swiper-parallax="-300">
               <Heading fontSize={{base:"1.8rem",lg:"2.4rem"}}letterSpacing={'2px'} > Elevate Your Space: <br />Discover Our Exquisite Curtain Collection</Heading>
            </div>
            <div className="text" data-swiper-parallax="-100">
              <Text as={"p"} fontSize={'1.2rem'}  w={[330, 500, 600]}>
               Quality craftsmanship is at the heart of everything we do. 
               Each curtain in our collection is meticulously crafted using premium materials and attention to detail, 
               ensuring durability and long-lasting beauty. Whether you&apos;re seeking blackout curtains for a peaceful night&apos;s sleep or sheer drapes to infuse your room with natural light,
                we have the perfect solution for you.


              </Text>
            </div>
            </Flex>
          
          </SwiperSlide>
          <SwiperSlide>
            <Flex  direction={'column'}  >
         <div className="title" data-swiper-parallax="-300">
              <Heading fontSize={{base:"1.8rem",lg:"2.4rem"}}letterSpacing={'2px'}>  Craftsmanship at its Finest: <br />Quality Curtains for Every Space</Heading>
            </div>
            <div className="text" data-swiper-parallax="-100">
              <Text as={"p"}fontSize={'1.2rem'}  w={[300, 500, 600]}>
             Elevate your interior design with Hues & Shades. Visit us today to explore our stunning selection of curtains and 
             discover how our expert team can help you find the perfect window treatments for your home.
              With our commitment to excellence and personalized service,
              we&apos;re here to make your decorating dreams a reality.
              </Text>
            </div>
            </Flex>
       
          </SwiperSlide>
        </Swiper>
      </Box>
      <WhyUs/>
    </Box>
  );
}

export default Home;
