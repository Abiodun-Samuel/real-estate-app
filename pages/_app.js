import { ChakraProvider, chakraProvider } from "@chakra-ui/react";
import NProgress from "nprogress";
import Head from "next/head";
import Router from "next/router";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
