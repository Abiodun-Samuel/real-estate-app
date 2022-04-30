import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
      </Head>
      <Box max-width="1280px" m="auto">
        <header>Navbar</header>
        <main>{children}</main>
        <footer>footer</footer>
      </Box>
    </>
  );
};

export default Layout;
