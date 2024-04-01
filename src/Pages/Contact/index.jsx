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
  Text
} from "@chakra-ui/react";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { BsEnvelopeAtFill } from "react-icons/bs";
function Contact() {
  return (
    <Box id="Contact" minH={'100vh'}>
      <Heading textAlign={"center"}>Get in Touch</Heading>
      <Flex flexDir={"row-reverse"}flexWrap={"wrap-reverse"}>
      <Box maxW={{ base: "100%", md: "lg" }} mx="auto" mt={8} p={6} borderRadius="lg">
      <form>
        <FormControl id="name" isRequired>
          <FormLabel>Your Name</FormLabel>
          <Input type="text" placeholder="John Doe" />
        </FormControl>

        <FormControl id="email" mt={4} isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="john@example.com" />
          <FormHelperText>We&quot;ll never share your email.</FormHelperText>
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
          <FormHelperText>Provide information about your location (optional).</FormHelperText>
        </FormControl>

        <Button mt={8} bg={'#111'} color={'#fff'} _hover type="submit">
          Submit
        </Button>
      </form>
    </Box>
    <Box maxW="md" mx="auto" mt={8} p={6}  borderRadius="lg">
      <Text fontWeight="bold" fontSize="xl" mb={4}>Hues & Shades</Text>
      <Text mb={4}>Transform your home with our exquisite collection of hues and shades. Discover the perfect colors and textures to elevate your space.</Text>
      
      <Flex align="center" mb={4}>
        <Icon as={MdLocationOn}color="#111" fontSize={'2rem'}  mr={2} />
        <Text>Nairobi, Kenya</Text>
      </Flex>

      <Flex align="center" mb={4}>
        <Icon as={BsEnvelopeAtFill} color="#111" fontSize={'2rem'} mr={2} />
        <Link href="mailto:info@huesandshades.com">huesshades.info@gmail.com</Link>
      </Flex>

      <Flex align="center" mb={4}>
        <Icon as={MdPhone} color="#111" fontSize={'2rem'} mr={2} />
        <Text>+254 712 926 862</Text>
      </Flex>

      <Flex align="center" mb={4}>
        <Icon as={MdPhone} color="#111" fontSize={'2rem'} mr={2} />
        <Text>+254 741 624 223</Text>
      </Flex>

      <Text fontWeight="bold" fontSize="xl" mt={8} mb={4}>Opening Hours</Text>
      <Text mb={2}><strong>Monday - Saturday:</strong> 05:00 AM - 10:00 PM</Text>
      <Text mb={2}><strong>Sunday:</strong> 02:00 PM - 10:00 PM</Text>
    </Box>

      </Flex>
    </Box>
  )
}

export default Contact