import { GetStaticPropsContext } from "next/types/index";
import { NewsStoriesData } from "@/data";

import { useState } from "react";
import NextNFT from "@/components/NextNFT";
import SeeAlso from "@/components/SeeAlso";
import SlideBar from "@/components/SlideBar";

const News = ({ news }: any) => {
  return (
    <>
      <div>{news.name}</div>
    </>
  );
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  if (typeof id == "string") {
    const News = NewsStoriesData.find((nft) => nft.id == parseInt(id));
    return {
      props: {
        News,
      },
    };
  }
};

export const getStaticPaths = async () => {
  const Newsdata = NewsStoriesData;

  const ids = Newsdata.map((News: any) => News.id);

  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,

    fallback: false,
  };
};

export default News;
