import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/home/nav/navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <AnimatePresence>
      <Toaster />
      <Navbar />
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            opacity: 0,
            y: "100px",
          },
          pageAnimate: {
            opacity: 1,
            y: "0px",
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
      <Footer />
    </AnimatePresence>
  );
}

export default MyApp;
