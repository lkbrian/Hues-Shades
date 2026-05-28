import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { EffectFade, Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { HashLink } from "react-router-hash-link";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

function HeroSection() {
  const swiperOptions = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
    },
  };

  const slides = [
    {
      title: "Welcome to Crafted Hues & Shades",
      subtitle: "Where Elegance Meets Functionality",
      text: "Luxury curtains, sheers, blinds, and interior details curated to make every room feel calm, polished, and personal.",
      image:
        "/about/liming-room-decor.jpg",
      tags: ["Curtains", "Sheers", "Blinds"],
    },
    {
      title: "Elevate Your Space",
      subtitle: "Discover Our Exquisite Collection",
      text: "From blackout comfort to light-filled drapery, our team helps you choose finishes that work beautifully for daily living.",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=80",
      tags: ["Wall Decor", "Cabinetry", "Gypsum"],
    },
    {
      title: "Craftsmanship at its Finest",
      subtitle: "Quality Products for Every Space",
      text: "Tailored solutions for homes, offices, hotels, and institutions across Nairobi, designed with care from consultation to install.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=80",
      tags: ["Residential", "Commercial", "Custom Fit"],
    },
  ];

  return (
    <Box
      as="section"
      className="hero-section"
      id="Home"
    >
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        {...swiperOptions}
        modules={[EffectFade, Pagination, Navigation, Autoplay]}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Box
              className="hero-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <Box className="hero-overlay" />
              <Flex className="hero-content">
                <Text className="hero-kicker">Interior Design Studio</Text>
                <Heading
                  as={index === 0 ? "h1" : "h2"}
                  className="hero-title"
                >
                  {slide.title}
                </Heading>
                <Text className="hero-subtitle">{slide.subtitle}</Text>
                <Text className="hero-text">{slide.text}</Text>
                <Flex className="hero-tags">
                  {slide.tags.map((tag) => (
                    <Text as="span" key={tag}>
                      {tag}
                    </Text>
                  ))}
                </Flex>
                <Flex className="hero-actions">
                  <Button
                    as={HashLink}
                    smooth
                    to="/Services#Services"
                    className="hero-action-primary"
                  >
                    Explore Services
                  </Button>
                  <Button
                    as={HashLink}
                    smooth
                    to="/Contact#Contact"
                    className="hero-action-secondary"
                  >
                    Book Consultation
                  </Button>
                </Flex>
              </Flex>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default HeroSection;
