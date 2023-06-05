import Marketplaces from "@/components/Marketplaces";
import SlideBar from "@/components/SlideBar";
import Head from "next/head";
import { useEffect, useState } from "react";
import { nfts } from "../data";
export default function Home({ articles }: any) {
  return (
    <div>
      <Head>
        <title>Megasis</title>

        <meta name="description" content="a demo for roxo.ir/blog" />

        <meta name="keywords" content="web development, programming" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-12 grid lg:grid-cols-3 grid-cols-1 gap-12">
        <div className="lg:col-span-2">
          <Marketplaces NFTs={articles} />
        </div>
        <SlideBar />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const articles = nfts;
  return {
    props: {
      articles,
    },
  };
};
