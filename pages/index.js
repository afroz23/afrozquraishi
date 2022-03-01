import React from "react";
import Head from "next/head";
import About from "./about/index";
import Projects from "./projects/index";
import Experience from "./Experience/index";
import Contact from "./contact/index";
import Homepage from "../Components/Homepage";
import Navbar from "../Components/Navbar";
import Footer from "./Footer/index";
export default function Home() {
    return (
        <div>
            <Head>
                <title>Afroz Quraishi</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
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
