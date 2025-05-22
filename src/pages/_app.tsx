import "@/styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import type { AppProps } from "next/app";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 60,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  });

  return (
    <>
      <Head>
        <title>Inflexion Transcription</title>
      </Head>

      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <Toaster position="top-right" />
      </QueryClientProvider>
    </>
  );
}
