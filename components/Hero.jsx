import hero from "../assets/images/hero.jpg";
import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/react";
const Hero = () => {
  return (
    <div className="hero">
      {/* <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="30"> */}
      <Text>Lorem, ipsum dolor.</Text>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        assumenda laborum consectetur corporis temporibus? Delectus fugiat
        magnam temporibus cum soluta?
      </Text>
      {/* </Flex> */}
    </div>
  );
};

export default Hero;
