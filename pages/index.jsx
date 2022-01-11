import Head from "next/head";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Jobs from "../components/sections/Jobs";
import Works from "../components/sections/Works";
import Contact from "../components/sections/Contact";
import AOS from "aos";
import { createClient } from "contentful";

export async function getServerSideProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const jobsRes = await client.getEntries({ content_type: "jobs" });
  const projectsRes = await client.getEntries({ content_type: "projects" });
  return {
    props: {
      jobs: jobsRes.items,
      projects: projectsRes.items,
    },
  };
}

export default function Home({ jobs, projects }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.querySelector("body").classList.add("blurred");
    } else {
      document.querySelector("body").classList.remove("blurred");
    }
  }, [open]);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Head>
        <meta name="robots" content="index, follow" />
        <title>Amine Louni</title>

        <title>Amine Louni - Full-stack software engineer </title>
        <meta name="title" content="Amine Louni - Software engineer" />
        <meta
          name="description"
          content="Amine Louni is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences"
        />
        <meta
          name="keywords"
          content="Sofware Engineer, React, React Native, Javascript, web, apps , android , front end, back end, full stack"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Amine Louni" />
        <meta property="og:image" content="/thumbnail.png" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={open && "blurred"}>
        <Navbar open={open} setOpen={setOpen} />
        <Hero />

        <About />

        <Jobs jobsData={jobs} />

        <Works projectsData={projects} />

        <Contact />
      </main>
      <footer className="footer">
        <div className="container text-center">
          <p>Built With Next.js and Contentful and deployed to vercel</p>
        </div>
      </footer>
    </>
  );
}
