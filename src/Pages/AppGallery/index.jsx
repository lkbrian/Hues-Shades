import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
// import { Box,Image } from "@chakra-ui/react";
import { imagesData as images } from "../../assets/galleryImages/imagesData";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";

function AppGallery() {
  return (
      
      <Box px={"8px"}>
      <Heading pt={"20px"} textAlign={"center"}>Our gallery</Heading>
      <Text textAlign="center" fontSize="lg" mb="4">
        Explore our collection of images and videos showcasing moments captured with our amazing products.
      </Text>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }} >
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <>
              {image.type === "image" ? (
              <Image
                key={i}
                src={image.src}
                style={{width: "100%", display: "block"}}
                alt=""
            />
              
            ) : (
              <ReactPlayer
              url={image.src}
              controls
              width="100%"
              height="auto"
            />
            )}
              </>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Box>
  );
}

export default AppGallery;
