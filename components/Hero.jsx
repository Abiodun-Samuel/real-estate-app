import hero from "../assets/images/hero.jpg";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
const Hero = () => {
  return (
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
            color="#ffffff"
            fontWeight="bold"
            marginBottom="5"
          >
            Lorem, ipsum dolor.
          </Text>
          <Text fontSize="lg" color="#dddddd">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
            assumenda laborum consectetur corporis temporibus? Delectus fugiat
            magnam temporibus cum soluta?
          </Text>
        </Box>
      </Flex>
    </div>
  );
};

export default Hero;
