import Head from "next/head";

import NFTList from "./NFTList";




export default function Marketplaces({ NFTs }: any) {

  return (

    <>

      <Head>

        <title>My Next.js website</title>

        <meta name="description" content="a demo for roxo.ir/blog" />

        <meta name="keywords" content="web development, programming" />

        <link rel="icon" href="/favicon.ico" />

      </Head>

      <NFTList NFTs={NFTs} />

    </>

  );

}






