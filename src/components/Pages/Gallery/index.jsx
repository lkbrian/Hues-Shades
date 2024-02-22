import { Box, Flex, Image } from "@chakra-ui/react"
import { images } from "../../../assets/galleryImages/images"

function Gallery() {
  console.log(images)
  return (
    <Flex flexWrap={"wrap"} pt={"40px"} gap={"20px"} justifyContent={"center"} id="Gallery" w={'100vw'}>
      {images.map((item, index) => (
        <Box key={index} width={'400px'} borderRadius={'8px'} >
          <Box>
            {item.type === 'image' ? (
              <Image src={item.file} alt="no image" objectFit={"cover"} height={'500px'}/>
            ) : (
              <video controls width="100%"  >
                <source src={item.file} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </Box>
        </Box>
      ))}
    </Flex>
  )
}

export default Gallery