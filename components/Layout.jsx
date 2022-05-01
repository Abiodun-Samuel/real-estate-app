import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real-Villa</title>
      </Head>

      <Box max-width="1280px" m="auto">
        <header>
          <Navbar />
        </header>

        <Hero />

        {/* <main>{children}</main> */}

        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
