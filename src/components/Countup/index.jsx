import { RiUserLocationFill } from "react-icons/ri";
import { IoIosPeople } from "react-icons/io";
import { BiSolidLike } from "react-icons/bi";
import {
  Flex,
  Heading,
  Text
} from "@chakra-ui/layout";
import CountUp from "react-countup";
import { Card } from "@chakra-ui/react";

function Countup() {
  const stats = [
    { category: "Satisfied clients", amount: "2381",icons:<BiSolidLike  size={"2rem"}/>},
    // { category: "Success Rate", amount: "92.6" },
    { category: "Visits", amount: "3000" ,icons:<RiUserLocationFill size={"2rem"}/>},
    { category: "Refferals", amount: "769",icons:<IoIosPeople size={"2.2rem"}/> },
  ];
  return (
    <>
    <Heading textAlign={'center'} mt={"30px"} pb={'8px'}>Our Numbers</Heading>
    <Text  mb={'30px'}textAlign={'center'}>Join the happy customers who&apos;ve transformed their spaces with Hues & Shades!</Text>
    <Flex
      gap={{base:"20px",md:"80px"}}
      flexWrap={"wrap"}
      justifyContent={"center"}
      alignItems={"center"}
      w={'100%'}
      m={'auto'}
        >
      {stats.map((stat, index) => {
        return (
      
          <Card  maxW="sm" key={index} w={"250px"} alignItems={"center"} justifyContent={'center'} h={'120px'} boxShadow={'none'} bg={"none"}>
            {stat.icons}
            <Heading color={'#111'}>
              <CountUp start={0} end={stat.amount} duration={3.25}></CountUp>+
            </Heading>
            <Text fontWeight={"md"} textTransform={'lowercase'} letterSpacing={"1px"} color={"#111"}>
              {stat.category}
            </Text>
          </Card>
        );
      })}
    </Flex>
    </>
  );
}

export default Countup;