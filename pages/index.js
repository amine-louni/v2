import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Amine Louni</title>
        <meta name="description" content="Generated by Amine Louni" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>tset</h1>
        <button className="btn">Check out my works</button>
      </main>

      <footer>footer</footer>
    </div>
  );
}
