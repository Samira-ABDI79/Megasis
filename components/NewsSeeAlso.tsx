function NewsSeeAlso() {
  return (
    <>
      <div
        className="p-6 lg:py-8 md:mx-10 md:p-16 
        rounded bg-gray-50 border border-gray-200 dark:bg-zinc-800 dark:border-gray-700 mb-6
                "
      >
        <h2 className="px-2 text-3xl font-semibold dark:text-yellow-100">
          See Also
        </h2>
        <a
          className="block px-2 py-4 text-lg border-b hover:bg-white hover:text-indigo-600 dark:text-yellow-50 dark:hover:bg-zinc-700 dark:hover:text-lime-200"
          href="/news/reddit-collectible-avatars-attracted-over-10m-users/"
        >
          Reddit Collectible Avatars Attracted Over 10M Users In Less Than a
          Year
        </a>
        <a
          className="block px-2 py-4 text-lg border-b hover:bg-white hover:text-indigo-600 dark:text-yellow-50 dark:hover:bg-zinc-700 dark:hover:text-lime-200"
          href="/news/monaco-grand-prix-nft-tickets/"
        >
          Monaco Grand Prix Has Introduced NFT Tickets for Unique Fan Experience
        </a>
        <a
          className="block px-2 py-4 text-lg border-b hover:bg-white hover:text-indigo-600 dark:text-yellow-50 dark:hover:bg-zinc-700 dark:hover:text-lime-200"
          href="/news/binance-nft-marketplace-launches-nft-loan-feature/"
        >
          Binance NFT Marketplace Launches NFT Loan Feature
        </a>
      </div>
    </>
  );
}
export default NewsSeeAlso;
