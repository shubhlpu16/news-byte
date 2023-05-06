import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ChakraProvider } from '@chakra-ui/react';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>News Byte</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
