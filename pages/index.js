import Head from "next/head";

import About from "../src/PageComponents/About";
import Projects from "../src/PageComponents/Projects";
import Experience from "../src/PageComponents/Experience";
import Contact from "../src/PageComponents/Contact";
import Homepage from "../src/PageComponents/Home";
import Navbar from "../src/PageComponents/Navbar";
import Footer from "../src/PageComponents/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Afroz Quraishi</title>
        <meta
          name="description"
          content="My name is Afroz Quraishi. I am a pre-final year student in the department of Information Technology @IIIT Gwalior. Currently, I am working in a startup as a Frontend Developer, Next.js and I have been working with Reactjs and related libraries/frameworks since 2020."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <Homepage />
      <hr />
      <About />
      <hr />
      <Experience />
      <hr />
      <Projects />
      <hr />
      <Contact />
      <Footer />
    </div>
  );
}
