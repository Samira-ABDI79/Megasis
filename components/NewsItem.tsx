import Link from "next/link";

function NewsItem({ News }: any) {
  return (
    <>
      <Link href={`/news/${News?.id}`}>
        <div className="w-full ">
          <div className="px-2 py-4 mx-1 mb-2 bg-white border border-gray-200 rounded md:px-4 dark:bg-zinc-800 dark:border-gray-700">
            <div className="p-4">
              <div className="mb-3">
                <img
                  className="rounded-sm"
                  loading="lazy"
                  src={News.image}
                  alt={News.name}
                />
              </div>

              <h2 className="text-2xl font-bold leading-tight text-black hover:text-indigo-700 dark:text-yellow-100 dark:hover:text-lime-200">
                {News.name}
              </h2>
            </div>
            <div className="flex items-center justify-between px-4 py-2 mt-2">
              <div className="">
                <span className="text-sm text-gray-600 hover:font-normal dark:text-gray-200">
                  {News.date}
                </span>
              </div>
              <div className="">
                <a
                  href="https://nftcalendar.io/news/google-cloud-partners-with-polygon-labs-for-web3-growth/"
                  className="px-5 py-3 text-sm text-gray-800 bg-gray-200 rounded dark:bg-stone-900 dark:text-gray-200 hover:bg-gray-300 hover:text-black"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default NewsItem;
