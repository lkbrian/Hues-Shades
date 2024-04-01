import { Box } from "@chakra-ui/react";
import { FiArrowUp } from "react-icons/fi";
import { useState, useEffect } from "react";

function BackToTop() {
  // const top = useRef(0)
  const [showButton, setShowButton] = useState(false);
  const handleShowButton = () => {
    if (!showButton && window.scrollY > 150) {
      setShowButton(true);
      return;
    }
    if (!showButton && window.scrollY <= 150) {
      setShowButton(false);
      return;
    }
  };
  window.addEventListener("scroll", handleShowButton);

  useEffect(() => {
    return window.removeEventListener("scroll", handleShowButton);
  });

  const scrollToRef = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
    boxShadow={'lg'}
      position={"fixed"}
      bottom={"70px"}
      zIndex={"3"}
      color={"#fff8ac"}
      right={"24px"}
      borderRadius={"md"}
      bg={"#383838"}
      cursor={"pointer"}
      p={"4px"}
      display={showButton ? "inline": "none"}
      onClick={() => scrollToRef()}
    >
      <FiArrowUp fontSize={"1.4rem"} />
    </Box>
  );
}

export default BackToTop;
