import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <img />
        <a href="/"> Home</a>
        <a href="/events"> events</a>
        <a href="/about-us"> about</a>
      </nav>
      <main className={styles.main}>
        {data?.map((ev) => (
          <a key={ev.id} href={`/events/${ev.id}`}>
            <Image width={200} height={200} alt={ev.title} src={ev.image} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </a>
        ))}
      </main>
      <footer className={styles.footer}>
        <p> © 2023 John Kim - A Project Built with Next.js </p>
      </footer>
    </>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  console.log(events_categories);

  return {
    props: {
      data: events_categories,
    },
  };
}
