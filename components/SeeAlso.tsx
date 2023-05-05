import Image from "next/image";
import { useEffect, useState } from "react";
import Tags from "./Tags";
function SeeAlso() {
  const [articles, setArticles] = useState([]);

  const sendrequest = async () => {
    const response = await fetch("http://localhost:3004/nfts?_limit=3");
    const responseData = await response.json();
    setArticles(responseData);
  };
  useEffect(() => {
    sendrequest();
  }, []);

  return (
    <>
      <div className="mt-12">
        <h2 className="mb-2 text-2xl font-semibold  dark:text-yellow-100">
          See Also
        </h2>
        <div
          className="bg-white border border-gray-200 rounded p-6 mt-4 mb-6
                        "
        >
          <div className="grid grid-cols-3 py-4 px-6 gap-4  ">
            {articles?.map((NFT: any) => (
              <div className="mx-3 border rounded ">
                <div className="py-2 mx-2">
                  <a className="w-full h-[150px] " href="/event/nftstonkers/">
                    <Image
                      className="w-full h-[150px] "
                      alt="see also nfts"
                      height={166}
                      width={166}
                      src="/assets/img.png"
                    />
                  </a>

                  <a
                    href="/event/nftstonkers/"
                    className="block px-2 py-4 text-lg "
                  >
                    {NFT.name}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default SeeAlso;

// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:3004/nfts?_limit=3`);

//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
