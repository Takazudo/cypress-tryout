import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    if (!router.isReady) return;
    console.log("ready!!!");
    aaaa();
  }, [router.isReady]);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>Index Page!</main>
    </div>
  );
}
