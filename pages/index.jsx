import Head from "next/head";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Jobs from "../components/sections/Jobs";
import Works from "../components/sections/Works";
import Contact from "../components/sections/Contact";

export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.querySelector("body").classList.add("blurred");
    } else {
      document.querySelector("body").classList.remove("blurred");
    }
  }, [open]);
  return (
    <>
      <Head>
        <title>Amine Louni</title>
        <meta name="description" content="Generated by Amine Louni" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={open && "blurred"}>
        <Navbar open={open} setOpen={setOpen} />
        <Hero />

        <About />

        <Jobs />

        <Works />

        <Contact />
      </main>
      <footer className="footer">
        <div className="container text-center">
          <p>Built With Next.js by Amine Louni</p>
        </div>
      </footer>
    </>
  );
}
