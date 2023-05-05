import Marketplaces from "@/components/Marketplaces";
import SlideBar from "@/components/SlideBar";
import Head from "next/head";

export default function Home({ articles }: any) {
  return (
    <div>
      <Head>
        <title>My Next.js website</title>

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
  const res = await fetch(`http://localhost:3004/nfts`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
