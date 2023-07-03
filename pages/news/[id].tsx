/* eslint-disable @next/next/no-img-element */
import { GetStaticPropsContext } from "next/types/index";
import { NewsStoriesData } from "@/data";
import SlideBar from "@/components/SlideBar";



const News = ({ news }: any) => {
  return (
    <>
    
    </>
  );
};
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id;
  if (typeof id == "string") {
    const article = NewsStoriesData.find((nft) => nft.id == parseInt(id));
    return {
      props: {
        article,
      },
    };
  }
};

export const getStaticPaths = async () => {
  const articles = NewsStoriesData;

  const ids = articles.map((article: any) => article.id);

  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));

  return {
    paths,

    fallback: false,
  };
};

export default News;
