import { Box, Flex, Image } from "@chakra-ui/react"
<<<<<<< HEAD
import { images } from "../../assets/galleryImages/images"
=======
import { images } from "../../../assets/galleryImages/images"
>>>>>>> d2409f5 ({Enhance}:Added an ImageDataStub & displayed the card item)

function Gallery() {
  console.log(images)
  return (
<<<<<<< HEAD
    <Flex flexWrap={"wrap"} pt={"40px"} gap={"20px"} justifyContent={"center"} id="Gallery" >
=======
    <Flex flexWrap={"wrap"} pt={"40px"} gap={"20px"} justifyContent={"center"} id="Gallery" w={'100vw'}>
>>>>>>> d2409f5 ({Enhance}:Added an ImageDataStub & displayed the card item)
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