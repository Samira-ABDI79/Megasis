import { GetStaticPropsContext } from "next/types/index";
import { NewsStoriesData } from "@/data";
import SlideBar from "@/components/SlideBar";
import { useState } from "react";
import NewsSeeAlso from "@/components/newsSeeAlso";

const News = ({ news }: any) => {
  return (
    <>
      <div className="my-12 grid lg:grid-cols-3 grid-cols-1 gap-12">
        <div className="lg:col-span-2 ">
          <div className="p-6 mx-3 mb-6 bg-white border border-gray-200 rounded lg:py-12 md:mx-10 md:p-16 dark:bg-zinc-800 dark:border-gray-700">
            <div className="flex justify-between">
              <div className="flex flex-wrap items-center">
                <img
                  className="object-cover w-10 h-10 mr-2 rounded-full"
                  src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1686142328~exp=1686142928~hmac=4684e527afaa6e57ee4c48ae67330e2b0a8f41268bc1881a7e812334f3985d28"
                  alt="Unifred"
                />
                <a
                  className="mr-4 text-sm leading-6 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-lime-200"
                  href="#"
                >
                  Unifred
                </a>
                <span className="mr-1 text-sm text-gray-600 dark:text-gray-300">
                  01.06.2023
                </span>
              </div>
              <div className="flex flex-wrap items-center">
                <a
                  target="_blank"
                  className="inline-block hover:text-indigo-600 dark:text-lime-200 dark:hover:text-lime-500"
                  href="https://telegram.me/share/url?url=https%3A%2F%2Fnftcalendar.io%2Fnews%2Ffewocious-unveils-details-of-fewos-pfp-collection%2F"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <h1 className="mt-3 mb-0 font-serif text-3xl font-medium text-black md:text-4xl dark:text-yellow-100">
              {news?.name}
            </h1>
            <img src="https://img.freepik.com/free-photo/bright-yellow-fire-blazing-against-night-sky-generated-by-ai_188544-11620.jpg?w=1380&t=st=1686142384~exp=1686142984~hmac=6dcf6f368242d903447d9d8a2fe178aa20a283fad02387f502cb35ff26c8bf0b" />
            <div className="content">
              <p className="my-4">
                <span>Prominent NFT Artist Fewocious has finally </span>
                <a
                  href="https://twitter.com/fewocious/status/1663975709096935424"
                  target="_blank"
                  rel="noopener"
                >
                  <span>announced</span>
                </a>
                <span>
                  {" "}
                  the launch of his long-awaited NFT collection titled 'Fewos,'
                  set to be released in a few months. Featuring 20,000 unique
                  Fewo characters, this series is a part of Fewocious' Web3
                  universe, known as FewoWorld.
                </span>
              </p>
              <p className="my-4">
                <span>According to the FewoWorld </span>
                <a
                  href="https://www.fewoworld.io/fewos"
                  target="_blank"
                  rel="noopener"
                >
                  <span>website</span>
                </a>
                <span>
                  {" "}
                  Fewos are hand-drawn characters with various traits, including
                  squiggly eyes, linework bones, and other unique features,
                  converted into stunning 3D art. Created in the artist’s
                  signature style, Fewos are vibrant, and a bit weird but
                  extremely unique.&nbsp;
                </span>
              </p>
              <p className="my-4">
                <span>
                  There are three unique species of Fewos – Frankenstein,
                  Misunderstood, and Humanoid with each Fewo having its
                  backstory and personality traits. These little inhabitants of
                  FewoWorld ‘have been created through the cosmic explosion of
                  Paint’ and will act as the counterparts to Paint Drops. The
                  sales for these unique PFPs will happen in three waves at the
                  end of August:&nbsp;
                </span>
              </p>
              <ul className="list-disc ml-9">
                <li>
                  <strong>Paint Holder Presale</strong>
                  <span>
                    {" "}
                    will be open for holders of NFTs from the Paint Drop,
                    allowing them to use their Paint Drops to redeem a free
                    Fewo.
                  </span>
                </li>
                <li>
                  <strong>Fewocious Art Holder Presale</strong>
                  <span>
                    {" "}
                    will allow holders of other Fewocious pieces to mint a Fewo
                    for a discounted price.&nbsp;
                  </span>
                </li>
                <li>
                  <strong>Public Sale</strong>
                  <span>
                    {" "}
                    will be open for everyone with final timing and prices to be
                    announced.
                  </span>
                </li>
              </ul>
              <p className="my-4">
                <span>
                  According to the site, each of the Fewo NFTs will be
                  accompanied by its own individual ERC-6551 'backpack' wallet.
                  After grabbing a Fewo, collectors will also be able to redeem
                  “Flowers” for their Fewos. They will act as mint passes to
                  allow collectors "bloom" into FewoFashion digital wearables
                  and accessories.
                </span>
              </p>
              <p className="my-4">
                <span>
                  Fewos' is a highly-anticipated drop among the NFT community
                  following the remarkable success of the artist's earlier NFT
                  drops. Fewocious is a prominent personality that made a mark
                  in the non-fungible realm, having collaborated with various
                  artists, having generated whopping sums in sales, and lots
                  more.&nbsp;
                </span>
              </p>
              <p>
                <span>
                  Fewocious is gaining increasing recognition for his expressive
                  style and unique approach to creating art in the digital
                  space. The upcoming Fewos collection is expected to add
                  another layer to Fewocious' growing universe as he seeks to
                  expand a community of collectors and fans around his work.
                </span>
              </p>
            </div>
            <div className="flex justify-between pt-4 mt-4">
              <div className="">
                <a
                  href="/n/collectible/"
                  className="p-1 mr-2 rounded dark:text-yellow-50 dark:hover:text-lime-200 "
                >
                  #Collectible
                </a>
              </div>
              <div className="">
                <a
                  target="_blank"
                  className="inline-block dark:text-lime-200 dark:hover:text-lime-500"
                  href="https://telegram.me/share/url?url=https%3A%2F%2Fnftcalendar.io%2Fnews%2Ffewocious-unveils-details-of-fewos-pfp-collection%2F"
                >
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="m12 24c6.629 0 12-5.371 12-12s-5.371-12-12-12-12 5.371-12 12 5.371 12 12 12zm-6.509-12.26 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <NewsSeeAlso />
        </div>
        <SlideBar />
      </div>
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
