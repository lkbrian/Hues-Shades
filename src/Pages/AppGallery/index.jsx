import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useState } from "react";
import { imagesData as images } from "../../assets/galleryImages/imagesData";
import { Box, Heading, Image, Text } from "@chakra-ui/react";
import ReactPlayer from "react-player";
import Pagination from "../../components/Paginate";
import React from "react";

function AppGallery() {
  const [currentPage,setCurrentPage] = useState(1);
  const [imagesPerPage] = useState(20);
  //get current images
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentimages = images.slice(indexOfFirstImage, indexOfLastImage);

const paginate= (pageNumber)=>setCurrentPage(pageNumber)
  return (
    <>
      <Box px={"8px"}>
        <Heading pt={"20px"} textAlign={"center"}>
          Our gallery
        </Heading>
        <Text textAlign="center" fontSize="lg" mb="4">
          Explore our collection of images and videos showcasing moments
          captured with our amazing products.
        </Text>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}>
          <Masonry gutter="20px">
            {currentimages.map((image, i) => (
              <React.Fragment key={i}>
                {image.type === "image" ? (
                  <Image
                    src={image.src}
                    style={{ width: "100%", display: "block" }}
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
              </React.Fragment>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Box>
      <Pagination imagesPerPage={imagesPerPage} totalImages={images.length} paginate={paginate} />
    </>
  );
}

export default AppGallery;
