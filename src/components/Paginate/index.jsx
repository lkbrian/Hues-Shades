import { Box, Flex, Text } from "@chakra-ui/react";
import { HiChevronDoubleLeft,HiChevronDoubleRight } from "react-icons/hi";
import PropTypes from "prop-types";
import { useState } from "react";
function Pagination({ imagesPerPage, totalImages, paginate }) {
  const [activePage, setActivePage] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumbers.push(i);
  }
  function handleClick(number) {
    paginate(number);
    setActivePage(number);
  }

  return (
    <Box margin={"auto"} display={"flex"} alignItems={"center"} gap={4}>
      <HiChevronDoubleLeft fontSize={24} />
      <Flex
        boxShadow={"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);"}
        bg={"#111"}
        color={"#fff8ac"}
        my={"20px"}
        borderRadius={"md"}
      >
        {pageNumbers.map((number, index) => (
          <Text
            onClick={() => handleClick(number)}
            _hover={{ bg: "#fff8ac", color: "#111", cursor: "pointer" }}
            px={"22px"}
            py={"8px"}
            key={index}
            bg={activePage === number ? "#fff8ac" : "transparent"}
            color={activePage === number ? "#111" : "#fff8ac"}
            cursor="pointer"
          >
            {number}
          </Text>
        ))}        
      </Flex>
      <HiChevronDoubleRight fontSize={24} />
    </Box>
  );
}

export default Pagination;
Pagination.propTypes = {
  imagesPerPage: PropTypes.number,
  totalImages: PropTypes.number,
  paginate: PropTypes.func,
};
