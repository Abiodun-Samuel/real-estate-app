import hero from "../assets/images/hero.jpg";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { BsFillHouseFill } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          m="10"
          textAlign="center"
        >
          <Box minW={300} maxW={600}>
            <Text
              fontSize="4xl"
              color="#F5B041"
              fontWeight="bold"
              marginBottom="5"
            >
              Lorem, ipsum dolor.
            </Text>
            <Text fontSize="lg" color="#dddddd" paddingBottom={5}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum assumenda laborum consectetur corporis temporibus?
              Delectus fugiat magnam temporibus cum soluta?
            </Text>
          </Box>
        </Flex>
      </div>
      <div className="sub-hero">
        <Flex
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          p="3"
          // marginTop="-35px"
          marginBottom="25px"
          marginX={"auto"}
          maxWidth={350}
          boxShadow="xl"
          textAlign="center"
          rounded="md"
          bg="white"
        >
          <Box height={100}>
            <Text
              fontSize="lg"
              fontWeight="bold"
              color="#F5B041"
              paddingBottom={5}
              display="flex"
              alignItems="center"
              zIndex={100}
              justifyContent="space-between"
            >
              <BsFillHouseFill /> Explore avalaible properties
            </Text>
            <Link href="/search?purpose=for-rent">
              <a className="btn">For Rent</a>
            </Link>
            <Link href="/search?purpose=for-sale">
              <a className="btn">For Sale</a>
            </Link>
          </Box>
        </Flex>
      </div>
    </>
  );
};

export default Hero;
