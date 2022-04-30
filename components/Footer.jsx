import { Box } from "@chakra-ui/react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <Box
      textAlign="center"
      p="5"
      color="whiteAlpha.500"
      borderTop="1px"
      borderColor="gray.100"
      background="blackAlpha.800"
    >
      Copyright © {year} Real-Villa, All Rights Reserved. <br />
      Designed & Developed By{" "}
      <a
        target="_blank"
        href="https://abiodunsamuel.com"
        rel="noreferrer"
        style={{ color: "#ccc" }}
      >
        Abiodun Samuel
      </a>
    </Box>
  );
};

export default Footer;
