import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/values-cards.css";
import "@/components/styles.css";
import { AnimatePresence } from "framer-motion";
import { Cabin } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

// Load Cabin font from Google Fonts
const cabin = Cabin({ 
  subsets: ["latin"], 
  variable: "--font-cabin",
  weight: ["400", "500", "600", "700"]
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://api.openweathermap.org"></link>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      </Head>
      <main
        className={`${cabin.variable} font-sans w-full min-h-screen h-full`}
      >
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
