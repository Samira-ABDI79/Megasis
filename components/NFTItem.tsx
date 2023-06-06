import Image from "next/image";
import Link from "next/link";

const NftItem = ({ NFT }: any) => {
  return (
    <Link href={`/articles/${NFT?.id}`}>
      <div className="flex  flex-wrap p-4 bg-white  my-1 md:my-0 border-gray-200 w-full border-l border-r border-b">
        <div className="w-full md:w-2/5">
          <a href="/event/ekos-genesis-art-collection/">
            <img src={NFT.image} alt={NFT.name} />
          </a>
        </div>
        <div className="w-full px-2 py-3 md:w-3/5 md:py-5 md:px-8">
          <a href="/event/ekos-genesis-art-collection/">
            <h2 className="text-2xl font-bold leading-tight text-black hover:text-indigo-700 dark:text-yellow-100 dark:hover:text-lime-200">
              {NFT.name}
            </h2>
          </a>
          <div className="flex items-center justify-between md:block md:justify-start">
            <div className="py-2 text-black text-normal dark:text-yellow-50 md:text-lg">
              {NFT.date}
            </div>

            {NFT.verified ? (
              <div className="flex flex-wrap items-center pt-0 pb-0 md:pb-2">
                <svg
                  version="1.1"
                  className="w-6 h-6 text-indigo-500 fill-current dark:text-lime-500"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <path
                    d="M437.019,74.98C388.667,26.629,324.38,0,256,0C187.619,0,123.332,26.629,74.98,74.98C26.629,123.332,0,187.62,0,256
                        s26.629,132.667,74.98,181.019C123.332,485.371,187.62,512,256,512s132.667-26.629,181.019-74.98
                        C485.371,388.667,512,324.38,512,256S485.371,123.333,437.019,74.98z M378.306,195.073L235.241,338.139
                        c-2.929,2.929-6.768,4.393-10.606,4.393c-3.839,0-7.678-1.464-10.607-4.393l-80.334-80.333c-5.858-5.857-5.858-15.354,0-21.213
                        c5.857-5.858,15.355-5.858,21.213,0l69.728,69.727l132.458-132.46c5.857-5.858,15.355-5.858,21.213,0
                        C384.164,179.718,384.164,189.215,378.306,195.073z"
                  ></path>
                </svg>
                <span className="px-1 text-sm font-medium text-black dark:text-lime-200">
                  verified
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="pb-0 text-black md:pb-2 text-normal dark:text-yellow-50">
            <p>{NFT.description.slice(0, 250)}...</p>
          </div>
          <div className="pt-4 pb-0 text-right md:pt-2 md:pb-2 md:text-left">
            <a
              href="/event/ekos-genesis-art-collection/"
              className="px-4 py-4 text-sm text-gray-800 bg-gray-200 rounded dark:bg-stone-900 dark:text-gray-200 md:py-3 md:px-5 hover:bg-gray-300 hover:text-black"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NftItem;
