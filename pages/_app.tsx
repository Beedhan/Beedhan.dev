import "../styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "../components/home/nav/navbar";
import Footer from "../components/footer/Footer";
import { Toaster } from "react-hot-toast";
import { AnimatePresence, motion } from "framer-motion";
import Router from "next/router";

function MyApp({ Component, pageProps, router }: AppProps) {
  const routeChange = () => {
    // Temporary fix to avoid flash of unstyled content
    // during route transitions. Keep an eye on this
    // issue and remove this code when resolved:
    // https://github.com/vercel/next.js/issues/17464

    const tempFix = () => {
      const allStyleElems = document.querySelectorAll('style[media="x"]');
      allStyleElems.forEach((elem) => {
        elem.removeAttribute("media");
      });
    };
    tempFix();
  };

  Router.events.on("routeChangeComplete", routeChange);
  Router.events.on("routeChangeStart", routeChange);

  return (
    <>
      <Toaster />
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
              x: -200,
              y: 0,
            },
            pageAnimate: {
              opacity: 1,
              x: 0,
              y: 0,
            },
            pageExit: {
              opacity: 0,
              y: -100,
              x: 0,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default MyApp;
