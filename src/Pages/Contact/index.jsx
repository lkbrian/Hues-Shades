import { Box, Flex, Heading, Input } from "@chakra-ui/react"

function Contact() {
  return (
    <Box id="Contact" minH={'100vh'}>
      <Heading>Get in Touch</Heading>
      <Flex>
        <Box>
          <Input _placeholder={"name"} />
        </Box>


      </Flex>
    </Box>
  )
}

export default Contact