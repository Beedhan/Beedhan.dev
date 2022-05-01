import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/home/nav/navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
