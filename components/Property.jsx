import Link from "next/link";
// import Image from "next/image";
import { Image } from "@chakra-ui/react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/avatar";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import fallback from "../assets/images/fallback.jpg";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => {
  return (
    <Link href={`/property/${externalID}`} passHref>
      <Flex
        flexWrap="wrap"
        w={["320px"]}
        p="2"
        borderRadius={"base"}
        margin={["5px", "10px"]}
        cursor="pointer"
        backgroundColor={"#white"}
        boxShadow={"2xl"}
      >
        <Box>
          <Image
            src={coverPhoto ? coverPhoto.url : fallback}
            width={400}
            height={260}
            objectFit="cover"
            fallbackSrc={"../assets/images/fallback.jpg"}
            alt="house image"
          />
        </Box>
        <Box w="full">
          <Flex
            paddingTop="2"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
          >
            <Flex alignItems="center" flexWrap="wrap">
              <Box paddingRight="3" color="green.400">
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight="bold" fontSize="lg">
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size="sm" src={agency?.logo?.url}></Avatar>
            </Box>
          </Flex>
          <Flex
            flexWrap="wrap"
            alignItems="center"
            p="1"
            justifyContent="space-between"
            w="250px"
            color="blue.400"
          >
            {rooms}
            <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
          </Flex>
          <Text fontSize="lg">
            {title.length > 30 ? title.substring(0, 30) + "..." : title}
          </Text>
        </Box>
      </Flex>
    </Link>
  );
};

export default Property;
