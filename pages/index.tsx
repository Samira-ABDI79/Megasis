import Marketplaces from "@/components/Marketplaces";
import Head from "next/head";
import {nfts as articles} from '../db.json'
console.log(articles);





export default function Home({ articles }: any) {

  return (

    <div>

      <Head>

        <title>My Next.js website</title>

        <meta name="description" content="a demo for roxo.ir/blog" />

        <meta name="keywords" content="web development, programming" />

        <link rel="icon" href="/favicon.ico" />

      </Head>
<Marketplaces NFTs={articles} />
     

    </div>

  );

}



// export const getStaticProps = async () => {

//   const res = await fetch(`http://localhost:3004/nfts?_limit=6`);




//   const articles = await res.json();




//   return {

//     props: {

//       articles,

//     },

//   };

// };