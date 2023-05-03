import { GetStaticPropsContext } from "next/types/index";



import Link from "next/link";




const article = ({ article }: any) => {

  return (

    <>

      <h1>{article.name}</h1>

      <p>{article.description}</p>

      <br />

      <Link href="/">Go Back</Link>

    </>

  );

};




export const getStaticProps = async (context: GetStaticPropsContext) => {

  const res = await fetch(`http://localhost:3004/nfts/${context.params?.id}`);




  const article = await res.json();




  return {

    props: {

      article,

    },

  };

};




export const getStaticPaths = async () => {

  const res = await fetch(`http://localhost:3004/nfts`);




  const articles = await res.json();




  const ids = articles.map((article: any) => article.id);

  const paths = ids.map((id: any) => ({ params: { id: id.toString() } }));




  return {

    paths,

    fallback: false,

  };

};




export default article;