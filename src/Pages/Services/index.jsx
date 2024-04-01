import { Box, Center, Flex, Heading, Image, Text } from "@chakra-ui/react";
import {
  FaGoogleWallet,
  FaShapes,
  FaTools,
  FaObjectGroup,
} from "react-icons/fa";
import { GiTheaterCurtains } from "react-icons/gi";
import { BiSolidCabinet } from "react-icons/bi";
// import { SiMedibangpaint } from "react-icons/si";

function Services() {
  const services = [
    {
      title: "Window Treatment",
      description:
        "Offering curtains, sheers, blinds, and curtain rods & rails, our bespoke solutions enhance privacy, light control, and aesthetic appeal in any space. Explore our range of fabrics, styles, and accessories for personalized window treatments.",
      products: ["Curtains", "Sheers", "Blinds", "Curtain rods & rails"],
      icon: GiTheaterCurtains,
    },
    {
      title: "Wall Decor",
      description:
        "Elevate your interiors with our wall decor options, adding depth, texture, and visual interest for a sophisticated ambiance tailored to your taste. Discover our selection of decorative panels, wallpapers, and artwork.",
      products: ["Decorative panels", "Wallpapers", "Artwork"],
      icon: FaGoogleWallet,
    },
    {
      title: "Cabinetry",
      description:
        "Experience functionality and style with our custom cabinetry solutions, optimizing space while exuding timeless elegance in kitchens, bathrooms, or storage areas. Browse our collection of kitchen cabinets, bathroom vanities, and storage units.",
      products: ["Kitchen cabinets", "Bathroom vanities", "Storage units"],
      icon: BiSolidCabinet,
    },
    {
      title: "Gypsum",
      description:
        "Transform your interiors with gypsum services, offering endless possibilities for architectural expression and refinement through intricate ceiling designs and seamless wall finishes. Explore our gypsum ceiling tiles, wall panels, and decorative moldings.",
      products: ["Gypsum ceiling tiles", "Wall panels", "Decorative moldings"],
      icon: FaShapes,
    },
    {
      title: "Wall to Wall Carpeting",
      description:
        "Blend craftsmanship and innovation with our wall-to-wall carpeting services, delivering seamless, tailored solutions from built-in shelving to bespoke furniture pieces for your interior spaces. Discover our range of custom shelves, cabinets, and furniture.",
      products: ["Custom shelves", "Cabinets", "Furniture"],
      icon: FaTools,
    },
    {
      title: "Aluminum Partition Wall",
      description:
        "Achieve spatial delineation and modern aesthetics with our aluminum partition wall solutions, offering sleek delineation while maintaining an open and inviting atmosphere with flexibility and durability. Explore our aluminum partition walls for versatile space division.",
      products: ["Aluminum partition walls"],
      icon: FaObjectGroup,
    },
  ];

  const clients = [
    {
      title: "Residential",
      description:
        "Enhance homes, apartments, and condominiums with tailored interior design solutions for cozy living spaces.",
      cases: ["Homes", "Apartments", "Condominiums"],
      image:
        "https://media.designcafe.com/wp-content/uploads/2021/08/07190905/10-low-budget-house-design.jpg",
    },
    {
      title: "Commercial",
      description:
        "Create inviting work environments for offices, retail spaces, and restaurants with functional interior design solutions.",
      cases: ["Offices", "Retail Spaces", "Restaurants"],
      image:
        "https://media.licdn.com/dms/image/D5612AQEO8f4enCZhag/article-cover_image-shrink_720_1280/0/1659658838846?e=2147483647&v=beta&t=-gmZX1PYWOGkcIsSMKOW1Ww_TkYkj5hrQT8WfYnTqYQ",
    },
    {
      title: "Institutions",
      description:
        "Ensure comfort in hotels, and medical and educational facilities with specialized interior design solutions prioritizing functionality.",
      cases: ["Hospitals","Hotels","Medical Facilities","Educational Facilities",
      ],
      image:
        "https://tubadzincommunity.com/ptoophee/image.webp",
    },
    {
      title: "Governmental",
      description:
        "Foster efficient and functional spaces for government offices, agencies, and institutions with professional interior design solutions.",
      cases: ["Government Offices", "Agencies", "Institutions"],
      image:
        "https://ctfassets.imgix.net/vh7r69kgcki3/3bRRy8JnrkH82RrmxDixFT/94fed47f2f8a3ef2f13d0d475a33e3d5/dedicated-desk_600.webp",
    },
  ];

  return (
    <Box id="Services" minH={"100vh"} textAlign={"center"} letterSpacing={1}>
      <Box
        display={"flex"}
        flexDir={"column"}
        p={"18px"}
        h={{ base: "180px", md: "300px" }}
        bgImage={
          "https://media.angi.com/s3fs-public/homeowners-builder-in-new-build.jpg"
        }
        mb={20}
        bgPos={"top"}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        position={"relative"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#fff"}
      >
        <div className="overlay-one"></div>
          <Heading zIndex={2} color={"#fff"} mt={"6"}>What We Do</Heading>
          <Text fontSize={"1.25rem"} w={[300, 400, 700]} textAlign={"center"} zIndex={2}>
            At Hues & Shades, we offer a comprehensive range of services
            tailored to elevate your living or working space. From exquisite
            window treatments to bespoke cabinetry solutions, each offering is
            meticulously crafted to meet your unique needs and preferences.
          </Text>
      </Box>

      <Flex
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={8}
        px={{ base: "10px", md: "30px" }}
        top={-10}
      >
        {services.map((service, index) => (
          <Flex
            key={index}
            bg={"#fffc"}
            w={"350px"}
            flexDir={"column"}
            alignItems={"center"}
            justifyContent={"center"}
            // borderTop={"6px solid #111"}
            px={4}
            py={10}
            transition={"background-color 0.4s"}
            textAlign={"center"}
            gap={"6px"}
            borderRadius={"md"}
            cursor={"pointer"}
            position={"relative"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            mb={7}
            minH={"380px"}
          >
            {/* {service.icon} */}
            <Box
              as={service.icon}
              borderRadius={"md"}
              fontSize="3.7rem"
              p={2}
              position={"absolute"}
              top={-8}
              bg={"#111"}
              color={"#fff"}
            />
            <Heading fontSize={"1.4rem"}>{service.title}</Heading>
            <Text>
              <Text mb={4}>{service.description}</Text>
              <Text>
                <b>Products: </b>
                <br />
                {service.products.join(", ")}
              </Text>
            </Text>
          </Flex>
        ))}
      </Flex>
      <Center display={"flex"} flexDir={"column"} p={"18px"}>
        <Heading mt={"6"}>Our Clients</Heading>
        <Text w={[300, 400, 700]} textAlign={"center"}>
          our clients are at the heart of everything we do. We pride ourselves
          on building strong and enduring relationships with individuals,
          families, and businesses alike.{" "}
        </Text>
      </Center>
      <Flex
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={8}
        px={{ base: "10px", md: "30px" }}
        top={-10}
      >
        {clients.map((client, index) => (
          <Flex
            key={index}
            bg={"#fffc"}
            w={"350px"}
            flexDir={"column"}
            alignItems={"center"}
            textAlign={"center"}
            gap={"4px"}
            borderRadius={"md"}
            cursor={"pointer"}
            boxShadow={" rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            mb={7}
          >
            <Box maxh={"200px"}w={"auto"}overflow={"hidden"}>
              <Image
                h={"100%"}
                w={"100%"}                
                objectFit={"cover"}
                src={client.image}
              />
            </Box>
            <Text as={"b"}>{client.title}</Text>
            <Text p={2}>{client.description}</Text>
            <Text p={2}>
              <b>use cases: </b>
              <br />
              {client.cases.join(", ")}
            </Text>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
}

export default Services;
