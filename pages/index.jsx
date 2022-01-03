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

export async function getStaticProps() {
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
        <meta
          name="title"
          content="Amine Louni - Full-stack  software engineer "
        />
        <meta
          name="description"
          content="Amine Louni is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta
          property="og:title"
          content="Amine Louni - Full-stack  software engineer "
        />
        <meta
          property="og:description"
          content="Amine Louni is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
        />
        <meta
          property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta
          property="twitter:title"
          content="Amine Louni - Full-stack  software engineer "
        />
        <meta
          property="twitter:description"
          content="Amine Louni is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
        />

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
