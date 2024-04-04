import {
  Box,
  Flex,
  Heading,
  Button,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
  Link,
  Icon,
  Text,
} from "@chakra-ui/react";
import { FaFacebookF, FaTiktok,FaInstagram,FaMailBulk } from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";

function Contact() {
  const socialMediaLinks = [
    {
      platform: "Facebook",
      icon: <FaFacebookF fontSize={"1.4rem"} />,
      url: "https://www.facebook.com/profile.php?id=100087406458189&mibextid=ZbWKwL",
    },
    {
      platform: "TikTok",
      icon: <FaTiktok fontSize={"1.4rem"} />,
      url: "https://vm.tiktok.com/ZMMJ9yhXM/",
    },
    {
      platform: "Instagram",
      icon: <FaInstagram fontSize={"1.4rem"} />,
      url: "https://www.instagram.com/huesshades1?igsh=MTk1eWYyNnNjZGJpbQ==",
    },
  ];

  return (
    <Box id="Contact" minH={"100vh"} p={4}>
      <Heading textAlign={"center"} fontSize={{ base: "1.7rem", md: "2xl" }}>Get in Touch</Heading>

      <Flex flexDir={{ base: "column", md: "row" }} justify="space-evenly" >
        <Flex flexWrap={"wrap"}mt={8} w={{base:'100%',md:'50%'}}justify="space-evenly">
        <Box mb={4}>
          <Heading fontSize={{ base: "lg", md: "xl" }}>Hues & Shades</Heading>
          <Text fontSize={{ base: "sm", md: "md" }} maxW="300px" mt={2}>
            Transform your home with our exquisite collection of hues and
            shades. Discover the perfect colors and textures to elevate your
            space.
          </Text>
          <Flex mt={4}>
            {socialMediaLinks.map((link, index) => (
              <Box
                key={index}
                display={"flex"}
                cursor={"pointer"}
                w={"40px"}
                h={"40px"}
                justifyContent={"center"}
                alignItems={"center"}
                borderRadius={"full"}
                border={"2px solid #111"}
                mr={2}
                mb={2}
              >
                <Link href={link.url} target="_blank">
                  {link.icon}
                </Link>
              </Box>
            ))}
          </Flex>
        </Box>
        <Box mb={{ base: 4, md: 0 }}>
          <Flex align="center" mb={2}>
            <Icon as={MdLocationOn} color="#111" fontSize={'1.5rem'} mr={2} />
            <Text fontSize={{ base: "sm", md: "md" }}>Nairobi, Kenya</Text>
          </Flex>

          <Flex align="center" mb={2}>
            <Icon as={FaMailBulk} color="#111" fontSize={'1.5rem'} mr={2} />
            <Link href="mailto:info@huesandshades.com" fontSize={{ base: "sm", md: "md" }}>huesshades.info@gmail.com</Link>
          </Flex>

          <Flex align="center" mb={2}>
            <Icon as={MdPhone} color="#111" fontSize={'1.5rem'} mr={2} />
            <Text fontSize={{ base: "sm", md: "md" }}>+254 712 926 862 <br /> +254 741 624 223</Text>
          </Flex>

          <Text fontWeight="bold" fontSize={{ base: "lg", md: "xl" }} mt={4} mb={2}>Opening Hours</Text>
          <Text fontSize={{ base: "sm", md: "md" }} mb={2}><strong>Monday - Saturday:</strong> 05:00 AM - 10:00 PM</Text>
          <Text fontSize={{ base: "sm", md: "md" }} mb={2}><strong>Sunday:</strong> 02:00 PM - 10:00 PM</Text>
        </Box>
        </Flex>

        <Box mt={8}w={{base:'100%',md:'50%'}}px={{base:2,md:20}}>
        <Heading fontSize={{ base: "lg", md: "xl" }}>Send us a Message</Heading>
        <Box mt={4}>
          <form>
            <FormControl id="name" isRequired>
              <FormLabel>Your Name</FormLabel>
              <Input type="text" placeholder="John Doe" />
            </FormControl>

            <FormControl id="email" mt={4} isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" placeholder="john@example.com" />
              <FormHelperText>
                We&apos;ll never share your email.
              </FormHelperText>
            </FormControl>

            <FormControl id="phone" mt={4}>
              <FormLabel>Phone number</FormLabel>
              <Input type="tel" placeholder="123-456-7890" />
            </FormControl>

            <FormControl id="message" mt={4} isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Enter your message here" />
            </FormControl>

            <FormControl id="location" mt={4}>
              <FormLabel>Location</FormLabel>
              <Input type="text" placeholder="Enter your location" />
              <FormHelperText>
                Provide information about your location (optional).
              </FormHelperText>
            </FormControl>

            <Button mt={8} bg={"#111"} color={"#fff"} _hover={{ bg: "#222" }} type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
      </Flex>
      
    </Box>
  );
}

export default Contact;
